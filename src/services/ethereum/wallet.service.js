import * as ethers from "ethers";
import constants from "../utils/constants.js";
import claimHolderABI from "./abis/ClaimHolder.json";
import * as usdCoin from "./usdcoin.service.js";
import verifierABI from "./abis/ClaimVerifier.json";
import { getClaimIssuer } from "../api/identity/identityService";

const ClaimHolder_factory = new ethers.ContractFactory(
  claimHolderABI.abi,
  claimHolderABI.bytecode
);

const Verifier_factory = new ethers.ContractFactory(
  verifierABI.abi,
  verifierABI.bytecode
);

const issuerManagementAccount = constants.PROVIDER.getSigner(0);
const issuerClaimAccount = constants.PROVIDER.getSigner(1);
const verifierAccount = constants.PROVIDER.getSigner(2);
const identityAccount = constants.PROVIDER.getSigner(3);

export async function createIdentityAccount() {
  return await createWalletForSigner(identityAccount);
}

export async function createIssuerAccount() {
  const issuerWalletAddress = await createWalletForSigner(
    issuerManagementAccount
  );
  console.log("Created issuer claim holder");
  const issuerClaimKeyHash = ethers.utils.keccak256(
    await issuerClaimAccount.getAddress()
  );
  await ClaimHolder_factory.attach(issuerWalletAddress)
    .connect(issuerManagementAccount)
    .addKey(
      issuerClaimKeyHash,
      constants.KEY_PURPOSES.CLAIM_SIGNER,
      constants.KEY_TYPES.ECDSA,
      {
        gasLimit: 4612388,
      }
    )
    .then((tx) => tx.wait());
  console.log("Added claims key to issuer claim holder");
  return issuerWalletAddress;
}

export async function createVerifierAccount() {
  return await createWalletForSigner(verifierAccount);
}

export async function createWalletForVerifier(signer) {
  const response = await getClaimIssuer();
  const trustedIssuer = response[0]["walletAddress"];
  const contract = await Verifier_factory.connect(signer)
    .deploy(trustedIssuer)
    .then((c) => c.deployed());
  console.log("verifier  deployed for:", await signer.getAddress());
  console.log("Contract address:", contract.address);
  return contract.address;
}

export async function createWalletForSigner(signer) {
  const contract = await ClaimHolder_factory.connect(signer)
    .deploy()
    .then((c) => c.deployed());
  console.log("Claim holder deployed for:", await signer.getAddress());
  console.log("Contract address:", contract.address);
  return contract.address;
}

export async function addKey(signer, walletContractAddress) {
  const contract = ClaimHolder_factory.attach(walletContractAddress).connect(
    signer
  );
  const issuerClaimKeyHash = ethers.utils.keccak256(signer.address);
  await contract
    .connect(signer)
    .addKey(
      issuerClaimKeyHash,
      constants.KEY_PURPOSES.CLAIM_SIGNER,
      constants.KEY_TYPES.ECDSA,
      {
        gasLimit: 4612388,
      }
    )
    .then((tx) => tx.wait());
}

export async function signClaim(signer, identityWalletAddress, claimData) {
  const claimDataInHex = ethers.utils.hexlify(
    ethers.utils.toUtf8Bytes(claimData)
  );
  const claimDataToSign = [
    identityWalletAddress,
    constants.CLAIM_TYPES.KYC,
    claimDataInHex,
  ];
  const claimDataToSignBytes = ethers.utils.solidityPack(
    ["address", "uint256", "bytes"],
    claimDataToSign
  );
  const hashedDataToSign = ethers.utils.keccak256(claimDataToSignBytes);
  const signature = await signer.signMessage(
    ethers.utils.arrayify(hashedDataToSign)
  );
  return {
    claimType: constants.CLAIM_TYPES.KYC,
    claimScheme: constants.CLAIM_SCHEMES.ECDSA,
    issuerAddress: signer.address,
    signature: signature,
    claimData: claimDataInHex,
    uri: "https://www.example.com/issuer/",
  };
}

export async function addClaim(identityWalletAddress, signer, claim) {
  const addClaimABI = ClaimHolder_factory.interface.encodeFunctionData(
    "addClaim",
    [
      claim.claimType, // CLAIM_TYPES.KYC,
      claim.claimScheme, // CLAIM_SCHEMES.ECDSA,
      claim.issuerAddress, // claimIssuer,
      claim.signature, // signature
      claim.claimData, // claimDataInHex,
      claim.uri, // "https://www.example.com/issuer/",
    ]
  );
  await ClaimHolder_factory.attach(identityWalletAddress)
    .connect(signer)
    .execute(identityWalletAddress, 0, addClaimABI, {
      gasLimit: 4612388,
    })
    .then((tx) => tx.wait());
}

export async function getBalances(walletAddress) {
  const balances = [
    {
      currencyName: "ETH",
      currencyValue: await constants.PROVIDER.getBalance(walletAddress)
        .then((b) => ethers.utils.formatEther(b))
        .then((b) => b.toString()),
      id: 1,
    },
    {
      currencyName: "USDC",
      currencyValue: await usdCoin
        .balanceOf(walletAddress)
        .then((b) => b.toString()),
      id: 2,
    },
  ];
  return balances;
}

// export async function getKeys(walletAddress) {
//   const soulWalletContract = new ethers.Contract(
//     walletAddress,
//     SOUL_WALLET_INTERFACE,
//     provider
//   );
//identity --> hash id acc mgt
//issuer --> mgt and claim acc
//
//   const managmentKeysObtained = await soulWalletContract.getKeysByPurpose(1);

//   let keysId = managmentKeysObtained;

//   if (!isIdentity) {
//     const claimSignerKeysObtained = await soulWalletContract.getKeysByPurpose(
//       3
//     );
//     for (let i = 0; i < claimSignerKeysObtained.length; i++) {
//       keysId.push(claimSignerKeysObtained[i]);
//     }
//   }

//   let keysData = [];

//   for (let i = 0; i < keysId.length; i++) {
//     let keyData = await soulWalletContract.getKey(keysId[i]);
//     keysData.push({
//       keyId: keyData[2],
//       keyPurpose: keyToPurpose.get(keyData[0].toNumber()),
//       keyType: keyToType.get(keyData[1].toNumber()),
//     });
//   }

//   return keysData;
// }

export async function getKeys(role) {
  let keysData = [];

  if (role === "identity") {
    let identityAddress = await identityAccount.getAddress();
    const identityKeyHash = ethers.utils.keccak256(identityAddress);

    keysData.push({
      id: "1",
      keyId: identityKeyHash,
      keyPurpose: "MANAGEMENT",
      keyType: "ECDSA",
    });
  }
  if (role === "claim-issuer") {
    let issuerMgtAccount = await issuerManagementAccount.getAddress();
    const issuerMgtAccountKeyHash = ethers.utils.keccak256(issuerMgtAccount);

    keysData.push({
      id: "2",
      keyId: issuerMgtAccountKeyHash,
      keyPurpose: "MANAGEMENT",
      keyType: "ECDSA",
    });

    let issuerClaimAccount = await issuerClaimAccount.getAddress();
    const issuerClaimKeyHash = ethers.utils.keccak256(issuerClaimAccount);

    keysData.push({
      id: "3",
      keyId: issuerClaimKeyHash,
      keyPurpose: "CLAIM_SIGNER",
      keyType: "ECDSA",
    });
  }
  return { products: keysData };
}
