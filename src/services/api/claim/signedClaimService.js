import APIService from "../library/apiService";

const instance = new APIService();

export const getSignedClaim = async () => {
  try {
    let response = await instance.getRequest({}, "/signed-claims", {});
    return response;
  } catch (exception) {
    console.log("exception in get signed claim function: " + exception);
    throw new Error("Signed claim retrieval exception");
  }
};

export const saveSignedClaim = async (
  username,
  walletAddress,
  claimType,
  claimScheme,
  issuerAddress,
  signature,
  claimData,
  uri
) => {
  try {
    let headers = {};
    let data = {
      username,
      walletAddress,
      claimType,
      claimScheme,
      issuerAddress,
      signature,
      claimData,
      uri,
    };
    let response = await instance.postRequest(
      headers,
      "/signed-claims",
      JSON.stringify(data)
    );
    return response;
  } catch (exception) {
    console.log(
      "Exception occurred during saving signed claims:   " + exception
    );
    throw new Error("Exception occurred during saving signed claims");
  }
};

export const deleteSignedClaim = async (walletAddress) => {
  try {
    let headers = {};

    let response = await instance.deleteRequest(
      headers,
      `/signed-claims/${walletAddress}`,
      {}
    );
    return response;
  } catch (exception) {
    console.log(
      "Exception occurred during saving signed claims:   " + exception
    );
    throw new Error("Exception occurred during saving signed claims");
  }
};
