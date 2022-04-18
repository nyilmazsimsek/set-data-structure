const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Set", function () {
  it("Should return the new address once it's changed", async function () {
    const Set = await ethers.getContractFactory("Set");
    const set = await Set.deploy();
    await set.deployed();

    console.log("--- Add Address  ----");
    const setAddressTx = await set.addAddress("0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db");
    await setAddressTx.wait();

    console.log(await set.numberOfItems());
    console.log(await set.isItemExist("0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"));
    console.log(await set.valueOfItemKey(0));
    console.log(await set.indexOfItem("0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"));

    console.log("--- Add Address 2  ----");
    const setAddressTx2 = await set.addAddress("0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB");
    await setAddressTx2.wait();

    console.log(await set.numberOfItems());
    console.log(await set.isItemExist("0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB"));
    console.log(await set.valueOfItemKey(0));
    console.log(await set.indexOfItem("0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB"));

    console.log("--- Remove Address  ----");
    const removeAddressTx = await set.removeAddress("0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db");
    await removeAddressTx.wait();

    console.log(await set.numberOfItems());
    console.log(await set.isItemExist("0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"));
    console.log(await set.valueOfItemKey(0));
    console.log(await set.indexOfItem("0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"));

    console.log("----  After Update of Array");
    console.log(await set.valueOfItemKey(0));
    console.log(await set.indexOfItem("0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB"));

  });
});
