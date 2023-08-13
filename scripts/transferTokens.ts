// scripts/transferTokens.ts

import { ethers, network } from "hardhat";

async function main() {
  if(network.name !== `avalancheFuji`) {
    console.error(`❌ Must be called from Avalanche Fuji`);
    return 1;
  }

  const ccipSenderAddress = `0xBc754Ce2C7dFe6AB3e27B8d059809E2d3028aeBa`;
  const ccipBnMAddress = `0xD21341536c5cF5EB1bcb58f6723cE26e8D8E90e4`;
  const receiver = `0x661Cb7aA99e91C2B43DB1859B2a2b0672d7DED55`;
  const amount = 100n;
  const destinationChainSelector = ethers.BigNumber.from("16015286601757825753");

  const ccipTokenSenderFactory = await ethers.getContractFactory("CCIPTokenSender");
  const ccipTokenSender = await ccipTokenSenderFactory.attach(ccipSenderAddress);
  
  const whitelistTx = await ccipTokenSender.whitelistChain(
      destinationChainSelector
  );
  
  console.log(`Whitelisted Sepolia, transaction hash: ${whitelistTx.hash}`);

  const transferTx = await ccipTokenSender.transferTokens(
      destinationChainSelector, 
      receiver,
      ccipBnMAddress,
      amount
  );

  console.log(`Tokens sent, transaction hash: ${transferTx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});