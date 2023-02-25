import * as ethers from "ethers";
import constants from "../utils/constants.js";
import claimHolderABI from "./abis/ClaimHolder.json";


const ClaimHolder_factory = new ethers.ContractFactory(claimHolderABI.abi, claimHolderABI.bytecode);

const issuerManagementAccount = constants.PROVIDER.getSigner(0);
const issuerClaimAccount = constants.PROVIDER.getSigner(1);
const verifierAccount = constants.PROVIDER.getSigner(2);
const identityAccount = constants.PROVIDER.getSigner(3);

export async function createIdentityAccount() {
  return await createWalletForSigner(identityAccount);
}

export async function createIssuerAccount() {
  return await createWalletForSigner(issuerManagementAccount);
}

export async function createWalletForSigner(signer) {
  const contract = await ClaimHolder_factory
    .connect(signer)
    .deploy()
    .then((c) => c.deployed()); 
  console.log("Claim holder deployed for:", signer.address);
  console.log("Contract address:", contract.address);
  return contract.address;
}

export async function addKey(signer, walletContractAddress) {
  const contract = ClaimHolder_factory.attach(walletContractAddress).connect(signer);
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
    ).then(tx => tx.wait());
}

export async function signClaim(signer, identityWalletAddress, claimData) {
  const claimDataInHex = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(claimData));
  const claimDataToSign = [identityWalletAddress, constants.CLAIM_TYPES.KYC, claimDataInHex];
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
  }
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

