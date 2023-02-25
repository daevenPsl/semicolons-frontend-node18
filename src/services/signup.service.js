import * as walletService from "./ethereum/wallet.service.js";
import * as usdcoin from "./ethereum/usdcoin.service.js";
import { createIdentity } from "./api/identity/identityService";

export async function signup(role) {
  if (role === "identity") {
    const walletAddress = await walletService.createIdentityAccount();
    usdcoin.fundWalletBalance(walletAddress); 
    return walletAddress;
  }
  if (role === "claim-issuer") {
    return walletService.createIssuerAccount();
  }
  if (role === "claim-verifier") {
    return walletService.createVerifierAccount();
  }
  throw Error("Invalid role");
}

export async function storeIdentity(username, email, walletAddress, role) {
  try {
    let response = await createIdentity(username, email, walletAddress, role);
    console.log("Stored identity " + response);
  } catch (e) {
    console.log("exception occurred while storing identity");
  }
}
