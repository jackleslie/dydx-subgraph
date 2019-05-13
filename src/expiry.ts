import { ExpirySet } from "../generated/Expiry/Expiry";
import { Long, Short } from "../generated/schema";

export function handleExpirySet(event: ExpirySet): void {
  let id =
    event.params.owner.toHexString() +
    "-" +
    event.params.number.toString() +
    "-" +
    event.params.marketId.toString();
  let longEntity = Long.load(id);
  let shortEntity = Short.load(id);
  if (longEntity != null) {
    longEntity.expires = event.params.time;
    longEntity.save();
  }
  if (shortEntity != null) {
    shortEntity.expires = event.params.time;
    shortEntity.save();
  }
}
