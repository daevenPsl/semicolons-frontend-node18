import { createContext, useContext, useState } from "react";

const DEFAULT_VALUE = {
  USDCBalance: 100,
  setUSDCBalance: () => {},
};

const UsdcContext = createContext(DEFAULT_VALUE);

/**
 * Provides instance of usdc to child components
 */
const UsdcProvider = function ({ children }) {
  const initialBalance = 100;
  const [USDCBalance, setUSDCBalance] = useState(initialBalance);
  const usdc = {
    USDCBalance: USDCBalance,
    setUSDCBalance: (balance) => {
      setUSDCBalance(balance);
      console.log("update usdc balance", balance);
    },
  };
  return <UsdcContext.Provider value={usdc}>{children}</UsdcContext.Provider>;
};

const useUSDCContext = function () {
  return useContext(UsdcContext);
};

export { UsdcContext, UsdcProvider, useUSDCContext };
