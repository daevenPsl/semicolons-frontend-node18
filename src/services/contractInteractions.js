
const ethers = require('ethers');
const SOUL_WALLET_LOGIC_ABI = require("./../artifacts/contracts/SoulWallet.sol/SoulWallet.json");
const { keyToPurpose, keyToType } = require('./utils/mappings');

const SOUL_WALLET_INTERFACE = ethers.utils.Interface(SOUL_WALLET_LOGIC_ABI);
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545/");

export async function getKeysFromWallet(walletAddress, isIdentity) {

    const soulWalletContract = new ethers.Contract(walletAddress, SOUL_WALLET_INTERFACE, provider);

    const managmentKeysObtained = await soulWalletContract.getKeysByPurpose(1);

    let keysId = managmentKeysObtained;

    // for (let i =0; i <managmentKeysObtained.length; i++) {
    //     keysId.push(managmentKeysObtained)
    // }

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

    return keysData;
    
}

export async function getClaimsFromWallet(walletAddress, isIdentity) {

    const soulWalletContract = new ethers.Contract(walletAddress, SOUL_WALLET_INTERFACE, provider);

    const managmentKeysObtained = await soulWalletContract.getKeysByPurpose(1);

    let keysId = managmentKeysObtained;

    // for (let i =0; i <managmentKeysObtained.length; i++) {
    //     keysId.push(managmentKeysObtained)
    // }

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

    return keysData;
    
}


// export async function getBalance(walletAddress, isIdentity) {

//     const soulWalletContract = new ethers.Contract(walletAddress, SOUL_WALLET_INTERFACE, provider);

//     const managmentKeysObtained = await soulWalletContract.getKeysByPurpose(1);

//     let keysId = managmentKeysObtained;

//     // for (let i =0; i <managmentKeysObtained.length; i++) {
//     //     keysId.push(managmentKeysObtained)
//     // }

//     if (!isIdentity) {
//         const claimSignerKeysObtained = await soulWalletContract.getKeysByPurpose(3);
//         for (let i = 0; i< claimSignerKeysObtained.length; i++) {
//             keysId.push(claimSignerKeysObtained[i]);
//         }
//     }

//     let keysData = [];

//     for (let i =0; i<keysId.length; i++) {
//         let keyData = await soulWalletContract.getKey(keysId[i]);
//         keysData.push({
//             keyId : keyData[2],
//             keyPurpose : keyToPurpose.get(keyData[0].toNumber()),
//             keyType : keyToType.get(keyData[1].toNumber())
//         })
//     }

//     return keysData;
    
// }
