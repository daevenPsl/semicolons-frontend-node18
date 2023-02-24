import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";


// import { CandidateService } from "../services/candidate.service";
import { BalanceService } from "../services/balanceService";



export const useGetBalance = (options) => {
  return useQuery(
    ['BALANCE'],

    () => BalanceService.getBalance(),

    options
  );
};
