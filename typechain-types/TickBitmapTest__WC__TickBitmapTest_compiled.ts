/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Contract,
  Overrides,
  AddTransactionResponse,
  Invocation,
  EstimateFeeResponse,
} from "starknet";
import type { BigNumberish } from "starknet/utils/number";
import type BN from "bn.js";
import type { BlockIdentifier } from "starknet/provider/utils";

export type Uint256 = { low: BigNumberish; high: BigNumberish };
export type Uint256Output = { low: BN; high: BN };

export interface TickBitmapTest__WC__TickBitmapTest_compiled extends Contract {
  flipTick_8815912f(
    __warp_usrid1_tick: BigNumberish,
    options?: Overrides
  ): Promise<AddTransactionResponse>;
  nextInitializedTickWithinOneWord_3e7ba228(
    __warp_usrid2_tick: BigNumberish,
    __warp_usrid3_lte: BigNumberish,
    options?: { blockIdentifier?: BlockIdentifier }
  ): Promise<
    [BN, BN] & { __warp_usrid4_next: BN; __warp_usrid5_initialized: BN }
  >;
  isInitialized_2bdc2fd3(
    __warp_usrid6_tick: BigNumberish,
    options?: { blockIdentifier?: BlockIdentifier }
  ): Promise<[BN] & { __warp_usrid7_: BN }>;
  bitmap_3ffc81ee(
    __warp_usrid10__i0: BigNumberish,
    options?: { blockIdentifier?: BlockIdentifier }
  ): Promise<[Uint256Output] & { __warp_usrid11_: Uint256Output }>;
  functions: {
    flipTick_8815912f(
      __warp_usrid1_tick: BigNumberish,
      options?: Overrides
    ): Promise<AddTransactionResponse>;
    nextInitializedTickWithinOneWord_3e7ba228(
      __warp_usrid2_tick: BigNumberish,
      __warp_usrid3_lte: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<
      [BN, BN] & { __warp_usrid4_next: BN; __warp_usrid5_initialized: BN }
    >;
    isInitialized_2bdc2fd3(
      __warp_usrid6_tick: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[BN] & { __warp_usrid7_: BN }>;
    bitmap_3ffc81ee(
      __warp_usrid10__i0: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[Uint256Output] & { __warp_usrid11_: Uint256Output }>;
  };
  callStatic: {
    flipTick_8815912f(
      __warp_usrid1_tick: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[] & {}>;
    nextInitializedTickWithinOneWord_3e7ba228(
      __warp_usrid2_tick: BigNumberish,
      __warp_usrid3_lte: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<
      [BN, BN] & { __warp_usrid4_next: BN; __warp_usrid5_initialized: BN }
    >;
    isInitialized_2bdc2fd3(
      __warp_usrid6_tick: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[BN] & { __warp_usrid7_: BN }>;
    bitmap_3ffc81ee(
      __warp_usrid10__i0: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<[Uint256Output] & { __warp_usrid11_: Uint256Output }>;
  };
  populateTransaction: {
    flipTick_8815912f(
      __warp_usrid1_tick: BigNumberish,
      options?: Overrides
    ): Invocation;
    nextInitializedTickWithinOneWord_3e7ba228(
      __warp_usrid2_tick: BigNumberish,
      __warp_usrid3_lte: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Invocation;
    isInitialized_2bdc2fd3(
      __warp_usrid6_tick: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Invocation;
    bitmap_3ffc81ee(
      __warp_usrid10__i0: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Invocation;
  };
  estimateFee: {
    flipTick_8815912f(
      __warp_usrid1_tick: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
    nextInitializedTickWithinOneWord_3e7ba228(
      __warp_usrid2_tick: BigNumberish,
      __warp_usrid3_lte: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
    isInitialized_2bdc2fd3(
      __warp_usrid6_tick: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
    bitmap_3ffc81ee(
      __warp_usrid10__i0: BigNumberish,
      options?: { blockIdentifier?: BlockIdentifier }
    ): Promise<EstimateFeeResponse>;
  };
}
