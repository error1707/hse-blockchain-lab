/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
console.log(API_URL);
module.exports = {
  solidity: {
    compilers: [
      {
         version: "0.8.17",
       },
      ],
  },
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: { 
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};