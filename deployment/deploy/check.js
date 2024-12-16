async function main() {
	const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with address
	const token = await ethers.getContractAt("T42T", contractAddress);
	console.log("T42T Token deployed to:", token.address);
	console.log("Zombie price set to:", await token.zombiePrice());
	console.log("Owner:", await token.getOwner());
	console.log("Token name:", await token.getName());
  }
  
main()
	.then(() => process.exit(0))
	.catch((error) => {
	  console.error(error);
	  process.exit(1);
});
  