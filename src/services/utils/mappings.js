export const keyToPurpose = new Map(); // Mapping to store Network to NetWork Bundler RPC 
keyToPurpose.set(1, "MANAGMENT KEY");
keyToPurpose.set(3, "CLAIM SIGNER KEY");

export const keyToType = new Map(); // Mapping to store Network to NetWork Bundler RPC 
keyToPurpose.set(1, "ECDSA");

export const claimToType = new Map(); // Mapping to store Network to NetWork Bundler RPC 
export const claimTypeToClaimId = new Map(); // Mapping to store Network to NetWork Bundler RPC 
claimToType.set(1, "KYC");
claimTypeToClaimId.set("KYC", 1);