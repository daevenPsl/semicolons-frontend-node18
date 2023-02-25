import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { BalanceService } from "../services/balanceService";
import { IdentityTableService } from "../services/IdentityTableServices";
import { getKeys } from "../../src/services/ethereum/wallet.service";

export const useGetData = (options) => {
  return useQuery(
    ["TABLES"],
    async () => {
      let role = localStorage.getItem("role");
      let response = await getKeys(role);
      return response;
    },
    options
  );
};
