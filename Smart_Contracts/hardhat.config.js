require('@nomicfoundation/hardhat-ethers');
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); 
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
