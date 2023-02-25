import * as walletService from "./ethereum/wallet.service.js";
import { createIdentity } from "./api/identity/identityService";

export async function signup(role) {
  if (role === "identity") {
    return walletService.createIdentityAccount();
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
