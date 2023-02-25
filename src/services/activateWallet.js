import { SoulWalletLib } from "soul-wallet-lib";
import * as ethers from "ethers";
import * as constants from "./utils/constants.js";

const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545/");
const initializedSoulWalletLib = new SoulWalletLib(
  constants.CONFIG.ENTRYPOINT_CONTRACT_ADDRESS
);

export async function activateWallet(ownerPublicKey, walletOwnerAddress) {
  let activateUserOperation = initializedSoulWalletLib.activateWalletOp(
    constants.CONFIG.SOUL_WALLET_LOGIC_CONTRACT_ADDRESS,
    constants.CONFIG.ENTRYPOINT_CONTRACT_ADDRESS,
    ownerPublicKey,
    constants.CONFIG.UPGRADE_DELAY,
    constants.CONFIG.GUARDIAN_DELAY,
    ethers.constants.AddressZero,
    constants.CONFIG.TOKENPAYMASTER_CONTRACT_ADDRESS,
    ethers.utils
      .parseUnits(
        constants.CONFIG.MOCK_GAS_FEES.high.suggestedMaxFeePerGas,
        "gwei"
      )
      .toString(),
    ethers.utils
      .parseUnits(
        constants.CONFIG.MOCK_GAS_FEES.high.suggestedMaxPriorityFeePerGas,
        "gwei"
      )
      .toString(),
    constants.CONFIG.SALT
  );

  activateUserOperation.paymasterAndData =
    await calculateUserOperationPaymasterAndData(activateUserOperation);

  const ADMIN_SIGNER = new ethers.Wallet(
    constants.CONFIG.ADMIN_PRIVATE_KEY,
    provider
  );

  await fundWalletAddressWithUSDC(ADMIN_SIGNER);

  const approveCallData = await calculateActivateUserOperationCallData();

  activateUserOperation.callData = approveCallData.callData;
  activateUserOperation.callGasLimit = approveCallData.callGasLimit;

  const bundler = new initializedSoulWalletLib.Bundler(
    constants.CONFIG.ENTRYPOINT_CONTRACT_ADDRESS,
    provider,
    constants.CONFIG.BUNDER_RPC_URL_LOCAL
  );

  const validation = await bundler.simulateValidation(activateUserOperation);
  if (validation.status !== 0) {
    console.log(
      "AA Activate Script Log : Bundler Simulate Validation Failed : Returned validation is : ",
      validation
    );
    throw new Error(`error code:${validation.status}`);
  }

  const simulate = await bundler.simulateHandleOp(activateUserOperation);
  if (simulate.status !== 0) {
    console.log(
      "AA Activate Script Log : reached3, simulate.status",
      simulate.status
    );
    console.log("AA Activate Script Log : simulate", simulate);
    throw new Error(`error code:${simulate.status}`);
  }

  const bundlerEvent = bundler.sendUserOperation(
    activateUserOperation,
    1000 * 60 * 3
  );

  startBundlerEvent(bundlerEvent, walletOwnerAddress);

  // Timeout Loop
  let a = 15;
  while (a--) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return true;
}

async function fundWalletAddressWithUSDC(adminSigner) {
  // call mint function on USDC contract for the walletAddress
}

async function calculateActivateUserOperationCallData(provider, walletAddress) {
  const approveData = [
    {
      token: constants.CONFIG.USDC_CONTRACT_ADDRESS,
      spender: constants.CONFIG.TOKENPAYMASTER_CONTRACT_ADDRESS,
      value: ethers.utils.parseEther("100").toString(),
    },
  ];

  return await initializedSoulWalletLib.Tokens.ERC20.getApproveCallData(
    provider,
    walletAddress,
    approveData
  );
}

async function calculateUserOperationPaymasterAndData(userOperation) {
  const requiredPreFundObtained = userOperation.requiredPrefund(
    ethers.utils.parseUnits(
      constants.CONFIG.MOCK_GAS_FEES.estimatedBaseFee,
      "gwei"
    )
  );

  console.log(
    "AA Activate Script Log : UserOperation Log - Calculated Required PreFund as : ",
    ethers.utils.formatEther(requiredPreFundObtained),
    "ETH"
  );

  const exchangePriceObtained =
    await initializedSoulWalletLib.getPaymasterExchangePrice(
      provider,
      constants.CONFIG.TOKENPAYMASTER_CONTRACT_ADDRESS,
      constants.CONFIG.USDC_CONTRACT_ADDRESS,
      true
    );

  const tokenDecimals = exchangePriceObtained.tokenDecimals || 6;
  console.log(
    "AA Activate Script Log : UserOperation Log - Calculated Exchange Price  as : ",
    +ethers.utils.formatUnits(
      exchangePriceObtained.price,
      exchangePriceObtained.decimals
    ),
    "USDC/ETH"
  );

  const requiredUSDC = requiredPreFundObtained
    .mul(exchangePriceObtained.price)
    .mul(ethers.BigNumber.from(10).pow(tokenDecimals))
    .div(ethers.BigNumber.from(10).pow(exchangePriceObtained.decimals))
    .div(ethers.BigNumber.from(10).pow(18));

  console.log(
    "AA Activate Script Log : UserOperation Log - Calculated Required USDC  as : ",
    ethers.utils.formatUnits(requiredUSDC, tokenDecimals),
    "USDC"
  );
  const maxUSDC = requiredUSDC.mul(110).div(100); // 10% more

  return initializedSoulWalletLib.getPaymasterData(
    constants.CONFIG.TOKENPAYMASTER_CONTRACT_ADDRESS,
    constants.CONFIG.USDC_CONTRACT_ADDRESS,
    maxUSDC
  );
}

function startBundlerEvent(bundlerEvent, walletAddress, handlers) {
  bundlerEvent.on("error", (err) => {
    console.log(
      "AA Activate Script Log : Bundler Event : Error triggered, Error is ",
      err
    );
    return "";
  });
  bundlerEvent.on("error", handlers.error);
  bundlerEvent.on("send", (userOpHash) => {
    console.log(
      "AA Activate Script Log : Bundler Event : Send received for userOpHash",
      userOpHash
    );
  });
  bundlerEvent.on("receipt", (receipt) => {
    console.log(
      "AA Activate Script Log : Bundler Event Received with receipt success: ",
      receipt.success
    );
    return walletAddress;
  });
  bundlerEvent.on("timeout", () => {
    console.log("AA Activate Script Log : Bundler Event : Timeout reached");
    console.log("timeout");
    return "";
  });
}
