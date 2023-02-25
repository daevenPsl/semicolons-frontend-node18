import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { BalanceService } from "../services/balanceService";
import { IdentityTableService } from "../services/IdentityTableServices";
export const useGetData = (options) => {
  return useQuery(
    ["TABLES"],
    () => IdentityTableService.getData(),
    options
  );
};