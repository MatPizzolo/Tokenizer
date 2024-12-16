async function main() {
	const [deployer, player] = await ethers.getSigners();
  
	// Contract address
	const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with actual address
  
	// Get contract instance
	const T42T = await ethers.getContractAt("T42T", contractAddress);
  
	// Check token price
	const zombiePrice = await T42T.zombiePrice();
	console.log("Zombie Price:", zombiePrice.toString());
  
	// Transfer tokens to player
	const amount = ethers.parseUnits("100", 18);
	await T42T.transfer(player.address, amount);
	console.log(`Transferred ${amount.toString()} tokens to player`);
  
	// Let the player buy a zombie
	await T42T.connect(player).buyZombie();
	console.log("Player bought a zombie!");
  
	// Check player's creatures
	const playerCreatures = await T42T.getCreatures(player.address);
	console.log("Player's Creatures:", playerCreatures);
  }
  
  main()
	.then(() => process.exit(0))
	.catch((error) => {
	  console.error(error);
	  process.exit(1);
	});
  