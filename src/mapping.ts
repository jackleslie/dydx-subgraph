import {
  LogOperatorSet as LogOperatorSetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  LogIndexUpdate as LogIndexUpdateEvent,
  LogOperation as LogOperationEvent,
  LogDeposit as LogDepositEvent,
  LogWithdraw as LogWithdrawEvent,
  LogTransfer as LogTransferEvent,
  LogBuy as LogBuyEvent,
  LogSell as LogSellEvent,
  LogTrade as LogTradeEvent,
  LogCall as LogCallEvent,
  LogLiquidate as LogLiquidateEvent,
  LogVaporize as LogVaporizeEvent,
  LogWithdrawExcessTokens as LogWithdrawExcessTokensEvent,
  LogAddMarket as LogAddMarketEvent,
  LogSetIsClosing as LogSetIsClosingEvent,
  LogSetPriceOracle as LogSetPriceOracleEvent,
  LogSetInterestSetter as LogSetInterestSetterEvent,
  LogSetMarginPremium as LogSetMarginPremiumEvent,
  LogSetSpreadPremium as LogSetSpreadPremiumEvent,
  LogSetMarginRatio as LogSetMarginRatioEvent,
  LogSetLiquidationSpread as LogSetLiquidationSpreadEvent,
  LogSetEarningsRate as LogSetEarningsRateEvent,
  LogSetMinBorrowedValue as LogSetMinBorrowedValueEvent,
  LogSetGlobalOperator as LogSetGlobalOperatorEvent,
  LogOperatorSet1 as LogOperatorSet1Event
} from "../generated/Contract/Contract";
import {
  LogOperatorSet,
  OwnershipTransferred,
  LogIndexUpdate,
  LogOperation,
  LogDeposit,
  LogWithdraw,
  LogTransfer,
  LogBuy,
  LogSell,
  LogTrade,
  LogCall,
  LogLiquidate,
  LogVaporize,
  LogWithdrawExcessTokens,
  LogAddMarket,
  LogSetIsClosing,
  LogSetPriceOracle,
  LogSetInterestSetter,
  LogSetMarginPremium,
  LogSetSpreadPremium,
  LogSetMarginRatio,
  LogSetLiquidationSpread,
  LogSetEarningsRate,
  LogSetMinBorrowedValue,
  LogSetGlobalOperator,
  LogOperatorSet1
} from "../generated/schema";

export function handleLogOperatorSet(event: LogOperatorSetEvent): void {
  let entity = new LogOperatorSet(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.trusted = event.params.trusted;
  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.save();
}

export function handleLogIndexUpdate(event: LogIndexUpdateEvent): void {
  let entity = new LogIndexUpdate(event.params.market.toString());
  entity.market = event.params.market;
  entity.index_borrow = event.params.index.borrow;
  entity.index_supply = event.params.index.supply;
  entity.index_lastUpdate = event.params.index.lastUpdate;
  entity.save();
}

export function handleLogOperation(event: LogOperationEvent): void {
  let entity = new LogOperation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.sender = event.params.sender;
  entity.save();
}

export function handleLogDeposit(event: LogDepositEvent): void {
  let entity = new LogDeposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.accountOwner = event.params.accountOwner;
  entity.accountNumber = event.params.accountNumber;
  entity.market = event.params.market;
  entity.update_deltaWei_sign = event.params.update.deltaWei.sign;
  entity.update_deltaWei_value = event.params.update.deltaWei.value;
  entity.update_newPar_sign = event.params.update.newPar.sign;
  entity.update_newPar_value = event.params.update.newPar.value;
  entity.from = event.params.from;
  entity.save();
}

export function handleLogWithdraw(event: LogWithdrawEvent): void {
  let entity = new LogWithdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.accountOwner = event.params.accountOwner;
  entity.accountNumber = event.params.accountNumber;
  entity.market = event.params.market;
  entity.update_deltaWei_sign = event.params.update.deltaWei.sign;
  entity.update_deltaWei_value = event.params.update.deltaWei.value;
  entity.update_newPar_sign = event.params.update.newPar.sign;
  entity.update_newPar_value = event.params.update.newPar.value;
  entity.to = event.params.to;
  entity.save();
}

export function handleLogTransfer(event: LogTransferEvent): void {
  let entity = new LogTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.accountOneOwner = event.params.accountOneOwner;
  entity.accountOneNumber = event.params.accountOneNumber;
  entity.accountTwoOwner = event.params.accountTwoOwner;
  entity.accountTwoNumber = event.params.accountTwoNumber;
  entity.market = event.params.market;
  entity.updateOne_deltaWei_sign = event.params.updateOne.deltaWei.sign;
  entity.updateOne_deltaWei_value = event.params.updateOne.deltaWei.value;
  entity.updateOne_newPar_sign = event.params.updateOne.newPar.sign;
  entity.updateOne_newPar_value = event.params.updateOne.newPar.value;
  entity.updateTwo_deltaWei_sign = event.params.updateTwo.deltaWei.sign;
  entity.updateTwo_deltaWei_value = event.params.updateTwo.deltaWei.value;
  entity.updateTwo_newPar_sign = event.params.updateTwo.newPar.sign;
  entity.updateTwo_newPar_value = event.params.updateTwo.newPar.value;
  entity.save();
}

export function handleLogBuy(event: LogBuyEvent): void {
  let entity = new LogBuy(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.accountOwner = event.params.accountOwner;
  entity.accountNumber = event.params.accountNumber;
  entity.takerMarket = event.params.takerMarket;
  entity.makerMarket = event.params.makerMarket;
  entity.takerUpdate_deltaWei_sign = event.params.takerUpdate.deltaWei.sign;
  entity.takerUpdate_deltaWei_value = event.params.takerUpdate.deltaWei.value;
  entity.takerUpdate_newPar_sign = event.params.takerUpdate.newPar.sign;
  entity.takerUpdate_newPar_value = event.params.takerUpdate.newPar.value;
  entity.makerUpdate_deltaWei_sign = event.params.makerUpdate.deltaWei.sign;
  entity.makerUpdate_deltaWei_value = event.params.makerUpdate.deltaWei.value;
  entity.makerUpdate_newPar_sign = event.params.makerUpdate.newPar.sign;
  entity.makerUpdate_newPar_value = event.params.makerUpdate.newPar.value;
  entity.exchangeWrapper = event.params.exchangeWrapper;
  entity.save();
}

export function handleLogSell(event: LogSellEvent): void {
  let entity = new LogSell(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.accountOwner = event.params.accountOwner;
  entity.accountNumber = event.params.accountNumber;
  entity.takerMarket = event.params.takerMarket;
  entity.makerMarket = event.params.makerMarket;
  entity.takerUpdate_deltaWei_sign = event.params.takerUpdate.deltaWei.sign;
  entity.takerUpdate_deltaWei_value = event.params.takerUpdate.deltaWei.value;
  entity.takerUpdate_newPar_sign = event.params.takerUpdate.newPar.sign;
  entity.takerUpdate_newPar_value = event.params.takerUpdate.newPar.value;
  entity.makerUpdate_deltaWei_sign = event.params.makerUpdate.deltaWei.sign;
  entity.makerUpdate_deltaWei_value = event.params.makerUpdate.deltaWei.value;
  entity.makerUpdate_newPar_sign = event.params.makerUpdate.newPar.sign;
  entity.makerUpdate_newPar_value = event.params.makerUpdate.newPar.value;
  entity.exchangeWrapper = event.params.exchangeWrapper;
  entity.save();
}

export function handleLogTrade(event: LogTradeEvent): void {
  let entity = new LogTrade(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.takerAccountOwner = event.params.takerAccountOwner;
  entity.takerAccountNumber = event.params.takerAccountNumber;
  entity.makerAccountOwner = event.params.makerAccountOwner;
  entity.makerAccountNumber = event.params.makerAccountNumber;
  entity.inputMarket = event.params.inputMarket;
  entity.outputMarket = event.params.outputMarket;
  entity.takerInputUpdate_deltaWei_sign =
    event.params.takerInputUpdate.deltaWei.sign;
  entity.takerInputUpdate_deltaWei_value =
    event.params.takerInputUpdate.deltaWei.value;
  entity.takerInputUpdate_newPar_sign =
    event.params.takerInputUpdate.newPar.sign;
  entity.takerInputUpdate_newPar_value =
    event.params.takerInputUpdate.newPar.value;
  entity.takerOutputUpdate_deltaWei_sign =
    event.params.takerOutputUpdate.deltaWei.sign;
  entity.takerOutputUpdate_deltaWei_value =
    event.params.takerOutputUpdate.deltaWei.value;
  entity.takerOutputUpdate_newPar_sign =
    event.params.takerOutputUpdate.newPar.sign;
  entity.takerOutputUpdate_newPar_value =
    event.params.takerOutputUpdate.newPar.value;
  entity.makerInputUpdate_deltaWei_sign =
    event.params.makerInputUpdate.deltaWei.sign;
  entity.makerInputUpdate_deltaWei_value =
    event.params.makerInputUpdate.deltaWei.value;
  entity.makerInputUpdate_newPar_sign =
    event.params.makerInputUpdate.newPar.sign;
  entity.makerInputUpdate_newPar_value =
    event.params.makerInputUpdate.newPar.value;
  entity.makerOutputUpdate_deltaWei_sign =
    event.params.makerOutputUpdate.deltaWei.sign;
  entity.makerOutputUpdate_deltaWei_value =
    event.params.makerOutputUpdate.deltaWei.value;
  entity.makerOutputUpdate_newPar_sign =
    event.params.makerOutputUpdate.newPar.sign;
  entity.makerOutputUpdate_newPar_value =
    event.params.makerOutputUpdate.newPar.value;
  entity.autoTrader = event.params.autoTrader;
  entity.save();
}

export function handleLogCall(event: LogCallEvent): void {
  let entity = new LogCall(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.accountOwner = event.params.accountOwner;
  entity.accountNumber = event.params.accountNumber;
  entity.callee = event.params.callee;
  entity.save();
}

export function handleLogLiquidate(event: LogLiquidateEvent): void {
  let entity = new LogLiquidate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.solidAccountOwner = event.params.solidAccountOwner;
  entity.solidAccountNumber = event.params.solidAccountNumber;
  entity.liquidAccountOwner = event.params.liquidAccountOwner;
  entity.liquidAccountNumber = event.params.liquidAccountNumber;
  entity.heldMarket = event.params.heldMarket;
  entity.owedMarket = event.params.owedMarket;
  entity.solidHeldUpdate_deltaWei_sign =
    event.params.solidHeldUpdate.deltaWei.sign;
  entity.solidHeldUpdate_deltaWei_value =
    event.params.solidHeldUpdate.deltaWei.value;
  entity.solidHeldUpdate_newPar_sign = event.params.solidHeldUpdate.newPar.sign;
  entity.solidHeldUpdate_newPar_value =
    event.params.solidHeldUpdate.newPar.value;
  entity.solidOwedUpdate_deltaWei_sign =
    event.params.solidOwedUpdate.deltaWei.sign;
  entity.solidOwedUpdate_deltaWei_value =
    event.params.solidOwedUpdate.deltaWei.value;
  entity.solidOwedUpdate_newPar_sign = event.params.solidOwedUpdate.newPar.sign;
  entity.solidOwedUpdate_newPar_value =
    event.params.solidOwedUpdate.newPar.value;
  entity.liquidHeldUpdate_deltaWei_sign =
    event.params.liquidHeldUpdate.deltaWei.sign;
  entity.liquidHeldUpdate_deltaWei_value =
    event.params.liquidHeldUpdate.deltaWei.value;
  entity.liquidHeldUpdate_newPar_sign =
    event.params.liquidHeldUpdate.newPar.sign;
  entity.liquidHeldUpdate_newPar_value =
    event.params.liquidHeldUpdate.newPar.value;
  entity.liquidOwedUpdate_deltaWei_sign =
    event.params.liquidOwedUpdate.deltaWei.sign;
  entity.liquidOwedUpdate_deltaWei_value =
    event.params.liquidOwedUpdate.deltaWei.value;
  entity.liquidOwedUpdate_newPar_sign =
    event.params.liquidOwedUpdate.newPar.sign;
  entity.liquidOwedUpdate_newPar_value =
    event.params.liquidOwedUpdate.newPar.value;
  entity.save();
}

export function handleLogVaporize(event: LogVaporizeEvent): void {
  let entity = new LogVaporize(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.solidAccountOwner = event.params.solidAccountOwner;
  entity.solidAccountNumber = event.params.solidAccountNumber;
  entity.vaporAccountOwner = event.params.vaporAccountOwner;
  entity.vaporAccountNumber = event.params.vaporAccountNumber;
  entity.heldMarket = event.params.heldMarket;
  entity.owedMarket = event.params.owedMarket;
  entity.solidHeldUpdate_deltaWei_sign =
    event.params.solidHeldUpdate.deltaWei.sign;
  entity.solidHeldUpdate_deltaWei_value =
    event.params.solidHeldUpdate.deltaWei.value;
  entity.solidHeldUpdate_newPar_sign = event.params.solidHeldUpdate.newPar.sign;
  entity.solidHeldUpdate_newPar_value =
    event.params.solidHeldUpdate.newPar.value;
  entity.solidOwedUpdate_deltaWei_sign =
    event.params.solidOwedUpdate.deltaWei.sign;
  entity.solidOwedUpdate_deltaWei_value =
    event.params.solidOwedUpdate.deltaWei.value;
  entity.solidOwedUpdate_newPar_sign = event.params.solidOwedUpdate.newPar.sign;
  entity.solidOwedUpdate_newPar_value =
    event.params.solidOwedUpdate.newPar.value;
  entity.vaporOwedUpdate_deltaWei_sign =
    event.params.vaporOwedUpdate.deltaWei.sign;
  entity.vaporOwedUpdate_deltaWei_value =
    event.params.vaporOwedUpdate.deltaWei.value;
  entity.vaporOwedUpdate_newPar_sign = event.params.vaporOwedUpdate.newPar.sign;
  entity.vaporOwedUpdate_newPar_value =
    event.params.vaporOwedUpdate.newPar.value;
  entity.save();
}

export function handleLogWithdrawExcessTokens(
  event: LogWithdrawExcessTokensEvent
): void {
  let entity = new LogWithdrawExcessTokens(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.token = event.params.token;
  entity.amount = event.params.amount;
  entity.save();
}

export function handleLogAddMarket(event: LogAddMarketEvent): void {
  let entity = new LogAddMarket(event.params.marketId.toString());
  entity.marketId = event.params.marketId;
  entity.token = event.params.token;
  entity.save();
}

export function handleLogSetIsClosing(event: LogSetIsClosingEvent): void {
  let entity = new LogSetIsClosing(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.marketId = event.params.marketId;
  entity.isClosing = event.params.isClosing;
  entity.save();
}

export function handleLogSetPriceOracle(event: LogSetPriceOracleEvent): void {
  let entity = new LogSetPriceOracle(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.marketId = event.params.marketId;
  entity.priceOracle = event.params.priceOracle;
  entity.save();
}

export function handleLogSetInterestSetter(
  event: LogSetInterestSetterEvent
): void {
  let entity = new LogSetInterestSetter(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.marketId = event.params.marketId;
  entity.interestSetter = event.params.interestSetter;
  entity.save();
}

export function handleLogSetMarginPremium(
  event: LogSetMarginPremiumEvent
): void {
  let entity = new LogSetMarginPremium(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.marketId = event.params.marketId;
  entity.marginPremium_value = event.params.marginPremium.value;
  entity.save();
}

export function handleLogSetSpreadPremium(
  event: LogSetSpreadPremiumEvent
): void {
  let entity = new LogSetSpreadPremium(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.marketId = event.params.marketId;
  entity.spreadPremium_value = event.params.spreadPremium.value;
  entity.save();
}

export function handleLogSetMarginRatio(event: LogSetMarginRatioEvent): void {
  let entity = new LogSetMarginRatio(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.marginRatio_value = event.params.marginRatio.value;
  entity.save();
}

export function handleLogSetLiquidationSpread(
  event: LogSetLiquidationSpreadEvent
): void {
  let entity = new LogSetLiquidationSpread(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.liquidationSpread_value = event.params.liquidationSpread.value;
  entity.save();
}

export function handleLogSetEarningsRate(event: LogSetEarningsRateEvent): void {
  let entity = new LogSetEarningsRate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.earningsRate_value = event.params.earningsRate.value;
  entity.save();
}

export function handleLogSetMinBorrowedValue(
  event: LogSetMinBorrowedValueEvent
): void {
  let entity = new LogSetMinBorrowedValue(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.minBorrowedValue_value = event.params.minBorrowedValue.value;
  entity.save();
}

export function handleLogSetGlobalOperator(
  event: LogSetGlobalOperatorEvent
): void {
  let entity = new LogSetGlobalOperator(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;
  entity.save();
}

export function handleLogOperatorSet1(event: LogOperatorSet1Event): void {
  let entity = new LogOperatorSet1(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.trusted = event.params.trusted;
  entity.save();
}
