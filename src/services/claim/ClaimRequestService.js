import APIService from "../../library/apiService";

const instance = new APIService();

export const getClaim = async () => {
  try {
    let response = await instance.getRequest({}, "/claim/retrieve", {});
    return response;
  } catch (exception) {
    console.log("exception in get claim function: " + exception);
    throw new Error("claim retrieval exception");
  }
};

export const saveClaim = async (username, walletAddress, claimType) => {
  try {
    let headers = {};
    let data = {
      username,
      walletAddress,
      claimType,
    };
    let response = await instance.postRequest(
      headers,
      "/claim/submit",
      JSON.stringify(data)
    );
    return response;
  } catch (exception) {
    console.log("Exception occurred during submitting claims:   " + exception);
    throw new Error("Exception occurred during submitting claims");
  }
};
