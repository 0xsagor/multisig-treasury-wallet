const hre = require("hardhat");

async function main() {
  const [owner1, owner2, owner3] = await hre.ethers.getSigners();
  
  const MultiSig = await hre.ethers.getContractFactory("MultiSigWallet");
  // Set owners and requirement (e.g., 2 confirmations needed)
  const multisig = await MultiSig.deploy([owner1.address, owner2.address, owner3.address], 2);

  await multisig.waitForDeployment();

  console.log(`MultiSig Wallet deployed to: ${await multisig.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
