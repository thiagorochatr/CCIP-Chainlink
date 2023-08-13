// scripts/sendMessage.ts

import { ethers, network } from "hardhat";

async function main() {
  if(network.name !== `avalancheFuji`) {
    console.error(`❌ Must be called from Avalanche Fuji`);
    return 1;
  }

  const ccipSenderAddress = `0xBD93158e6943D0e12A0a64B62319dDbBB71dae68`;
  const ccipReceiverAddress = `0xE0b7286E78b71f57Dd0017Ee56aAb232ff48F1F5`;
  const someText = `CCIP Masterclass`;
  const destinationChainSelector = ethers.BigNumber.from("16015286601757825753");

  const ccipSenderFactory = await ethers.getContractFactory("CCIPSender_Unsafe");
  const ccipSender = await ccipSenderFactory.attach(ccipSenderAddress);

  const tx = await ccipSender.send(
      ccipReceiverAddress, 
      someText,
      destinationChainSelector
  );

  console.log(`Transaction hash: ${tx.hash}`);
}

main().catch((error) => {
  console.error("🔴",error);
  process.exitCode = 1;
});