import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Market extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Market entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Market entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Market", id.toString(), this);
  }

  static load(id: string): Market | null {
    return store.get("Market", id) as Market | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get marketId(): BigInt {
    let value = this.get("marketId");
    return value.toBigInt();
  }

  set marketId(value: BigInt) {
    this.set("marketId", Value.fromBigInt(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }
}

export class Index extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Index entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Index entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Index", id.toString(), this);
  }

  static load(id: string): Index | null {
    return store.get("Index", id) as Index | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get market(): BigInt {
    let value = this.get("market");
    return value.toBigInt();
  }

  set market(value: BigInt) {
    this.set("market", Value.fromBigInt(value));
  }

  get borrow(): BigInt {
    let value = this.get("borrow");
    return value.toBigInt();
  }

  set borrow(value: BigInt) {
    this.set("borrow", Value.fromBigInt(value));
  }

  get supply(): BigInt {
    let value = this.get("supply");
    return value.toBigInt();
  }

  set supply(value: BigInt) {
    this.set("supply", Value.fromBigInt(value));
  }

  get lastUpdate(): BigInt {
    let value = this.get("lastUpdate");
    return value.toBigInt();
  }

  set lastUpdate(value: BigInt) {
    this.set("lastUpdate", Value.fromBigInt(value));
  }
}
