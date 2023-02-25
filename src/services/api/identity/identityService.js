import APIService from "../library/apiService";

const instance = new APIService();

export const getIdentities = async () => {
  try {
    let response = await instance.getRequest({}, "/identity/identities", {});
    return response;
  } catch (exception) {
    console.log("exception in get identities function: " + exception);
    throw new Error("identitites retrieval exception");
  }
};

export const getIdentity = async (walletAddress) => {
  try {
    let response = await instance.getRequest(
      {},
      `/identity/getIdentity/${walletAddress}`
    );
    return response;
  } catch (exception) {
    console.log("exception in get identities function: " + exception);
    throw new Error("identitites retrieval exception");
  }
};

export const createIdentity = async (username, email, walletAddress, role) => {
  let ROLE = null;
  if (role === "identity") {
    ROLE = "Identity";
  }
  if (role === "claim-issuer") {
    ROLE = "Issuer";
  }
  if (role === "claim-verifier") {
    ROLE = "Verifier";
  }
  try {
    let headers = {};
    let data = {
      username,
      email,
      walletAddress,
      role: ROLE,
    };
    let response = await instance.postRequest(
      headers,
      "/identity/createIdentity",
      JSON.stringify(data)
    );
    return response;
  } catch (exception) {
    console.log("Exception occurred during saving identity:   " + exception);
    throw new Error("Exception occurred during saving identity");
  }
};

export const getClaimIssuer = async () => {
  try {
    let response = await instance.getRequest({}, `/identity/claimIssuers`);
    return response;
  } catch (exception) {
    console.log("exception in get claim issuer function: " + exception);
    throw new Error("claim issuer retrieval exception");
  }
};
