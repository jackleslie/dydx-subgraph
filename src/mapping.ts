import {
  LogIndexUpdate,
  LogAddMarket,
  LogBuy,
  LogSell
} from "../generated/Contract/Contract";
import { Index, Market, Buy, Sell } from "../generated/schema";

export function handleLogIndexUpdate(event: LogIndexUpdate): void {
  let entity = new Index(event.params.market.toString());
  entity.market = event.params.market;
  entity.borrow = event.params.index.borrow;
  entity.supply = event.params.index.supply;
  entity.lastUpdate = event.params.index.lastUpdate;
  entity.save();
}

export function handleLogAddMarket(event: LogAddMarket): void {
  let entity = new Market(event.params.marketId.toString());
  entity.marketId = event.params.marketId;
  entity.token = event.params.token;
  entity.save();
}

export function handleLogBuy(event: LogBuy): void {
  let entity = new Buy(
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

export function handleLogSell(event: LogSell): void {
  let entity = new Sell(
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
