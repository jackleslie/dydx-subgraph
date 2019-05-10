import { ExpirySet } from "../generated/Expiry/Expiry";
import { Expiry } from "../generated/schema";

export function handleExpirySet(event: ExpirySet): void {
  let entity = new Expiry(
    event.params.owner.toString() +
      "-" +
      event.params.number.toString() +
      "-" +
      event.params.marketId.toString()
  );
  entity.accountOwner = event.params.owner;
  entity.accountNumber = event.params.number;
  entity.marketId = event.params.marketId;
  entity.time = event.params.time;
  entity.save();
}
