import axios from "axios";
// https://dummyjson.com/products/1
export const IdentityTableService = {
  getData: async () => {
    return axios.get('https://dummyjson.com/products?limit=2').then((res) => res.data);
  },
};

