import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class LogOperatorSet extends EthereumEvent {
  get params(): LogOperatorSet__Params {
    return new LogOperatorSet__Params(this);
  }
}

export class LogOperatorSet__Params {
  _event: LogOperatorSet;

  constructor(event: LogOperatorSet) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get trusted(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LogIndexUpdate extends EthereumEvent {
  get params(): LogIndexUpdate__Params {
    return new LogIndexUpdate__Params(this);
  }
}

export class LogIndexUpdate__Params {
  _event: LogIndexUpdate;

  constructor(event: LogIndexUpdate) {
    this._event = event;
  }

  get market(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get index(): LogIndexUpdateIndexStruct {
    return this._event.parameters[1].value.toTuple() as LogIndexUpdateIndexStruct;
  }
}

export class LogIndexUpdateIndexStruct extends EthereumTuple {
  get borrow(): BigInt {
    return this[0].toBigInt();
  }

  get supply(): BigInt {
    return this[1].toBigInt();
  }

  get lastUpdate(): BigInt {
    return this[2].toBigInt();
  }
}

export class LogOperation extends EthereumEvent {
  get params(): LogOperation__Params {
    return new LogOperation__Params(this);
  }
}

export class LogOperation__Params {
  _event: LogOperation;

  constructor(event: LogOperation) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogDeposit extends EthereumEvent {
  get params(): LogDeposit__Params {
    return new LogDeposit__Params(this);
  }
}

export class LogDeposit__Params {
  _event: LogDeposit;

  constructor(event: LogDeposit) {
    this._event = event;
  }

  get accountOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get accountNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get market(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get update(): LogDepositUpdateStruct {
    return this._event.parameters[3].value.toTuple() as LogDepositUpdateStruct;
  }

  get from(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class LogDepositUpdateStruct extends EthereumTuple {
  get deltaWei(): LogDepositUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogDepositUpdateDeltaWeiStruct;
  }

  get newPar(): LogDepositUpdateNewParStruct {
    return this[1].toTuple() as LogDepositUpdateNewParStruct;
  }
}

export class LogDepositUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogDepositUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogWithdraw extends EthereumEvent {
  get params(): LogWithdraw__Params {
    return new LogWithdraw__Params(this);
  }
}

export class LogWithdraw__Params {
  _event: LogWithdraw;

  constructor(event: LogWithdraw) {
    this._event = event;
  }

  get accountOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get accountNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get market(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get update(): LogWithdrawUpdateStruct {
    return this._event.parameters[3].value.toTuple() as LogWithdrawUpdateStruct;
  }

  get to(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class LogWithdrawUpdateStruct extends EthereumTuple {
  get deltaWei(): LogWithdrawUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogWithdrawUpdateDeltaWeiStruct;
  }

  get newPar(): LogWithdrawUpdateNewParStruct {
    return this[1].toTuple() as LogWithdrawUpdateNewParStruct;
  }
}

export class LogWithdrawUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogWithdrawUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogTransfer extends EthereumEvent {
  get params(): LogTransfer__Params {
    return new LogTransfer__Params(this);
  }
}

export class LogTransfer__Params {
  _event: LogTransfer;

  constructor(event: LogTransfer) {
    this._event = event;
  }

  get accountOneOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get accountOneNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get accountTwoOwner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get accountTwoNumber(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get market(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get updateOne(): LogTransferUpdateOneStruct {
    return this._event.parameters[5].value.toTuple() as LogTransferUpdateOneStruct;
  }

  get updateTwo(): LogTransferUpdateTwoStruct {
    return this._event.parameters[6].value.toTuple() as LogTransferUpdateTwoStruct;
  }
}

export class LogTransferUpdateOneStruct extends EthereumTuple {
  get deltaWei(): LogTransferUpdateOneDeltaWeiStruct {
    return this[0].toTuple() as LogTransferUpdateOneDeltaWeiStruct;
  }

  get newPar(): LogTransferUpdateOneNewParStruct {
    return this[1].toTuple() as LogTransferUpdateOneNewParStruct;
  }
}

export class LogTransferUpdateOneDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogTransferUpdateOneNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogTransferUpdateTwoStruct extends EthereumTuple {
  get deltaWei(): LogTransferUpdateTwoDeltaWeiStruct {
    return this[0].toTuple() as LogTransferUpdateTwoDeltaWeiStruct;
  }

  get newPar(): LogTransferUpdateTwoNewParStruct {
    return this[1].toTuple() as LogTransferUpdateTwoNewParStruct;
  }
}

export class LogTransferUpdateTwoDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogTransferUpdateTwoNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogBuy extends EthereumEvent {
  get params(): LogBuy__Params {
    return new LogBuy__Params(this);
  }
}

export class LogBuy__Params {
  _event: LogBuy;

  constructor(event: LogBuy) {
    this._event = event;
  }

  get accountOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get accountNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get takerMarket(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get makerMarket(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get takerUpdate(): LogBuyTakerUpdateStruct {
    return this._event.parameters[4].value.toTuple() as LogBuyTakerUpdateStruct;
  }

  get makerUpdate(): LogBuyMakerUpdateStruct {
    return this._event.parameters[5].value.toTuple() as LogBuyMakerUpdateStruct;
  }

  get exchangeWrapper(): Address {
    return this._event.parameters[6].value.toAddress();
  }
}

export class LogBuyTakerUpdateStruct extends EthereumTuple {
  get deltaWei(): LogBuyTakerUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogBuyTakerUpdateDeltaWeiStruct;
  }

  get newPar(): LogBuyTakerUpdateNewParStruct {
    return this[1].toTuple() as LogBuyTakerUpdateNewParStruct;
  }
}

export class LogBuyTakerUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogBuyTakerUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogBuyMakerUpdateStruct extends EthereumTuple {
  get deltaWei(): LogBuyMakerUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogBuyMakerUpdateDeltaWeiStruct;
  }

  get newPar(): LogBuyMakerUpdateNewParStruct {
    return this[1].toTuple() as LogBuyMakerUpdateNewParStruct;
  }
}

export class LogBuyMakerUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogBuyMakerUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogSell extends EthereumEvent {
  get params(): LogSell__Params {
    return new LogSell__Params(this);
  }
}

export class LogSell__Params {
  _event: LogSell;

  constructor(event: LogSell) {
    this._event = event;
  }

  get accountOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get accountNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get takerMarket(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get makerMarket(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get takerUpdate(): LogSellTakerUpdateStruct {
    return this._event.parameters[4].value.toTuple() as LogSellTakerUpdateStruct;
  }

  get makerUpdate(): LogSellMakerUpdateStruct {
    return this._event.parameters[5].value.toTuple() as LogSellMakerUpdateStruct;
  }

  get exchangeWrapper(): Address {
    return this._event.parameters[6].value.toAddress();
  }
}

export class LogSellTakerUpdateStruct extends EthereumTuple {
  get deltaWei(): LogSellTakerUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogSellTakerUpdateDeltaWeiStruct;
  }

  get newPar(): LogSellTakerUpdateNewParStruct {
    return this[1].toTuple() as LogSellTakerUpdateNewParStruct;
  }
}

export class LogSellTakerUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogSellTakerUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogSellMakerUpdateStruct extends EthereumTuple {
  get deltaWei(): LogSellMakerUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogSellMakerUpdateDeltaWeiStruct;
  }

  get newPar(): LogSellMakerUpdateNewParStruct {
    return this[1].toTuple() as LogSellMakerUpdateNewParStruct;
  }
}

export class LogSellMakerUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogSellMakerUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogTrade extends EthereumEvent {
  get params(): LogTrade__Params {
    return new LogTrade__Params(this);
  }
}

export class LogTrade__Params {
  _event: LogTrade;

  constructor(event: LogTrade) {
    this._event = event;
  }

  get takerAccountOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get takerAccountNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get makerAccountOwner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get makerAccountNumber(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get inputMarket(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get outputMarket(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get takerInputUpdate(): LogTradeTakerInputUpdateStruct {
    return this._event.parameters[6].value.toTuple() as LogTradeTakerInputUpdateStruct;
  }

  get takerOutputUpdate(): LogTradeTakerOutputUpdateStruct {
    return this._event.parameters[7].value.toTuple() as LogTradeTakerOutputUpdateStruct;
  }

  get makerInputUpdate(): LogTradeMakerInputUpdateStruct {
    return this._event.parameters[8].value.toTuple() as LogTradeMakerInputUpdateStruct;
  }

  get makerOutputUpdate(): LogTradeMakerOutputUpdateStruct {
    return this._event.parameters[9].value.toTuple() as LogTradeMakerOutputUpdateStruct;
  }

  get autoTrader(): Address {
    return this._event.parameters[10].value.toAddress();
  }
}

export class LogTradeTakerInputUpdateStruct extends EthereumTuple {
  get deltaWei(): LogTradeTakerInputUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogTradeTakerInputUpdateDeltaWeiStruct;
  }

  get newPar(): LogTradeTakerInputUpdateNewParStruct {
    return this[1].toTuple() as LogTradeTakerInputUpdateNewParStruct;
  }
}

export class LogTradeTakerInputUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogTradeTakerInputUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogTradeTakerOutputUpdateStruct extends EthereumTuple {
  get deltaWei(): LogTradeTakerOutputUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogTradeTakerOutputUpdateDeltaWeiStruct;
  }

  get newPar(): LogTradeTakerOutputUpdateNewParStruct {
    return this[1].toTuple() as LogTradeTakerOutputUpdateNewParStruct;
  }
}

export class LogTradeTakerOutputUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogTradeTakerOutputUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogTradeMakerInputUpdateStruct extends EthereumTuple {
  get deltaWei(): LogTradeMakerInputUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogTradeMakerInputUpdateDeltaWeiStruct;
  }

  get newPar(): LogTradeMakerInputUpdateNewParStruct {
    return this[1].toTuple() as LogTradeMakerInputUpdateNewParStruct;
  }
}

export class LogTradeMakerInputUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogTradeMakerInputUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogTradeMakerOutputUpdateStruct extends EthereumTuple {
  get deltaWei(): LogTradeMakerOutputUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogTradeMakerOutputUpdateDeltaWeiStruct;
  }

  get newPar(): LogTradeMakerOutputUpdateNewParStruct {
    return this[1].toTuple() as LogTradeMakerOutputUpdateNewParStruct;
  }
}

export class LogTradeMakerOutputUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogTradeMakerOutputUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogCall extends EthereumEvent {
  get params(): LogCall__Params {
    return new LogCall__Params(this);
  }
}

export class LogCall__Params {
  _event: LogCall;

  constructor(event: LogCall) {
    this._event = event;
  }

  get accountOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get accountNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get callee(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class LogLiquidate extends EthereumEvent {
  get params(): LogLiquidate__Params {
    return new LogLiquidate__Params(this);
  }
}

export class LogLiquidate__Params {
  _event: LogLiquidate;

  constructor(event: LogLiquidate) {
    this._event = event;
  }

  get solidAccountOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get solidAccountNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get liquidAccountOwner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get liquidAccountNumber(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get heldMarket(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get owedMarket(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get solidHeldUpdate(): LogLiquidateSolidHeldUpdateStruct {
    return this._event.parameters[6].value.toTuple() as LogLiquidateSolidHeldUpdateStruct;
  }

  get solidOwedUpdate(): LogLiquidateSolidOwedUpdateStruct {
    return this._event.parameters[7].value.toTuple() as LogLiquidateSolidOwedUpdateStruct;
  }

  get liquidHeldUpdate(): LogLiquidateLiquidHeldUpdateStruct {
    return this._event.parameters[8].value.toTuple() as LogLiquidateLiquidHeldUpdateStruct;
  }

  get liquidOwedUpdate(): LogLiquidateLiquidOwedUpdateStruct {
    return this._event.parameters[9].value.toTuple() as LogLiquidateLiquidOwedUpdateStruct;
  }
}

export class LogLiquidateSolidHeldUpdateStruct extends EthereumTuple {
  get deltaWei(): LogLiquidateSolidHeldUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogLiquidateSolidHeldUpdateDeltaWeiStruct;
  }

  get newPar(): LogLiquidateSolidHeldUpdateNewParStruct {
    return this[1].toTuple() as LogLiquidateSolidHeldUpdateNewParStruct;
  }
}

export class LogLiquidateSolidHeldUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogLiquidateSolidHeldUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogLiquidateSolidOwedUpdateStruct extends EthereumTuple {
  get deltaWei(): LogLiquidateSolidOwedUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogLiquidateSolidOwedUpdateDeltaWeiStruct;
  }

  get newPar(): LogLiquidateSolidOwedUpdateNewParStruct {
    return this[1].toTuple() as LogLiquidateSolidOwedUpdateNewParStruct;
  }
}

export class LogLiquidateSolidOwedUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogLiquidateSolidOwedUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogLiquidateLiquidHeldUpdateStruct extends EthereumTuple {
  get deltaWei(): LogLiquidateLiquidHeldUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogLiquidateLiquidHeldUpdateDeltaWeiStruct;
  }

  get newPar(): LogLiquidateLiquidHeldUpdateNewParStruct {
    return this[1].toTuple() as LogLiquidateLiquidHeldUpdateNewParStruct;
  }
}

export class LogLiquidateLiquidHeldUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogLiquidateLiquidHeldUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogLiquidateLiquidOwedUpdateStruct extends EthereumTuple {
  get deltaWei(): LogLiquidateLiquidOwedUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogLiquidateLiquidOwedUpdateDeltaWeiStruct;
  }

  get newPar(): LogLiquidateLiquidOwedUpdateNewParStruct {
    return this[1].toTuple() as LogLiquidateLiquidOwedUpdateNewParStruct;
  }
}

export class LogLiquidateLiquidOwedUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogLiquidateLiquidOwedUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogVaporize extends EthereumEvent {
  get params(): LogVaporize__Params {
    return new LogVaporize__Params(this);
  }
}

export class LogVaporize__Params {
  _event: LogVaporize;

  constructor(event: LogVaporize) {
    this._event = event;
  }

  get solidAccountOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get solidAccountNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get vaporAccountOwner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get vaporAccountNumber(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get heldMarket(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get owedMarket(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get solidHeldUpdate(): LogVaporizeSolidHeldUpdateStruct {
    return this._event.parameters[6].value.toTuple() as LogVaporizeSolidHeldUpdateStruct;
  }

  get solidOwedUpdate(): LogVaporizeSolidOwedUpdateStruct {
    return this._event.parameters[7].value.toTuple() as LogVaporizeSolidOwedUpdateStruct;
  }

  get vaporOwedUpdate(): LogVaporizeVaporOwedUpdateStruct {
    return this._event.parameters[8].value.toTuple() as LogVaporizeVaporOwedUpdateStruct;
  }
}

export class LogVaporizeSolidHeldUpdateStruct extends EthereumTuple {
  get deltaWei(): LogVaporizeSolidHeldUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogVaporizeSolidHeldUpdateDeltaWeiStruct;
  }

  get newPar(): LogVaporizeSolidHeldUpdateNewParStruct {
    return this[1].toTuple() as LogVaporizeSolidHeldUpdateNewParStruct;
  }
}

export class LogVaporizeSolidHeldUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogVaporizeSolidHeldUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogVaporizeSolidOwedUpdateStruct extends EthereumTuple {
  get deltaWei(): LogVaporizeSolidOwedUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogVaporizeSolidOwedUpdateDeltaWeiStruct;
  }

  get newPar(): LogVaporizeSolidOwedUpdateNewParStruct {
    return this[1].toTuple() as LogVaporizeSolidOwedUpdateNewParStruct;
  }
}

export class LogVaporizeSolidOwedUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogVaporizeSolidOwedUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogVaporizeVaporOwedUpdateStruct extends EthereumTuple {
  get deltaWei(): LogVaporizeVaporOwedUpdateDeltaWeiStruct {
    return this[0].toTuple() as LogVaporizeVaporOwedUpdateDeltaWeiStruct;
  }

  get newPar(): LogVaporizeVaporOwedUpdateNewParStruct {
    return this[1].toTuple() as LogVaporizeVaporOwedUpdateNewParStruct;
  }
}

export class LogVaporizeVaporOwedUpdateDeltaWeiStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogVaporizeVaporOwedUpdateNewParStruct extends EthereumTuple {
  get sign(): boolean {
    return this[0].toBoolean();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }
}

export class LogWithdrawExcessTokens extends EthereumEvent {
  get params(): LogWithdrawExcessTokens__Params {
    return new LogWithdrawExcessTokens__Params(this);
  }
}

export class LogWithdrawExcessTokens__Params {
  _event: LogWithdrawExcessTokens;

  constructor(event: LogWithdrawExcessTokens) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LogAddMarket extends EthereumEvent {
  get params(): LogAddMarket__Params {
    return new LogAddMarket__Params(this);
  }
}

export class LogAddMarket__Params {
  _event: LogAddMarket;

  constructor(event: LogAddMarket) {
    this._event = event;
  }

  get marketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LogSetIsClosing extends EthereumEvent {
  get params(): LogSetIsClosing__Params {
    return new LogSetIsClosing__Params(this);
  }
}

export class LogSetIsClosing__Params {
  _event: LogSetIsClosing;

  constructor(event: LogSetIsClosing) {
    this._event = event;
  }

  get marketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get isClosing(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class LogSetPriceOracle extends EthereumEvent {
  get params(): LogSetPriceOracle__Params {
    return new LogSetPriceOracle__Params(this);
  }
}

export class LogSetPriceOracle__Params {
  _event: LogSetPriceOracle;

  constructor(event: LogSetPriceOracle) {
    this._event = event;
  }

  get marketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get priceOracle(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LogSetInterestSetter extends EthereumEvent {
  get params(): LogSetInterestSetter__Params {
    return new LogSetInterestSetter__Params(this);
  }
}

export class LogSetInterestSetter__Params {
  _event: LogSetInterestSetter;

  constructor(event: LogSetInterestSetter) {
    this._event = event;
  }

  get marketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get interestSetter(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LogSetMarginPremium extends EthereumEvent {
  get params(): LogSetMarginPremium__Params {
    return new LogSetMarginPremium__Params(this);
  }
}

export class LogSetMarginPremium__Params {
  _event: LogSetMarginPremium;

  constructor(event: LogSetMarginPremium) {
    this._event = event;
  }

  get marketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get marginPremium(): LogSetMarginPremiumMarginPremiumStruct {
    return this._event.parameters[1].value.toTuple() as LogSetMarginPremiumMarginPremiumStruct;
  }
}

export class LogSetMarginPremiumMarginPremiumStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class LogSetSpreadPremium extends EthereumEvent {
  get params(): LogSetSpreadPremium__Params {
    return new LogSetSpreadPremium__Params(this);
  }
}

export class LogSetSpreadPremium__Params {
  _event: LogSetSpreadPremium;

  constructor(event: LogSetSpreadPremium) {
    this._event = event;
  }

  get marketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get spreadPremium(): LogSetSpreadPremiumSpreadPremiumStruct {
    return this._event.parameters[1].value.toTuple() as LogSetSpreadPremiumSpreadPremiumStruct;
  }
}

export class LogSetSpreadPremiumSpreadPremiumStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class LogSetMarginRatio extends EthereumEvent {
  get params(): LogSetMarginRatio__Params {
    return new LogSetMarginRatio__Params(this);
  }
}

export class LogSetMarginRatio__Params {
  _event: LogSetMarginRatio;

  constructor(event: LogSetMarginRatio) {
    this._event = event;
  }

  get marginRatio(): LogSetMarginRatioMarginRatioStruct {
    return this._event.parameters[0].value.toTuple() as LogSetMarginRatioMarginRatioStruct;
  }
}

export class LogSetMarginRatioMarginRatioStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class LogSetLiquidationSpread extends EthereumEvent {
  get params(): LogSetLiquidationSpread__Params {
    return new LogSetLiquidationSpread__Params(this);
  }
}

export class LogSetLiquidationSpread__Params {
  _event: LogSetLiquidationSpread;

  constructor(event: LogSetLiquidationSpread) {
    this._event = event;
  }

  get liquidationSpread(): LogSetLiquidationSpreadLiquidationSpreadStruct {
    return this._event.parameters[0].value.toTuple() as LogSetLiquidationSpreadLiquidationSpreadStruct;
  }
}

export class LogSetLiquidationSpreadLiquidationSpreadStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class LogSetEarningsRate extends EthereumEvent {
  get params(): LogSetEarningsRate__Params {
    return new LogSetEarningsRate__Params(this);
  }
}

export class LogSetEarningsRate__Params {
  _event: LogSetEarningsRate;

  constructor(event: LogSetEarningsRate) {
    this._event = event;
  }

  get earningsRate(): LogSetEarningsRateEarningsRateStruct {
    return this._event.parameters[0].value.toTuple() as LogSetEarningsRateEarningsRateStruct;
  }
}

export class LogSetEarningsRateEarningsRateStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class LogSetMinBorrowedValue extends EthereumEvent {
  get params(): LogSetMinBorrowedValue__Params {
    return new LogSetMinBorrowedValue__Params(this);
  }
}

export class LogSetMinBorrowedValue__Params {
  _event: LogSetMinBorrowedValue;

  constructor(event: LogSetMinBorrowedValue) {
    this._event = event;
  }

  get minBorrowedValue(): LogSetMinBorrowedValueMinBorrowedValueStruct {
    return this._event.parameters[0].value.toTuple() as LogSetMinBorrowedValueMinBorrowedValueStruct;
  }
}

export class LogSetMinBorrowedValueMinBorrowedValueStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class LogSetGlobalOperator extends EthereumEvent {
  get params(): LogSetGlobalOperator__Params {
    return new LogSetGlobalOperator__Params(this);
  }
}

export class LogSetGlobalOperator__Params {
  _event: LogSetGlobalOperator;

  constructor(event: LogSetGlobalOperator) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class LogOperatorSet1 extends EthereumEvent {
  get params(): LogOperatorSet1__Params {
    return new LogOperatorSet1__Params(this);
  }
}

export class LogOperatorSet1__Params {
  _event: LogOperatorSet1;

  constructor(event: LogOperatorSet1) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get trusted(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Contract__getAccountValuesResult {
  value0: EthereumTuple;
  value1: EthereumTuple;

  constructor(value0: EthereumTuple, value1: EthereumTuple) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromTuple(this.value0));
    map.set("value1", EthereumValue.fromTuple(this.value1));
    return map;
  }
}

export class Contract__getMarketWithInfoResult {
  value0: EthereumTuple;
  value1: EthereumTuple;
  value2: EthereumTuple;
  value3: EthereumTuple;

  constructor(
    value0: EthereumTuple,
    value1: EthereumTuple,
    value2: EthereumTuple,
    value3: EthereumTuple
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromTuple(this.value0));
    map.set("value1", EthereumValue.fromTuple(this.value1));
    map.set("value2", EthereumValue.fromTuple(this.value2));
    map.set("value3", EthereumValue.fromTuple(this.value3));
    return map;
  }
}

export class Contract__getAdjustedAccountValuesResult {
  value0: EthereumTuple;
  value1: EthereumTuple;

  constructor(value0: EthereumTuple, value1: EthereumTuple) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromTuple(this.value0));
    map.set("value1", EthereumValue.fromTuple(this.value1));
    return map;
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  getIsGlobalOperator(operator: Address): boolean {
    let result = super.call("getIsGlobalOperator", [
      EthereumValue.fromAddress(operator)
    ]);
    return result[0].toBoolean();
  }

  getMarketTokenAddress(marketId: BigInt): Address {
    let result = super.call("getMarketTokenAddress", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toAddress();
  }

  getAccountValues(account: EthereumTuple): Contract__getAccountValuesResult {
    let result = super.call("getAccountValues", [
      EthereumValue.fromTuple(account)
    ]);
    return new Contract__getAccountValuesResult(
      result[0].toTuple(),
      result[1].toTuple()
    );
  }

  getMarketPriceOracle(marketId: BigInt): Address {
    let result = super.call("getMarketPriceOracle", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toAddress();
  }

  getMarketInterestSetter(marketId: BigInt): Address {
    let result = super.call("getMarketInterestSetter", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toAddress();
  }

  getMarketSpreadPremium(marketId: BigInt): EthereumTuple {
    let result = super.call("getMarketSpreadPremium", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toTuple();
  }

  getNumMarkets(): BigInt {
    let result = super.call("getNumMarkets", []);
    return result[0].toBigInt();
  }

  getIsLocalOperator(owner: Address, operator: Address): boolean {
    let result = super.call("getIsLocalOperator", [
      EthereumValue.fromAddress(owner),
      EthereumValue.fromAddress(operator)
    ]);
    return result[0].toBoolean();
  }

  getAccountPar(account: EthereumTuple, marketId: BigInt): EthereumTuple {
    let result = super.call("getAccountPar", [
      EthereumValue.fromTuple(account),
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toTuple();
  }

  getMarginRatio(): EthereumTuple {
    let result = super.call("getMarginRatio", []);
    return result[0].toTuple();
  }

  getMarketCurrentIndex(marketId: BigInt): EthereumTuple {
    let result = super.call("getMarketCurrentIndex", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toTuple();
  }

  getMarketIsClosing(marketId: BigInt): boolean {
    let result = super.call("getMarketIsClosing", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toBoolean();
  }

  getRiskParams(): EthereumTuple {
    let result = super.call("getRiskParams", []);
    return result[0].toTuple();
  }

  getMinBorrowedValue(): EthereumTuple {
    let result = super.call("getMinBorrowedValue", []);
    return result[0].toTuple();
  }

  getMarketPrice(marketId: BigInt): EthereumTuple {
    let result = super.call("getMarketPrice", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toTuple();
  }

  owner(): Address {
    let result = super.call("owner", []);
    return result[0].toAddress();
  }

  isOwner(): boolean {
    let result = super.call("isOwner", []);
    return result[0].toBoolean();
  }

  getMarketWithInfo(marketId: BigInt): Contract__getMarketWithInfoResult {
    let result = super.call("getMarketWithInfo", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return new Contract__getMarketWithInfoResult(
      result[0].toTuple(),
      result[1].toTuple(),
      result[2].toTuple(),
      result[3].toTuple()
    );
  }

  getLiquidationSpread(): EthereumTuple {
    let result = super.call("getLiquidationSpread", []);
    return result[0].toTuple();
  }

  getAccountWei(account: EthereumTuple, marketId: BigInt): EthereumTuple {
    let result = super.call("getAccountWei", [
      EthereumValue.fromTuple(account),
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toTuple();
  }

  getMarketTotalPar(marketId: BigInt): EthereumTuple {
    let result = super.call("getMarketTotalPar", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toTuple();
  }

  getLiquidationSpreadForPair(
    heldMarketId: BigInt,
    owedMarketId: BigInt
  ): EthereumTuple {
    let result = super.call("getLiquidationSpreadForPair", [
      EthereumValue.fromUnsignedBigInt(heldMarketId),
      EthereumValue.fromUnsignedBigInt(owedMarketId)
    ]);
    return result[0].toTuple();
  }

  getNumExcessTokens(marketId: BigInt): EthereumTuple {
    let result = super.call("getNumExcessTokens", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toTuple();
  }

  getMarketCachedIndex(marketId: BigInt): EthereumTuple {
    let result = super.call("getMarketCachedIndex", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toTuple();
  }

  getAccountStatus(account: EthereumTuple): i32 {
    let result = super.call("getAccountStatus", [
      EthereumValue.fromTuple(account)
    ]);
    return result[0].toI32();
  }

  getEarningsRate(): EthereumTuple {
    let result = super.call("getEarningsRate", []);
    return result[0].toTuple();
  }

  getRiskLimits(): EthereumTuple {
    let result = super.call("getRiskLimits", []);
    return result[0].toTuple();
  }

  getMarket(marketId: BigInt): EthereumTuple {
    let result = super.call("getMarket", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toTuple();
  }

  getAdjustedAccountValues(
    account: EthereumTuple
  ): Contract__getAdjustedAccountValuesResult {
    let result = super.call("getAdjustedAccountValues", [
      EthereumValue.fromTuple(account)
    ]);
    return new Contract__getAdjustedAccountValuesResult(
      result[0].toTuple(),
      result[1].toTuple()
    );
  }

  getMarketMarginPremium(marketId: BigInt): EthereumTuple {
    let result = super.call("getMarketMarginPremium", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toTuple();
  }

  getMarketInterestRate(marketId: BigInt): EthereumTuple {
    let result = super.call("getMarketInterestRate", [
      EthereumValue.fromUnsignedBigInt(marketId)
    ]);
    return result[0].toTuple();
  }
}

export class OwnerSetSpreadPremiumCall extends EthereumCall {
  get inputs(): OwnerSetSpreadPremiumCall__Inputs {
    return new OwnerSetSpreadPremiumCall__Inputs(this);
  }

  get outputs(): OwnerSetSpreadPremiumCall__Outputs {
    return new OwnerSetSpreadPremiumCall__Outputs(this);
  }
}

export class OwnerSetSpreadPremiumCall__Inputs {
  _call: OwnerSetSpreadPremiumCall;

  constructor(call: OwnerSetSpreadPremiumCall) {
    this._call = call;
  }

  get marketId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get spreadPremium(): OwnerSetSpreadPremiumCallSpreadPremiumStruct {
    return this._call.inputValues[1].value.toTuple() as OwnerSetSpreadPremiumCallSpreadPremiumStruct;
  }
}

export class OwnerSetSpreadPremiumCall__Outputs {
  _call: OwnerSetSpreadPremiumCall;

  constructor(call: OwnerSetSpreadPremiumCall) {
    this._call = call;
  }
}

export class OwnerSetSpreadPremiumCallSpreadPremiumStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class OwnerSetInterestSetterCall extends EthereumCall {
  get inputs(): OwnerSetInterestSetterCall__Inputs {
    return new OwnerSetInterestSetterCall__Inputs(this);
  }

  get outputs(): OwnerSetInterestSetterCall__Outputs {
    return new OwnerSetInterestSetterCall__Outputs(this);
  }
}

export class OwnerSetInterestSetterCall__Inputs {
  _call: OwnerSetInterestSetterCall;

  constructor(call: OwnerSetInterestSetterCall) {
    this._call = call;
  }

  get marketId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get interestSetter(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class OwnerSetInterestSetterCall__Outputs {
  _call: OwnerSetInterestSetterCall;

  constructor(call: OwnerSetInterestSetterCall) {
    this._call = call;
  }
}

export class OwnerWithdrawUnsupportedTokensCall extends EthereumCall {
  get inputs(): OwnerWithdrawUnsupportedTokensCall__Inputs {
    return new OwnerWithdrawUnsupportedTokensCall__Inputs(this);
  }

  get outputs(): OwnerWithdrawUnsupportedTokensCall__Outputs {
    return new OwnerWithdrawUnsupportedTokensCall__Outputs(this);
  }
}

export class OwnerWithdrawUnsupportedTokensCall__Inputs {
  _call: OwnerWithdrawUnsupportedTokensCall;

  constructor(call: OwnerWithdrawUnsupportedTokensCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class OwnerWithdrawUnsupportedTokensCall__Outputs {
  _call: OwnerWithdrawUnsupportedTokensCall;

  constructor(call: OwnerWithdrawUnsupportedTokensCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class OwnerSetMinBorrowedValueCall extends EthereumCall {
  get inputs(): OwnerSetMinBorrowedValueCall__Inputs {
    return new OwnerSetMinBorrowedValueCall__Inputs(this);
  }

  get outputs(): OwnerSetMinBorrowedValueCall__Outputs {
    return new OwnerSetMinBorrowedValueCall__Outputs(this);
  }
}

export class OwnerSetMinBorrowedValueCall__Inputs {
  _call: OwnerSetMinBorrowedValueCall;

  constructor(call: OwnerSetMinBorrowedValueCall) {
    this._call = call;
  }

  get minBorrowedValue(): OwnerSetMinBorrowedValueCallMinBorrowedValueStruct {
    return this._call.inputValues[0].value.toTuple() as OwnerSetMinBorrowedValueCallMinBorrowedValueStruct;
  }
}

export class OwnerSetMinBorrowedValueCall__Outputs {
  _call: OwnerSetMinBorrowedValueCall;

  constructor(call: OwnerSetMinBorrowedValueCall) {
    this._call = call;
  }
}

export class OwnerSetMinBorrowedValueCallMinBorrowedValueStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class OwnerSetLiquidationSpreadCall extends EthereumCall {
  get inputs(): OwnerSetLiquidationSpreadCall__Inputs {
    return new OwnerSetLiquidationSpreadCall__Inputs(this);
  }

  get outputs(): OwnerSetLiquidationSpreadCall__Outputs {
    return new OwnerSetLiquidationSpreadCall__Outputs(this);
  }
}

export class OwnerSetLiquidationSpreadCall__Inputs {
  _call: OwnerSetLiquidationSpreadCall;

  constructor(call: OwnerSetLiquidationSpreadCall) {
    this._call = call;
  }

  get spread(): OwnerSetLiquidationSpreadCallSpreadStruct {
    return this._call.inputValues[0].value.toTuple() as OwnerSetLiquidationSpreadCallSpreadStruct;
  }
}

export class OwnerSetLiquidationSpreadCall__Outputs {
  _call: OwnerSetLiquidationSpreadCall;

  constructor(call: OwnerSetLiquidationSpreadCall) {
    this._call = call;
  }
}

export class OwnerSetLiquidationSpreadCallSpreadStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class OwnerSetEarningsRateCall extends EthereumCall {
  get inputs(): OwnerSetEarningsRateCall__Inputs {
    return new OwnerSetEarningsRateCall__Inputs(this);
  }

  get outputs(): OwnerSetEarningsRateCall__Outputs {
    return new OwnerSetEarningsRateCall__Outputs(this);
  }
}

export class OwnerSetEarningsRateCall__Inputs {
  _call: OwnerSetEarningsRateCall;

  constructor(call: OwnerSetEarningsRateCall) {
    this._call = call;
  }

  get earningsRate(): OwnerSetEarningsRateCallEarningsRateStruct {
    return this._call.inputValues[0].value.toTuple() as OwnerSetEarningsRateCallEarningsRateStruct;
  }
}

export class OwnerSetEarningsRateCall__Outputs {
  _call: OwnerSetEarningsRateCall;

  constructor(call: OwnerSetEarningsRateCall) {
    this._call = call;
  }
}

export class OwnerSetEarningsRateCallEarningsRateStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class OwnerSetMarginPremiumCall extends EthereumCall {
  get inputs(): OwnerSetMarginPremiumCall__Inputs {
    return new OwnerSetMarginPremiumCall__Inputs(this);
  }

  get outputs(): OwnerSetMarginPremiumCall__Outputs {
    return new OwnerSetMarginPremiumCall__Outputs(this);
  }
}

export class OwnerSetMarginPremiumCall__Inputs {
  _call: OwnerSetMarginPremiumCall;

  constructor(call: OwnerSetMarginPremiumCall) {
    this._call = call;
  }

  get marketId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get marginPremium(): OwnerSetMarginPremiumCallMarginPremiumStruct {
    return this._call.inputValues[1].value.toTuple() as OwnerSetMarginPremiumCallMarginPremiumStruct;
  }
}

export class OwnerSetMarginPremiumCall__Outputs {
  _call: OwnerSetMarginPremiumCall;

  constructor(call: OwnerSetMarginPremiumCall) {
    this._call = call;
  }
}

export class OwnerSetMarginPremiumCallMarginPremiumStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class RenounceOwnershipCall extends EthereumCall {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class OwnerWithdrawExcessTokensCall extends EthereumCall {
  get inputs(): OwnerWithdrawExcessTokensCall__Inputs {
    return new OwnerWithdrawExcessTokensCall__Inputs(this);
  }

  get outputs(): OwnerWithdrawExcessTokensCall__Outputs {
    return new OwnerWithdrawExcessTokensCall__Outputs(this);
  }
}

export class OwnerWithdrawExcessTokensCall__Inputs {
  _call: OwnerWithdrawExcessTokensCall;

  constructor(call: OwnerWithdrawExcessTokensCall) {
    this._call = call;
  }

  get marketId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class OwnerWithdrawExcessTokensCall__Outputs {
  _call: OwnerWithdrawExcessTokensCall;

  constructor(call: OwnerWithdrawExcessTokensCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class OwnerAddMarketCall extends EthereumCall {
  get inputs(): OwnerAddMarketCall__Inputs {
    return new OwnerAddMarketCall__Inputs(this);
  }

  get outputs(): OwnerAddMarketCall__Outputs {
    return new OwnerAddMarketCall__Outputs(this);
  }
}

export class OwnerAddMarketCall__Inputs {
  _call: OwnerAddMarketCall;

  constructor(call: OwnerAddMarketCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get priceOracle(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get interestSetter(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get marginPremium(): OwnerAddMarketCallMarginPremiumStruct {
    return this._call.inputValues[3].value.toTuple() as OwnerAddMarketCallMarginPremiumStruct;
  }

  get spreadPremium(): OwnerAddMarketCallSpreadPremiumStruct {
    return this._call.inputValues[4].value.toTuple() as OwnerAddMarketCallSpreadPremiumStruct;
  }
}

export class OwnerAddMarketCall__Outputs {
  _call: OwnerAddMarketCall;

  constructor(call: OwnerAddMarketCall) {
    this._call = call;
  }
}

export class OwnerAddMarketCallMarginPremiumStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class OwnerAddMarketCallSpreadPremiumStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class OwnerSetMarginRatioCall extends EthereumCall {
  get inputs(): OwnerSetMarginRatioCall__Inputs {
    return new OwnerSetMarginRatioCall__Inputs(this);
  }

  get outputs(): OwnerSetMarginRatioCall__Outputs {
    return new OwnerSetMarginRatioCall__Outputs(this);
  }
}

export class OwnerSetMarginRatioCall__Inputs {
  _call: OwnerSetMarginRatioCall;

  constructor(call: OwnerSetMarginRatioCall) {
    this._call = call;
  }

  get ratio(): OwnerSetMarginRatioCallRatioStruct {
    return this._call.inputValues[0].value.toTuple() as OwnerSetMarginRatioCallRatioStruct;
  }
}

export class OwnerSetMarginRatioCall__Outputs {
  _call: OwnerSetMarginRatioCall;

  constructor(call: OwnerSetMarginRatioCall) {
    this._call = call;
  }
}

export class OwnerSetMarginRatioCallRatioStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class OwnerSetPriceOracleCall extends EthereumCall {
  get inputs(): OwnerSetPriceOracleCall__Inputs {
    return new OwnerSetPriceOracleCall__Inputs(this);
  }

  get outputs(): OwnerSetPriceOracleCall__Outputs {
    return new OwnerSetPriceOracleCall__Outputs(this);
  }
}

export class OwnerSetPriceOracleCall__Inputs {
  _call: OwnerSetPriceOracleCall;

  constructor(call: OwnerSetPriceOracleCall) {
    this._call = call;
  }

  get marketId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get priceOracle(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class OwnerSetPriceOracleCall__Outputs {
  _call: OwnerSetPriceOracleCall;

  constructor(call: OwnerSetPriceOracleCall) {
    this._call = call;
  }
}

export class OwnerSetIsClosingCall extends EthereumCall {
  get inputs(): OwnerSetIsClosingCall__Inputs {
    return new OwnerSetIsClosingCall__Inputs(this);
  }

  get outputs(): OwnerSetIsClosingCall__Outputs {
    return new OwnerSetIsClosingCall__Outputs(this);
  }
}

export class OwnerSetIsClosingCall__Inputs {
  _call: OwnerSetIsClosingCall;

  constructor(call: OwnerSetIsClosingCall) {
    this._call = call;
  }

  get marketId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get isClosing(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class OwnerSetIsClosingCall__Outputs {
  _call: OwnerSetIsClosingCall;

  constructor(call: OwnerSetIsClosingCall) {
    this._call = call;
  }
}

export class OwnerSetGlobalOperatorCall extends EthereumCall {
  get inputs(): OwnerSetGlobalOperatorCall__Inputs {
    return new OwnerSetGlobalOperatorCall__Inputs(this);
  }

  get outputs(): OwnerSetGlobalOperatorCall__Outputs {
    return new OwnerSetGlobalOperatorCall__Outputs(this);
  }
}

export class OwnerSetGlobalOperatorCall__Inputs {
  _call: OwnerSetGlobalOperatorCall;

  constructor(call: OwnerSetGlobalOperatorCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class OwnerSetGlobalOperatorCall__Outputs {
  _call: OwnerSetGlobalOperatorCall;

  constructor(call: OwnerSetGlobalOperatorCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends EthereumCall {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get riskParams(): ConstructorCallRiskParamsStruct {
    return this._call.inputValues[0].value.toTuple() as ConstructorCallRiskParamsStruct;
  }

  get riskLimits(): ConstructorCallRiskLimitsStruct {
    return this._call.inputValues[1].value.toTuple() as ConstructorCallRiskLimitsStruct;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCallRiskParamsStruct extends EthereumTuple {
  get marginRatio(): ConstructorCallRiskParamsMarginRatioStruct {
    return this[0].toTuple() as ConstructorCallRiskParamsMarginRatioStruct;
  }

  get liquidationSpread(): ConstructorCallRiskParamsLiquidationSpreadStruct {
    return this[1].toTuple() as ConstructorCallRiskParamsLiquidationSpreadStruct;
  }

  get earningsRate(): ConstructorCallRiskParamsEarningsRateStruct {
    return this[2].toTuple() as ConstructorCallRiskParamsEarningsRateStruct;
  }

  get minBorrowedValue(): ConstructorCallRiskParamsMinBorrowedValueStruct {
    return this[3].toTuple() as ConstructorCallRiskParamsMinBorrowedValueStruct;
  }
}

export class ConstructorCallRiskParamsMarginRatioStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class ConstructorCallRiskParamsLiquidationSpreadStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class ConstructorCallRiskParamsEarningsRateStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class ConstructorCallRiskParamsMinBorrowedValueStruct extends EthereumTuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class ConstructorCallRiskLimitsStruct extends EthereumTuple {
  get marginRatioMax(): BigInt {
    return this[0].toBigInt();
  }

  get liquidationSpreadMax(): BigInt {
    return this[1].toBigInt();
  }

  get earningsRateMax(): BigInt {
    return this[2].toBigInt();
  }

  get marginPremiumMax(): BigInt {
    return this[3].toBigInt();
  }

  get spreadPremiumMax(): BigInt {
    return this[4].toBigInt();
  }

  get minBorrowedValueMax(): BigInt {
    return this[5].toBigInt();
  }
}
