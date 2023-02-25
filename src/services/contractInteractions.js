const ethers = require('ethers');
const constants = require('./utils/constants');
const SOUL_WALLET_LOGIC_ABI = require("./../artifacts/contracts/SoulWallet.sol/SoulWallet.json");
const MOCK_USDC_ABI = require("./../artifacts/contracts/dev/USDC.sol/USDCoin.json")
const { keyToPurpose, keyToType, claimTypeToClaimId, claimToType } = require('./utils/mappings');

const SOUL_WALLET_INTERFACE = new ethers.utils.Interface(SOUL_WALLET_LOGIC_ABI.abi);
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545/");
const EOASigner = new ethers.Wallet(constants.CONFIG.ADMIN_PRIVATE_KEY, provider);

export async function getKeysFromWallet(walletAddress, isIdentity) {

    const soulWalletContract = new ethers.Contract(walletAddress, SOUL_WALLET_INTERFACE, provider);

    const managmentKeysObtained = await soulWalletContract.getKeysByPurpose(1);

    let keysId = managmentKeysObtained;


    if (!isIdentity) {
        const claimSignerKeysObtained = await soulWalletContract.getKeysByPurpose(3);
        for (let i = 0; i< claimSignerKeysObtained.length; i++) {
            keysId.push(claimSignerKeysObtained[i]);
        }
    }

    let keysData = [];

    for (let i =0; i<keysId.length; i++) {
        let keyData = await soulWalletContract.getKey(keysId[i]);
        keysData.push({
            keyId : keyData[2],
            keyPurpose : keyToPurpose.get(keyData[0].toNumber()),
            keyType : keyToType.get(keyData[1].toNumber())
        })
    }
    console.log("Printing Keys Data from contract", keysData);
    return keysData;
    
}

export async function getClaimsFromWallet(walletAddress, claimIssuerWalletAddressToName) {

    const soulWalletContract = new ethers.Contract(walletAddress, SOUL_WALLET_INTERFACE, provider);

    const obtainedKYCClaims = await soulWalletContract.getClaimIdsByType(claimTypeToClaimId("KYC"));

    let claimsData = [];

    for (let i =0; i<obtainedKYCClaims.length; i++) {
        let claimData = await soulWalletContract.getClaim(obtainedKYCClaims[i]);
        claimsData.push({
            claimType : claimToType.get(claimTypeToClaimId("KYC")),
            issuerName : claimIssuerWalletAddressToName.get(claimData[2]),
            claimStatus : true
        })
    }

    console.log("Printing Claims Data from contract", claimsData);
    return claimsData;
    
}


export async function getBalance(walletAddress) {
    const balanceData = [];
   
    // Calculate Balance for ETH
    const ETHBalance= await provider.getBalance(walletAddress);
    const balanceInEth = ethers.utils.formatEther(ETHBalance);
    balanceData.push(balanceInEth);


    const usdcContract = new ethers.Contract(constants.CONFIG.USDC_CONTRACT_ADDRESS, MOCK_USDC_ABI, provider);
    const balanceUSDC = (await usdcContract.balanceOf(walletAddress)).toNumber();

    balanceData.push(
        {
            ETH : balanceInEth,
            USDC : balanceUSDC
        }
    )



}


export async function fundWalletAddressWithUSDC (walletAddress) {
    // call mint function on USDC contract for the walletAddress
    const usdcContract = new ethers.Contract(constants.CONFIG.USDC_CONTRACT_ADDRESS, MOCK_USDC_ABI, provider);
    
    const mintTransaction = usdcContract.mint(walletAddress, ethers.BigNumber.from("100000000000000000000"))
    await mintTransaction.wait(1);


}