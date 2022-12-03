/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");

const QUICK_NODE_API_KEY = process.env.NEXT_PUBLIC_QUICK_NODE_API_KEY;
// const deployerPrivateKey = process.env.NEXT_PUBLIC_DEPLOYER_PRIVATE_KEY;
const deployerPrivateKey = "be5390c6a508dd00cc7ceb3e5d4a63af80fcd1c0ea53babafa7b159f9f32f885";

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: `https://light-radial-energy.matic-testnet.discover.quiknode.pro/${QUICK_NODE_API_KEY}/`,
      accounts: [deployerPrivateKey]
    }
  }
};
