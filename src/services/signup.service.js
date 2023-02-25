import * as walletService from "./ethereum/wallet.service.js";
import * as usdcoin from "./ethereum/usdcoin.service.js";

export async function signup(role) {
  if (role === "identity") {
    const walletAddress = await walletService.createIdentityAccount();
    usdcoin.fundWalletBalance(walletAddress); 
    return walletAddress;
  }
  if (role === "claim-issuer") {
    return;
  }
  if (role === "claim-verifier") {
    return;
  }
  throw Error("Invalid role");
}