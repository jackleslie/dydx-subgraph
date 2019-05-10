import { LogIndexUpdate, LogAddMarket } from "../generated/Contract/Contract";
import { Index, Market } from "../generated/schema";

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
