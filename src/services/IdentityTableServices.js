import axios from "axios";
// https://dummyjson.com/products/1
export const IdentityTableService = {

  getData: async () => {
    return axios.get('https://dummyjson.com/products?limit=10').then((res) => res.data);
  },
};

