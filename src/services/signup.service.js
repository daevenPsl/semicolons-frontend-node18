import * as walletService from "./ethereum/wallet.service.js";

export async function signup(role) {
  if (role === "identity") {
    return walletService.createIdentityAccount();
  }
  if (role === "claim-issuer") {
    return;
  }
  if (role === "claim-verifier") {
    return;
  }
  throw Error("Invalid role");
}