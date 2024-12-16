# T42T ERC-20 Token with Zombie Purchase Feature

## Overview
The `T42T` ERC-20 token allows players to buy and collect zombies by transferring tokens to the contract. This project involves an ERC-20 token implementation, zombie purchasing logic, and Hardhat Ignition for deployment.

## Project Setup

### 1. Clone the Repository and Install Dependencies
First, clone the repository and install the required dependencies:

```bash
# Clone the repository
git clone https://github.com/your-repo/Tokenizer.git
cd Tokenizer/deployment

# Install required packages
npm install
```

### 2. Compile the Contracts
Before you interact with the contracts, you need to compile them:

```bash
# Compile the contracts
npm run compile
```

## Testing the Contract

### 1. Run Tests
Run the tests to ensure everything is working as expected. The tests check various scenarios such as purchasing zombies, ensuring proper token balance, and verifying zombie stats.

```bash
# Run the tests
npm run test
```

The tests will include checks for:

- Ensuring the player can buy a zombie.
- Verifying that the player has the correct stats after purchasing a zombie.
- Checking that players cannot purchase zombies if they don't have enough tokens.

Example test for insufficient funds:

```javascript
it("should fail if the player does not have enough tokens", async function () {
  const insufficientFunds = ethers.utils.parseUnits("50", 18);
  await game.transfer(player2.address, insufficientFunds);

  await expect(game.connect(player2).buyZombie()).to.be.revertedWith("Not enough tokens");
});
```

This test will revert the transaction if the player does not have enough tokens to buy a zombie.

## Deployment

### 1. Start Hardhat Node
Start the Hardhat local blockchain network to simulate Ethereum:

```bash
npx hardhat node
```

This will start a local Ethereum node at `http://127.0.0.1:8545/` with accounts that have test Ether for deployment.

### 2. Deploy the Contract
On another terminal, deploy the contract using Hardhat Ignition:

```bash
npx hardhat ignition deploy ./ignition/modules/T42TModule.js --network localhost
```

This will deploy the contract to the local Hardhat network. Once deployed, you should see the contract's address printed in the terminal.

Example output:
```
Deployed Addresses
T42TModule#T42T - 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

### 3. Test Deployment
You can run a script to check if the deployment was successful and verify contract behavior:

```bash
npx hardhat run deploy/check.js --network localhost
```

Additionally, you can interact with the deployed contract programmatically with the following script:

```bash
npx hardhat run deploy/interact.js --network localhost
```

## Interacting with the Contract

Once the contract is deployed, you can interact with it either through the Hardhat console or via scripts.

### 1. Open Hardhat Console
Open the Hardhat console to interact with the deployed contract:

```bash
npx hardhat console --network localhost
```

### 2. Interact with the Deployed Contract
You can call contract functions such as transferring tokens, buying zombies, and checking player stats.

Example interaction:

```javascript
const [deployer, player] = await ethers.getSigners();

// Get contract instance
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with actual deployed address
const T42T = await ethers.getContractAt("T42T", contractAddress);

// Transfer tokens to player
const amount = ethers.parseUnits("100", 18);
await T42T.transfer(player.address, amount);
console.log(`Transferred ${amount.toString()} tokens to player`);

// Player buys a zombie
await T42T.connect(player).buyZombie();
console.log("Player bought a zombie!");

// Check player's creatures (zombies)
const playerCreatures = await T42T.getCreatures(player.address);
console.log(playerCreatures);
```

This script will:

1. Transfer tokens to the player.
2. Let the player buy a zombie.
3. Print the player's creatures (zombies).

---

## Conclusion

This project allows users to interact with an ERC-20 token (`T42T`) to purchase zombies. You can deploy the contract using Hardhat Ignition, test its functionality, and interact with it both in the console and programmatically.

For more information on Hardhat and Solidity development, check out the [Hardhat documentation](https://hardhat.org/docs/).
