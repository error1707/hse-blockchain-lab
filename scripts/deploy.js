const hre = require("hardhat");
async function main() {
    const VovaToken = await hre.ethers.getContractFactory("VovaToken");
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await VovaToken.deploy();
    await myNFT.deployed();
    console.log("Contract deployed to address:", myNFT.address);
    }
    main().then(() => process.exit(0)).catch((error) => {
    console.error("Error:", error);
    process.exit(1);
    });