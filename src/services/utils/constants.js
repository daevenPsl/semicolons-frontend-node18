import * as ethers from "ethers";

const KEY_PURPOSES = {
  MANAGEMENT: 1,
  CLAIM_SIGNER: 3,
};

const KEY_TYPES = {
  ECDSA: 1,
};

const CLAIM_SCHEMES = {
  ECDSA: 1,
};

const CLAIM_TYPES = {
  KYC: 7,
};

const NETWORK_URL = "http://localhost:8545/";

const provider = new ethers.providers.JsonRpcProvider(NETWORK_URL);


export default {
  KEY_PURPOSES,
  KEY_TYPES,
  CLAIM_SCHEMES,
  CLAIM_TYPES,
  PROVIDER: provider,
};
