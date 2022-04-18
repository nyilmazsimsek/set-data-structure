//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;

import "hardhat/console.sol";

contract Set {
    //declare an array for getting unique addresses
    address[] addresses;
    //declare a mapping element to track index of each item and existence
    mapping(address => uint256) existence;

    event AddressAdded(address _address);
    event AddressRemoved(address _address);

    //declare a function to add new item to addresses array.
    //First check if the item is exist
    function addAddress(address _address) public {
        require(existence[_address] == 0, "Item already exist");
        addresses.push(_address);
        existence[_address] = addresses.length;
        emit AddressAdded(_address);
    }

    //remove address function used to delete item from array and update the existence map
    //the logic behind the remove address is changing address as last item in array and then pop it.
    function removeAddress(address _address) public {
        require(addresses.length > 0, "There is no item in array");
        require(existence[_address] > 0, "Item doesn't exist");
        uint256 tempIndex = existence[_address] - 1;
        existence[_address] = 0;
        existence[addresses[addresses.length - 1]] = tempIndex + 1;
        addresses[tempIndex] = addresses[addresses.length - 1];
        addresses.pop();
        emit AddressRemoved(_address);
    }

    //return the number of addresses
    function numberOfItems() public view returns (uint256) {
        return addresses.length;
    }

    // check existing of array
    function isItemExist(address _address) public view returns (bool) {
        return existence[_address] > 0;
    }

    // value of a specific index of array
    function valueOfItemKey(uint256 index) public view returns (address) {
        return addresses[index];
    }

    //index of item by address
    function indexOfItem(address _address) public view returns (uint256) {
        if(isItemExist(_address)){
            return existence[_address] - 1;
        }
        
        return 0;
    }
}
