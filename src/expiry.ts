import { ExpirySet } from "../generated/Expiry/Expiry";
import { Buy } from "../generated/schema";

export function handleExpirySet(event: ExpirySet): void {
  let buyId =
    event.params.owner.toHexString() +
    "-" +
    event.params.number.toString() +
    "-" +
    event.params.marketId.toString();
  let entity = Buy.load(buyId);
  if (entity != null) {
    entity.expires = event.params.time;
    entity.save();
  }
}
