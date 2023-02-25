
const ethers = require('ethers');

const SOUL_WALLET_INTERFACE = new ethers.utils.Interface(
    [
      "function execFromEntryPoint(address dest, uint256 value, bytes func)",
      "function nonce() view returns (uint256)"
    ]);

const BUNDER_RPC_URL_LOCAL = 'http://localhost:3000/rpc';


const UPGRADE_DELAY = 10;

const GUARDIAN_DELAY = 10;

const SALT = 1;

const BLOCKCHAIN_RPC_URL = 'http://localhost:8545/';

const SOUL_WALLET_LOGIC_CONTRACT_ADDRESS = '0xb3f3c82B58976f18E8532164c756B5Df0a9dec86';

const ENTRYPOINT_CONTRACT_ADDRESS = '0x25ddC9Aab8f335c4754ac21061C61240d846C4b5';

const TOKENPAYMASTER_CONTRACT_ADDRESS = '0x2C409D963A7EBf08f1370a6C6adAf6dED38b246A';

const SINGLETON_FACTORY_CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const USDC_CONTRACT_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

const ADMIN_PRIVATE_KEY = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

const ADMIN_ADDRESS = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

const MOCK_GAS_FEES = {
    "low": {
      "suggestedMaxPriorityFeePerGas": "0.1",
      "suggestedMaxFeePerGas": "10"
    },
    "medium": {
      "suggestedMaxPriorityFeePerGas": "0.1",
      "suggestedMaxFeePerGas": "11"
    },
    "high": {
      "suggestedMaxPriorityFeePerGas": "0.1",
      "suggestedMaxFeePerGas": "12"
    },
    "estimatedBaseFee": "1",
    "networkCongestion": 0.31675,
    "latestPriorityFeeRange": [
      "0.131281956",
      "4.015436404"
    ],
    "historicalPriorityFeeRange": [
      "0.02829803",
      "58.45567467"
    ],
    "historicalBaseFeeRange": [
      "13.492240252",
      "17.51875421"
    ],
    "priorityFeeTrend": "level",
    "baseFeeTrend": "down"
  }

export const CONFIG = {
    SOUL_WALLET_INTERFACE,
    BUNDER_RPC_URL_LOCAL,
    UPGRADE_DELAY,
    GUARDIAN_DELAY,
    BLOCKCHAIN_RPC_URL,
    SALT,
    SOUL_WALLET_LOGIC_CONTRACT_ADDRESS,
    ENTRYPOINT_CONTRACT_ADDRESS,
    TOKENPAYMASTER_CONTRACT_ADDRESS,
    SINGLETON_FACTORY_CONTRACT_ADDRESS,
    MOCK_GAS_FEES,
    USDC_CONTRACT_ADDRESS,
    ADMIN_PRIVATE_KEY,
    ADMIN_ADDRESS
}
