// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
    const whiteListFactory = await ethers.getContractFactory("WhiteList")
    const whiteList = await whiteListFactory.deploy(10)
    await whiteList.deployed()

    console.log(`The contract address was deployed to ${whiteList.address}`)
    const balance = await getBalnace(whiteList.address)
    console.log(`The balance of the contract is ${balance}`)

    const addAddressToWhiteList = await whiteList.addAddressToWhitelist()
    await addAddressToWhiteList.wait(1)
    console.log("Contract has been whiteListed")
    console.log("-----------------------------")
}

const getBalnace = async(contractAddress)=>{
    const balance = await ethers.provider.getBalance(contractAddress)
    return balance
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
