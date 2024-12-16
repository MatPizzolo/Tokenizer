# Tokenizer

For detailed documentation on interacting with the contract, refer to the [documentation](./documentation/README.md).

This document provides an overview of the 42T project, an ERC-20 token deployed using Hardhat.

## Project Overview

42T is an ERC-20 token designed for interaction within a blockchain-based ecosystem where users can buy zombies (creatures) with the token. It integrates ERC-20 functionality with unique use cases, including buying and managing in-game assets.

The contract was developed and deployed using Hardhat, with a focus on simplicity, testing, and scalability.

### Token Details
- **Name**: 42T
- **Symbol**: 42T
- **Decimals**: 18 (standard for ERC-20)
- **Total Supply**: 1,000,000 tokens
- **Zombie Price**: 100 tokens per zombie

### Features
- **Zombie Creation**: Players can purchase zombies using 42T tokens, each with unique stats.
- **Token Transfers**: The token follows the standard ERC-20 functionality, allowing for transfers, approvals, and balance checks.

### Why Hardhat?
Hardhat was chosen for this project because of its:
- **Ease of Use**: Simplifies development and testing processes.
- **Built-in Network**: Hardhat Network provides a local blockchain for development and testing.
- **Comprehensive Tools**: Includes powerful features for debugging, script automation, and console testing.

### Using OpenZeppelin
The project leverages OpenZeppelin's trusted contracts, including:
- **ERC20**: The base implementation for the token.

## Project Setup

### Prerequisites
Before running the project, ensure you have the following tools installed:
- **Node.js** (LTS version)
- **npm** or **yarn**

### Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/...
cd Tokenizer
npm install
```

### Compile the Contracts
Compile the smart contracts using Hardhat:
```bash
npm run compile
```

### Running Tests
Run the tests to ensure everything is working as expected:
```bash
npm run test
```

### Deploying the Contract

1. Start a local Hardhat node:
   ```bash
   npx hardhat node
   ```

2. In another terminal, deploy the contract using Hardhat Ignition:
   ```bash
   npx hardhat ignition deploy ./ignition/modules/T42TModule.js --network localhost
   ```

3. Verify the deployment:
   ```bash
   npx hardhat run deploy/check.js --network localhost
   ```

4. Interact with the deployed contract:
   ```bash
   npx hardhat run deploy/interact.js --network localhost
   ```

## Token Features
42T can be used to buy in-game assets, such as zombies, each with the following stats:
- **Name**: Default-Zombie
- **Health**: 100
- **Attack**: 10
- **Defense**: 5

## Contributing
Feel free to open issues or submit pull requests to enhance the functionality and features of the project.

## License
This project is open-source and licensed under the MIT License.

---

For further details on interacting with the contract or testing the functionality, refer to the specific module documentation inside the `./ignition/modules`.
