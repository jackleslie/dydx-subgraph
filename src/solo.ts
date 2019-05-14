import {
  LogIndexUpdate,
  LogAddMarket,
  LogBuy,
  LogSell
} from "../generated/SoloMargin/SoloMargin";
import { Market, Long, Short } from "../generated/schema";
import { store } from "@graphprotocol/graph-ts";

export function handleLogIndexUpdate(event: LogIndexUpdate): void {
  let id = event.params.market.toString();
  let entity = Market.load(id);
  entity.borrowIndex = event.params.index.borrow;
  entity.supplyIndex = event.params.index.supply;
  entity.lastIndexUpdate = event.params.index.lastUpdate;
  entity.save();
}

export function handleLogAddMarket(event: LogAddMarket): void {
  let entity = new Market(event.params.marketId.toString());
  entity.marketId = event.params.marketId;
  entity.token = event.params.token;
  entity.save();
}

export function handleLogBuy(event: LogBuy): void {
  if (
    event.params.makerUpdate.deltaWei.sign == true &&
    event.params.makerUpdate.newPar.sign == true
  ) {
    let entity = new Long(
      event.params.accountOwner.toHexString() +
        "-" +
        event.params.accountNumber.toString() +
        "-" +
        event.params.takerMarket.toString()
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
    entity.timestamp = event.block.timestamp;
    entity.amount = event.params.makerUpdate.newPar.value;
    entity.marginDeposit =
      event.params.makerUpdate.newPar.value -
      event.params.makerUpdate.deltaWei.value;
    entity.openPrice =
      entity.takerUpdate_deltaWei_value.toBigDecimal() /
      entity.makerUpdate_deltaWei_value.toBigDecimal();
    entity.leverage =
      entity.makerUpdate_newPar_value.toBigDecimal() /
      (entity.makerUpdate_newPar_value.toBigDecimal() -
        entity.makerUpdate_deltaWei_value.toBigDecimal());

    entity.save();
  } else if (
    event.params.makerUpdate.deltaWei.sign == true &&
    event.params.makerUpdate.newPar.sign == false
  ) {
    let id =
      event.params.accountOwner.toHexString() +
      "-" +
      event.params.accountNumber.toString() +
      "-" +
      event.params.makerMarket.toString();
    let entity = Long.load(id);
    if (entity != null) {
      if (event.params.makerUpdate.newPar.value.toString() == "0") {
        // entity.amount = event.params.makerUpdate.newPar.value;
        store.remove("Long", id);
      } else {
        entity.amount =
          event.params.takerUpdate.newPar.value -
          event.params.takerUpdate.deltaWei.value;
        entity.save();
      }
    }
  }
}

export function handleLogSell(event: LogSell): void {
  let entity = new Short(
    event.params.accountOwner.toHexString() +
      "-" +
      event.params.accountNumber.toString() +
      "-" +
      event.params.takerMarket.toString()
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
  entity.timestamp = event.block.timestamp;
  entity.value = event.transaction.value;
  entity.openPrice =
    entity.makerUpdate_deltaWei_value.toBigDecimal() /
    entity.takerUpdate_deltaWei_value.toBigDecimal();
  entity.leverage =
    entity.makerUpdate_deltaWei_value.toBigDecimal() /
    (entity.makerUpdate_newPar_value.toBigDecimal() -
      entity.makerUpdate_deltaWei_value.toBigDecimal());
  entity.save();
}
