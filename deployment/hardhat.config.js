require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  paths: {
    sources: "./code", // Tell Hardhat to look for contracts here
  },
  networks: {
    hardhat: {
      // Hardhat Network Configuration
    },
  },
};
