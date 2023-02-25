import * as ethers from "ethers";
import { SoulWalletLib } from "soul-wallet-lib";
import * as constants from "./utils/constants.js";

// const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545/");
const initializedSoulWalletLib = new SoulWalletLib(constants.CONFIG.ENTRYPOINT_CONTRACT_ADDRESS);

export async function calculateWalletAddress() {

    const ownerSigner = ethers.Wallet.createRandom();

    const ownerWalletAddress = initializedSoulWalletLib.calculateWalletAddress(
        constants.CONFIG.SOUL_WALLET_LOGIC_CONTRACT_ADDRESS,
        constants.CONFIG.ENTRYPOINT_CONTRACT_ADDRESS,
        ownerSigner.address,
        constants.CONFIG.UPGRADE_DELAY,
        constants.CONFIG.GUARDIAN_DELAY,
        ethers.constants.AddressZero,
        constants.CONFIG.TOKENPAYMASTER_CONTRACT_ADDRESS,
        constants.CONFIG.SALT );

    return {
        ownerPrivateKey : ownerSigner.privateKey,
        ownerPublicKey : ownerSigner.publicKey,
        ownerWalletAddress :ownerWalletAddress
    }

}