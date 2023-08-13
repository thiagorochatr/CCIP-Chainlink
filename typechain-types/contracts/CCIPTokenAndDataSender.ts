/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface CCIPTokenAndDataSenderInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "denylistChain(uint64)": FunctionFragment;
    "owner()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferTokens(uint64,address,address,uint256)": FunctionFragment;
    "whitelistChain(uint64)": FunctionFragment;
    "whitelistedChains(uint64)": FunctionFragment;
    "withdrawToken(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOwnership"
      | "denylistChain"
      | "owner"
      | "transferOwnership"
      | "transferTokens"
      | "whitelistChain"
      | "whitelistedChains"
      | "withdrawToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "denylistChain",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferTokens",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistChain",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistedChains",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "denylistChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistedChains",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferRequested(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokensTransferred(bytes32,uint64,address,address,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensTransferred"): EventFragment;
}

export interface OwnershipTransferRequestedEventObject {
  from: string;
  to: string;
}
export type OwnershipTransferRequestedEvent = TypedEvent<
  [string, string],
  OwnershipTransferRequestedEventObject
>;

export type OwnershipTransferRequestedEventFilter =
  TypedEventFilter<OwnershipTransferRequestedEvent>;

export interface OwnershipTransferredEventObject {
  from: string;
  to: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TokensTransferredEventObject {
  messageId: string;
  destinationChainSelector: BigNumber;
  receiver: string;
  token: string;
  tokenAmount: BigNumber;
  feeToken: string;
  fees: BigNumber;
}
export type TokensTransferredEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber, string, BigNumber],
  TokensTransferredEventObject
>;

export type TokensTransferredEventFilter =
  TypedEventFilter<TokensTransferredEvent>;

export interface CCIPTokenAndDataSender extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CCIPTokenAndDataSenderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    denylistChain(
      _destinationChainSelector: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferTokens(
      _destinationChainSelector: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    whitelistChain(
      _destinationChainSelector: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    whitelistedChains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdrawToken(
      _beneficiary: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  denylistChain(
    _destinationChainSelector: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferTokens(
    _destinationChainSelector: PromiseOrValue<BigNumberish>,
    _receiver: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  whitelistChain(
    _destinationChainSelector: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  whitelistedChains(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  withdrawToken(
    _beneficiary: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    denylistChain(
      _destinationChainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferTokens(
      _destinationChainSelector: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    whitelistChain(
      _destinationChainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelistedChains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdrawToken(
      _beneficiary: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferRequested(address,address)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferRequestedEventFilter;
    OwnershipTransferRequested(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferRequestedEventFilter;

    "OwnershipTransferred(address,address)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "TokensTransferred(bytes32,uint64,address,address,uint256,address,uint256)"(
      messageId?: PromiseOrValue<BytesLike> | null,
      destinationChainSelector?: PromiseOrValue<BigNumberish> | null,
      receiver?: null,
      token?: null,
      tokenAmount?: null,
      feeToken?: null,
      fees?: null
    ): TokensTransferredEventFilter;
    TokensTransferred(
      messageId?: PromiseOrValue<BytesLike> | null,
      destinationChainSelector?: PromiseOrValue<BigNumberish> | null,
      receiver?: null,
      token?: null,
      tokenAmount?: null,
      feeToken?: null,
      fees?: null
    ): TokensTransferredEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    denylistChain(
      _destinationChainSelector: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferTokens(
      _destinationChainSelector: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    whitelistChain(
      _destinationChainSelector: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    whitelistedChains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawToken(
      _beneficiary: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    denylistChain(
      _destinationChainSelector: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferTokens(
      _destinationChainSelector: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    whitelistChain(
      _destinationChainSelector: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    whitelistedChains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      _beneficiary: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
