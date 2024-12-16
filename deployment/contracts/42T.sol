// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract T42T is ERC20 {
	address private _owner;
	uint256 public zombiePrice;

    constructor() ERC20("42Token", "T42T") {
        _mint(msg.sender, 100000 * 10 ** decimals());
        _owner = msg.sender;
        zombiePrice = 100 * 10 ** decimals();
    }

    function getOwner() public view returns (address) {
        return _owner;
    }

    function getName() public view returns (string memory) {
        return name();
    }


	// Zombies Implementation
	struct Creature {
        string name;
        uint256 health;
        uint256 attack;
        uint256 defense;
    }

    mapping(address => Creature[]) public creatures;

	function createZombie(address player) private {
    	creatures[player].push(Creature("Default-Zombie", 100, 10, 5));
	}

	function buyZombie() public {
		require(balanceOf(msg.sender) >= zombiePrice, "Not enough tokens");

		_transfer(msg.sender, _owner, zombiePrice);
		createZombie(msg.sender);
	}
	
	function getCreatures(address player) public view returns (Creature[] memory) {
    	return creatures[player];
	}


}
