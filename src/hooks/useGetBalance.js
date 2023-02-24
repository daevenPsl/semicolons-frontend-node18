import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";


// import { CandidateService } from "../services/candidate.service";
import { BalanceService } from "../services/balanceService";

// import { ApiErrorData } from '../types/api.type';

// import { CandidateData } from '../types/candidate.type';

export const useGetBalance = (options) => {
  return useQuery(
    ['BALANCE'],

    () => BalanceService.getBalance(),

    options
  );
};
