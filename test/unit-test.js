const { expect, assert } = require("chai")
const { ethers } = require("hardhat")

describe("Constructor",()=>{
     let whiteList,whiteListFactory
     beforeEach(async()=>{
      whiteListFactory = await ethers.getContractFactory("WhiteList")
      whiteList = await whiteListFactory.deploy(10)
      await whiteList.deployed()
    
     })

     it("it will set the constructor value well",async()=>{
        const numberOfListedAddress =await whiteList.maxWhitelistedAddresses()
        const expectedValue ="10"
        expect(expectedValue).to.equal(numberOfListedAddress.toString())
     })

     it("add new address and check if the address is whiteListed",async()=>{
          const [deployer,user1,user2] = await ethers.getSigners()
           const isTheAccountWhiteListed = await whiteList.whitelistedAddresses(deployer.address) 
           assert.equal(isTheAccountWhiteListed,false)
           const firstListingTime =await whiteList.addAddressToWhitelist()
           const isTheAccountWhiteListedAlready = await whiteList.whitelistedAddresses(deployer.address)
           expect(isTheAccountWhiteListedAlready).to.equal(true)
           const numberOfListedAccount = await whiteList.numAddressesWhitelisted()
           expect(numberOfListedAccount.toString()).to.equal("1")
           await expect(whiteList.addAddressToWhitelist()).to.be.revertedWith("Sender has already been whitelisted")
     })

     it("reverts if the number of address is more than the number of allowed Address",async()=>{
           const accounts = await ethers.getSigners()
           for(let i =0 ; i< 11; i++){
                 const connectedAccounts = accounts[i]
                 await whiteList.connect(connectedAccounts).addAddressToWhitelist()
           }
           const numberOfListedAccount = await whiteList.numAddressesWhitelisted()
           const lastAccountTransaction= await whiteList.connect(accounts[12]).addAddressToWhitelist()
           const numberOfListedAccountAgain = await whiteList.numAddressesWhitelisted()

     })
})

