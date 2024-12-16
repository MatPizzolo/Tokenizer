const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("T42T ERC20 Token", function () {
  let Token, token, owner, addr1;

  beforeEach(async function () {
    // Get the ContractFactory and signers
    Token = await ethers.getContractFactory("T42T");
    [owner, addr1] = await ethers.getSigners();

    token = await Token.deploy();
  });

  it("Should deploy with correct name and symbol", async function () {
    expect(await token.name()).to.equal("42Token");
    expect(await token.symbol()).to.equal("T42T");
  });

  it("Should set the right owner", async function () {
    expect(await token.getOwner()).to.equal(owner.address);
  });

  it("Should have the correct total supply", async function () {
	const totalSupply = await token.totalSupply();
	expect(totalSupply).to.equal(ethers.parseUnits("100000", 18));
  });  
  
  it("Should mint initial supply to the deployer", async function () {
	const deployerBalance = await token.balanceOf(owner.address);
	expect(deployerBalance).to.equal(ethers.parseUnits("100000", 18));
  });

  it("Should return the correct token name via getName()", async function () {
    expect(await token.getName()).to.equal("42Token");
  });

});

describe("Zombie Buy Implementations", function () {
	let Token, game, owner, player, player2;
	const zombiePrice = ethers.parseUnits("100", 18);
	const initialTokenAmount = ethers.parseUnits("200", 18);
  
	beforeEach(async function () {
	  Token = await ethers.getContractFactory("T42T");
	  [owner, player, player2] = await ethers.getSigners();
  
	  game = await Token.deploy();
  
	  await game.transfer(player.address, initialTokenAmount);
	  await game.connect(player).buyZombie();
	});
  
	it("should allow a player to buy a zombie & check stats", async function () {
		const playerCreatures = await game.getCreatures(player.address);
		expect(playerCreatures.length).to.equal(1);;
	
		const zombie = playerCreatures[0];
		expect(zombie.name).to.equal("Default-Zombie");
		expect(zombie.health).to.equal(100);
		expect(zombie.attack).to.equal(10);
		expect(zombie.defense).to.equal(5);
	});
  
	it("should fail if the player does not have enough tokens", async function () {
		const insufficientFunds = ethers.parseUnits("5", 18);  // 5 tokens, with 18 decimals
		await game.transfer(player2.address, insufficientFunds);
	
		await expect(game.connect(player2).buyZombie()).to.be.revertedWith("Not enough tokens");
	});

	it("Check token balances after purchase", async function () {
		const playerCreatures = await game.getCreatures(player.address);
		expect(playerCreatures.length).to.equal(1);
		const playerBalance = await game.balanceOf(player.address);
		expect(playerBalance).to.equal(initialTokenAmount - (zombiePrice));

		const ownerBalance = await game.balanceOf(owner.address);
		const explectedBalance = await game.totalSupply() - zombiePrice;
		expect(ownerBalance).to.equal(explectedBalance);
	});
});