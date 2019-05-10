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

export class Buy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Buy entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Buy entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Buy", id.toString(), this);
  }

  static load(id: string): Buy | null {
    return store.get("Buy", id) as Buy | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get accountOwner(): Bytes {
    let value = this.get("accountOwner");
    return value.toBytes();
  }

  set accountOwner(value: Bytes) {
    this.set("accountOwner", Value.fromBytes(value));
  }

  get accountNumber(): BigInt {
    let value = this.get("accountNumber");
    return value.toBigInt();
  }

  set accountNumber(value: BigInt) {
    this.set("accountNumber", Value.fromBigInt(value));
  }

  get takerMarket(): BigInt {
    let value = this.get("takerMarket");
    return value.toBigInt();
  }

  set takerMarket(value: BigInt) {
    this.set("takerMarket", Value.fromBigInt(value));
  }

  get makerMarket(): BigInt {
    let value = this.get("makerMarket");
    return value.toBigInt();
  }

  set makerMarket(value: BigInt) {
    this.set("makerMarket", Value.fromBigInt(value));
  }

  get takerUpdate_deltaWei_sign(): boolean {
    let value = this.get("takerUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set takerUpdate_deltaWei_sign(value: boolean) {
    this.set("takerUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get takerUpdate_deltaWei_value(): BigInt {
    let value = this.get("takerUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set takerUpdate_deltaWei_value(value: BigInt) {
    this.set("takerUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get takerUpdate_newPar_sign(): boolean {
    let value = this.get("takerUpdate_newPar_sign");
    return value.toBoolean();
  }

  set takerUpdate_newPar_sign(value: boolean) {
    this.set("takerUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get takerUpdate_newPar_value(): BigInt {
    let value = this.get("takerUpdate_newPar_value");
    return value.toBigInt();
  }

  set takerUpdate_newPar_value(value: BigInt) {
    this.set("takerUpdate_newPar_value", Value.fromBigInt(value));
  }

  get makerUpdate_deltaWei_sign(): boolean {
    let value = this.get("makerUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set makerUpdate_deltaWei_sign(value: boolean) {
    this.set("makerUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get makerUpdate_deltaWei_value(): BigInt {
    let value = this.get("makerUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set makerUpdate_deltaWei_value(value: BigInt) {
    this.set("makerUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get makerUpdate_newPar_sign(): boolean {
    let value = this.get("makerUpdate_newPar_sign");
    return value.toBoolean();
  }

  set makerUpdate_newPar_sign(value: boolean) {
    this.set("makerUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get makerUpdate_newPar_value(): BigInt {
    let value = this.get("makerUpdate_newPar_value");
    return value.toBigInt();
  }

  set makerUpdate_newPar_value(value: BigInt) {
    this.set("makerUpdate_newPar_value", Value.fromBigInt(value));
  }

  get exchangeWrapper(): Bytes {
    let value = this.get("exchangeWrapper");
    return value.toBytes();
  }

  set exchangeWrapper(value: Bytes) {
    this.set("exchangeWrapper", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get expires(): string {
    let value = this.get("expires");
    return value.toString();
  }

  set expires(value: string) {
    this.set("expires", Value.fromString(value));
  }
}

export class Sell extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Sell entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Sell entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Sell", id.toString(), this);
  }

  static load(id: string): Sell | null {
    return store.get("Sell", id) as Sell | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get accountOwner(): Bytes {
    let value = this.get("accountOwner");
    return value.toBytes();
  }

  set accountOwner(value: Bytes) {
    this.set("accountOwner", Value.fromBytes(value));
  }

  get accountNumber(): BigInt {
    let value = this.get("accountNumber");
    return value.toBigInt();
  }

  set accountNumber(value: BigInt) {
    this.set("accountNumber", Value.fromBigInt(value));
  }

  get takerMarket(): BigInt {
    let value = this.get("takerMarket");
    return value.toBigInt();
  }

  set takerMarket(value: BigInt) {
    this.set("takerMarket", Value.fromBigInt(value));
  }

  get makerMarket(): BigInt {
    let value = this.get("makerMarket");
    return value.toBigInt();
  }

  set makerMarket(value: BigInt) {
    this.set("makerMarket", Value.fromBigInt(value));
  }

  get takerUpdate_deltaWei_sign(): boolean {
    let value = this.get("takerUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set takerUpdate_deltaWei_sign(value: boolean) {
    this.set("takerUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get takerUpdate_deltaWei_value(): BigInt {
    let value = this.get("takerUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set takerUpdate_deltaWei_value(value: BigInt) {
    this.set("takerUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get takerUpdate_newPar_sign(): boolean {
    let value = this.get("takerUpdate_newPar_sign");
    return value.toBoolean();
  }

  set takerUpdate_newPar_sign(value: boolean) {
    this.set("takerUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get takerUpdate_newPar_value(): BigInt {
    let value = this.get("takerUpdate_newPar_value");
    return value.toBigInt();
  }

  set takerUpdate_newPar_value(value: BigInt) {
    this.set("takerUpdate_newPar_value", Value.fromBigInt(value));
  }

  get makerUpdate_deltaWei_sign(): boolean {
    let value = this.get("makerUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set makerUpdate_deltaWei_sign(value: boolean) {
    this.set("makerUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get makerUpdate_deltaWei_value(): BigInt {
    let value = this.get("makerUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set makerUpdate_deltaWei_value(value: BigInt) {
    this.set("makerUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get makerUpdate_newPar_sign(): boolean {
    let value = this.get("makerUpdate_newPar_sign");
    return value.toBoolean();
  }

  set makerUpdate_newPar_sign(value: boolean) {
    this.set("makerUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get makerUpdate_newPar_value(): BigInt {
    let value = this.get("makerUpdate_newPar_value");
    return value.toBigInt();
  }

  set makerUpdate_newPar_value(value: BigInt) {
    this.set("makerUpdate_newPar_value", Value.fromBigInt(value));
  }

  get exchangeWrapper(): Bytes {
    let value = this.get("exchangeWrapper");
    return value.toBytes();
  }

  set exchangeWrapper(value: Bytes) {
    this.set("exchangeWrapper", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get expires(): string {
    let value = this.get("expires");
    return value.toString();
  }

  set expires(value: string) {
    this.set("expires", Value.fromString(value));
  }
}

export class Expiry extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Expiry entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Expiry entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Expiry", id.toString(), this);
  }

  static load(id: string): Expiry | null {
    return store.get("Expiry", id) as Expiry | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get accountOwner(): Bytes {
    let value = this.get("accountOwner");
    return value.toBytes();
  }

  set accountOwner(value: Bytes) {
    this.set("accountOwner", Value.fromBytes(value));
  }

  get accountNumber(): BigInt {
    let value = this.get("accountNumber");
    return value.toBigInt();
  }

  set accountNumber(value: BigInt) {
    this.set("accountNumber", Value.fromBigInt(value));
  }

  get marketId(): BigInt {
    let value = this.get("marketId");
    return value.toBigInt();
  }

  set marketId(value: BigInt) {
    this.set("marketId", Value.fromBigInt(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }
}
