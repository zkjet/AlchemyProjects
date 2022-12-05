// Setup: npm install @alch/alchemy-sdk
const { Network, Alchemy } = require("alchemy-sdk");
const dotenv = require("dotenv");
require("dotenv").config();
dotenv.config();
// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "API_KEY",
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("The latest block is", latestBlock);
}

main();
