# 🔗 __WhiteList Smart Contract__(__BACKEND__)
<div style="margin-top:30px"></div>

## ⚙ __WORKING MECHANISM__
* The ``` uint8 public maxWhitelistedAddresses``` is set to zero initially, on depoying the smart contract it was set to a ```particular number```, The number can be found in the scripts folder
*  The mapping function of  ```mapping(address => bool) public whitelistedAddresses``` specifeis the mapping of an ```address``` to a ```boolean value```
      * This mapping helps in checking if the address has already been whitelisted
* The ``` uint8 public numAddressesWhitelisted ``` is incremented by ```one``` anytime a new user is whitelisted
*   The  ```constructor``` method is used to set the  ```maxWhitelistedAddresses``` on deploying the smart contract
*   The ```addAddressToWhitelist``` function does the verification and also ensures the addition of the whitelisted address 

## 👩‍💻 __COMMANDS TO USE__

> * __To Compile the Contract__   - ```yarn hardhat compile```
> * __To Clear the Compile__ Contract - ```yarn hardhat clean```
> * __To Deploy the Contract on hardhat__ - ```yarn hardhat deploy```
> * __To Deploy the contract to a testnet__ - ```yarn hardhat deploy --network <network name> ```
> * __To Run Test on hardhat__  - ```yarn hardhat test ```
> * __To Run Test on a particular network__ ```yarn hardhat test --network <network name> ```
> * __To Run a particular Test__ - ```yarn hardhat test --grep <name of the test in quote> ```
>  * __To Run a Specific Test on a Particular Network__ - ```yarn hardhat test --grep <name of the test in quote>  --network <network name> ```

```bash
   The preffered networks can be found in the hardhat config file
```
    


<div style="margin-top:30px"></div>






## 📞 __Contact__
- __Phone number - +2348134570701__
* __Twitter - [ken_okha](https://twitter.com/Ken_okha "ken_okha")__
* __BlockChain developer__
