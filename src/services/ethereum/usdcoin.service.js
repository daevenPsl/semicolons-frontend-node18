import * as ethers from "ethers";
import constants from "../utils/constants.js";
import usdCoinABI from "./abis/USDCoin.json";

const USDC_ADDRESS="0x9E545E3C0baAB3E08CdfD552C960A1050f373042"

const eoa = constants.PROVIDER.getSigner(0);

const usdCoin = new ethers.ContractFactory(usdCoinABI.abi, usdCoinABI.bytecode)
  .attach(USDC_ADDRESS)
  .connect(eoa)

export async function balanceOf(address) {
  return usdCoin
    .balanceOf(address)
    .then((b) => b.div(ethers.BigNumber.from(1000000)));
}

export async function fundWalletBalance(address) {
  await usdCoin
    .mint(address, ethers.BigNumber.from("100000000"))
    .then((tx) => tx.wait());
}

export async function reduceBalance(address, amount) {
  await usdCoin
    .burn(address, ethers.BigNumber.from(amount))
    .then((tx) => tx.wait());
}