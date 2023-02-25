import { createContext, useContext, useState } from "react";

const DEFAULT_VALUE = {
  getUSDCBalance: () => {
    return 100;
  },
  setUSDCBalance: (balance) => {},
};

const UsdcContext = createContext(DEFAULT_VALUE);

/**
 * Provides instance of usdc to child components
 */
const UsdcProvider = function ({ children }) {
  const initialBalance = 100;
  const [USDCBalance, setUSDCBalance] = useState(initialBalance);
  const usdc = {
    getUSDCBalance: () => {
      return USDCBalance;
    },
    setUSDCBalance: (balance) => {
      setUSDCBalance(balance);
    },
  };
  return <UsdcContext.Provider value={usdc}>{children}</UsdcContext.Provider>;
};

const useUSDCContext = function () {
  return useContext(UsdcContext);
};

export { UsdcContext, UsdcProvider, useUSDCContext };
