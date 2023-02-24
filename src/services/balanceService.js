import axios from "axios";

// import { ApiEndpoint } from "../constants/api-endpoint.constant";

// import { CandidateData, CandidateApiResponse } from "../types/candidate.type";


// https://dummyjson.com/products/1



export const BalanceService = {
  getBalance: async () => {
    // const apiEndpoint = new ApiEndpoint();

    // return axios({
    //   url: `${apiEndpoint.GET_LIST_OF_CANDIDATE}`,

    //   withCredentials: false,
    // }).then((res) => res.data.data);

    return axios.get('https://dummyjson.com/products?limit=10').then((res) => res.data);

    // JSON.parse(jstring)
    // res.data.products
  },

//   postCandidateData: async (data: FormData): Promise<CandidateApiResponse> => {
//     const apiEndpoint = new ApiEndpoint();

//     return axios({
//       url: `${apiEndpoint.UPLOAD_FILE}`,

//       method: "POST",

//       data,
//     }).then((res: any) => res?.data);
//   },

//   putFeedbackData: async (
//     data: string,
//     id: string
//   ): Promise<CandidateApiResponse> => {
//     const apiEndpoint = new ApiEndpoint();

//     return axios({
//       url: `${apiEndpoint.GET_LIST_OF_CANDIDATE}/${id}`,

//       method: "PUT",

//       data,
//     }).then((res: any) => res?.data);
//   },
};
