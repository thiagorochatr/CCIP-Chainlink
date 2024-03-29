/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "CCIPReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CCIPReceiver__factory>;
    getContractFactory(
      name: "IAny2EVMMessageReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAny2EVMMessageReceiver__factory>;
    getContractFactory(
      name: "IRouterClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouterClient__factory>;
    getContractFactory(
      name: "Client",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Client__factory>;
    getContractFactory(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwner__factory>;
    getContractFactory(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal__factory>;
    getContractFactory(
      name: "OwnableInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableInterface__factory>;
    getContractFactory(
      name: "OwnerIsCreator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnerIsCreator__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "IERC4906",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC4906__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "CCIPReceiver_Unsafe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CCIPReceiver_Unsafe__factory>;
    getContractFactory(
      name: "CCIPSender_Unsafe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CCIPSender_Unsafe__factory>;
    getContractFactory(
      name: "CCIPTokenAndDataReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CCIPTokenAndDataReceiver__factory>;
    getContractFactory(
      name: "MyNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyNFT__factory>;
    getContractFactory(
      name: "CCIPTokenAndDataSender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CCIPTokenAndDataSender__factory>;
    getContractFactory(
      name: "CCIPTokenSender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CCIPTokenSender__factory>;
    getContractFactory(
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock__factory>;

    getContractAt(
      name: "CCIPReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CCIPReceiver>;
    getContractAt(
      name: "IAny2EVMMessageReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAny2EVMMessageReceiver>;
    getContractAt(
      name: "IRouterClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouterClient>;
    getContractAt(
      name: "Client",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Client>;
    getContractAt(
      name: "ConfirmedOwner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwner>;
    getContractAt(
      name: "ConfirmedOwnerWithProposal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    getContractAt(
      name: "OwnableInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableInterface>;
    getContractAt(
      name: "OwnerIsCreator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnerIsCreator>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "LinkTokenInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenInterface>;
    getContractAt(
      name: "IERC4906",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC4906>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "CCIPReceiver_Unsafe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CCIPReceiver_Unsafe>;
    getContractAt(
      name: "CCIPSender_Unsafe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CCIPSender_Unsafe>;
    getContractAt(
      name: "CCIPTokenAndDataReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CCIPTokenAndDataReceiver>;
    getContractAt(
      name: "MyNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MyNFT>;
    getContractAt(
      name: "CCIPTokenAndDataSender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CCIPTokenAndDataSender>;
    getContractAt(
      name: "CCIPTokenSender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CCIPTokenSender>;
    getContractAt(
      name: "Lock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lock>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
