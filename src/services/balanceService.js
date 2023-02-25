import axios from "axios";

import * as ethers from "ethers";

// https://dummyjson.com/products/1

export const BalanceService = {
  getBalance: async () => {
    // const apiEndpoint = new ApiEndpoint();

    // return axios({
    //   url: `${apiEndpoint.GET_LIST_OF_CANDIDATE}`,

    //   withCredentials: false,
    // }).then((res) => res.data.data);

   
    const username=localStorage.getItem('username');
    const password=localStorage.getItem('password')
    const email= localStorage.getItem('userEmail')
    const role= localStorage.getItem('role');

    

    console.log({
      email: email,
      password: password,
      username: username,
      role: role
    });


    return axios.get('https://dummyjson.com/products?limit=2').then((res) => res.data);

    
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
