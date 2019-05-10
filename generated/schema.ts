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

export class LogOperatorSet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogOperatorSet entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogOperatorSet entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogOperatorSet", id.toString(), this);
  }

  static load(id: string): LogOperatorSet | null {
    return store.get("LogOperatorSet", id) as LogOperatorSet | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get trusted(): boolean {
    let value = this.get("trusted");
    return value.toBoolean();
  }

  set trusted(value: boolean) {
    this.set("trusted", Value.fromBoolean(value));
  }
}

export class OwnershipTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save OwnershipTransferred entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OwnershipTransferred entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OwnershipTransferred", id.toString(), this);
  }

  static load(id: string): OwnershipTransferred | null {
    return store.get("OwnershipTransferred", id) as OwnershipTransferred | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousOwner(): Bytes {
    let value = this.get("previousOwner");
    return value.toBytes();
  }

  set previousOwner(value: Bytes) {
    this.set("previousOwner", Value.fromBytes(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    return value.toBytes();
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }
}

export class LogIndexUpdate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogIndexUpdate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogIndexUpdate entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogIndexUpdate", id.toString(), this);
  }

  static load(id: string): LogIndexUpdate | null {
    return store.get("LogIndexUpdate", id) as LogIndexUpdate | null;
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

  get index_borrow(): BigInt {
    let value = this.get("index_borrow");
    return value.toBigInt();
  }

  set index_borrow(value: BigInt) {
    this.set("index_borrow", Value.fromBigInt(value));
  }

  get index_supply(): BigInt {
    let value = this.get("index_supply");
    return value.toBigInt();
  }

  set index_supply(value: BigInt) {
    this.set("index_supply", Value.fromBigInt(value));
  }

  get index_lastUpdate(): BigInt {
    let value = this.get("index_lastUpdate");
    return value.toBigInt();
  }

  set index_lastUpdate(value: BigInt) {
    this.set("index_lastUpdate", Value.fromBigInt(value));
  }
}

export class LogOperation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogOperation entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogOperation entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogOperation", id.toString(), this);
  }

  static load(id: string): LogOperation | null {
    return store.get("LogOperation", id) as LogOperation | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }
}

export class LogDeposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogDeposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogDeposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogDeposit", id.toString(), this);
  }

  static load(id: string): LogDeposit | null {
    return store.get("LogDeposit", id) as LogDeposit | null;
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

  get market(): BigInt {
    let value = this.get("market");
    return value.toBigInt();
  }

  set market(value: BigInt) {
    this.set("market", Value.fromBigInt(value));
  }

  get update_deltaWei_sign(): boolean {
    let value = this.get("update_deltaWei_sign");
    return value.toBoolean();
  }

  set update_deltaWei_sign(value: boolean) {
    this.set("update_deltaWei_sign", Value.fromBoolean(value));
  }

  get update_deltaWei_value(): BigInt {
    let value = this.get("update_deltaWei_value");
    return value.toBigInt();
  }

  set update_deltaWei_value(value: BigInt) {
    this.set("update_deltaWei_value", Value.fromBigInt(value));
  }

  get update_newPar_sign(): boolean {
    let value = this.get("update_newPar_sign");
    return value.toBoolean();
  }

  set update_newPar_sign(value: boolean) {
    this.set("update_newPar_sign", Value.fromBoolean(value));
  }

  get update_newPar_value(): BigInt {
    let value = this.get("update_newPar_value");
    return value.toBigInt();
  }

  set update_newPar_value(value: BigInt) {
    this.set("update_newPar_value", Value.fromBigInt(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }
}

export class LogWithdraw extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogWithdraw entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogWithdraw entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogWithdraw", id.toString(), this);
  }

  static load(id: string): LogWithdraw | null {
    return store.get("LogWithdraw", id) as LogWithdraw | null;
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

  get market(): BigInt {
    let value = this.get("market");
    return value.toBigInt();
  }

  set market(value: BigInt) {
    this.set("market", Value.fromBigInt(value));
  }

  get update_deltaWei_sign(): boolean {
    let value = this.get("update_deltaWei_sign");
    return value.toBoolean();
  }

  set update_deltaWei_sign(value: boolean) {
    this.set("update_deltaWei_sign", Value.fromBoolean(value));
  }

  get update_deltaWei_value(): BigInt {
    let value = this.get("update_deltaWei_value");
    return value.toBigInt();
  }

  set update_deltaWei_value(value: BigInt) {
    this.set("update_deltaWei_value", Value.fromBigInt(value));
  }

  get update_newPar_sign(): boolean {
    let value = this.get("update_newPar_sign");
    return value.toBoolean();
  }

  set update_newPar_sign(value: boolean) {
    this.set("update_newPar_sign", Value.fromBoolean(value));
  }

  get update_newPar_value(): BigInt {
    let value = this.get("update_newPar_value");
    return value.toBigInt();
  }

  set update_newPar_value(value: BigInt) {
    this.set("update_newPar_value", Value.fromBigInt(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }
}

export class LogTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogTransfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogTransfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogTransfer", id.toString(), this);
  }

  static load(id: string): LogTransfer | null {
    return store.get("LogTransfer", id) as LogTransfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get accountOneOwner(): Bytes {
    let value = this.get("accountOneOwner");
    return value.toBytes();
  }

  set accountOneOwner(value: Bytes) {
    this.set("accountOneOwner", Value.fromBytes(value));
  }

  get accountOneNumber(): BigInt {
    let value = this.get("accountOneNumber");
    return value.toBigInt();
  }

  set accountOneNumber(value: BigInt) {
    this.set("accountOneNumber", Value.fromBigInt(value));
  }

  get accountTwoOwner(): Bytes {
    let value = this.get("accountTwoOwner");
    return value.toBytes();
  }

  set accountTwoOwner(value: Bytes) {
    this.set("accountTwoOwner", Value.fromBytes(value));
  }

  get accountTwoNumber(): BigInt {
    let value = this.get("accountTwoNumber");
    return value.toBigInt();
  }

  set accountTwoNumber(value: BigInt) {
    this.set("accountTwoNumber", Value.fromBigInt(value));
  }

  get market(): BigInt {
    let value = this.get("market");
    return value.toBigInt();
  }

  set market(value: BigInt) {
    this.set("market", Value.fromBigInt(value));
  }

  get updateOne_deltaWei_sign(): boolean {
    let value = this.get("updateOne_deltaWei_sign");
    return value.toBoolean();
  }

  set updateOne_deltaWei_sign(value: boolean) {
    this.set("updateOne_deltaWei_sign", Value.fromBoolean(value));
  }

  get updateOne_deltaWei_value(): BigInt {
    let value = this.get("updateOne_deltaWei_value");
    return value.toBigInt();
  }

  set updateOne_deltaWei_value(value: BigInt) {
    this.set("updateOne_deltaWei_value", Value.fromBigInt(value));
  }

  get updateOne_newPar_sign(): boolean {
    let value = this.get("updateOne_newPar_sign");
    return value.toBoolean();
  }

  set updateOne_newPar_sign(value: boolean) {
    this.set("updateOne_newPar_sign", Value.fromBoolean(value));
  }

  get updateOne_newPar_value(): BigInt {
    let value = this.get("updateOne_newPar_value");
    return value.toBigInt();
  }

  set updateOne_newPar_value(value: BigInt) {
    this.set("updateOne_newPar_value", Value.fromBigInt(value));
  }

  get updateTwo_deltaWei_sign(): boolean {
    let value = this.get("updateTwo_deltaWei_sign");
    return value.toBoolean();
  }

  set updateTwo_deltaWei_sign(value: boolean) {
    this.set("updateTwo_deltaWei_sign", Value.fromBoolean(value));
  }

  get updateTwo_deltaWei_value(): BigInt {
    let value = this.get("updateTwo_deltaWei_value");
    return value.toBigInt();
  }

  set updateTwo_deltaWei_value(value: BigInt) {
    this.set("updateTwo_deltaWei_value", Value.fromBigInt(value));
  }

  get updateTwo_newPar_sign(): boolean {
    let value = this.get("updateTwo_newPar_sign");
    return value.toBoolean();
  }

  set updateTwo_newPar_sign(value: boolean) {
    this.set("updateTwo_newPar_sign", Value.fromBoolean(value));
  }

  get updateTwo_newPar_value(): BigInt {
    let value = this.get("updateTwo_newPar_value");
    return value.toBigInt();
  }

  set updateTwo_newPar_value(value: BigInt) {
    this.set("updateTwo_newPar_value", Value.fromBigInt(value));
  }
}

export class LogBuy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogBuy entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogBuy entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogBuy", id.toString(), this);
  }

  static load(id: string): LogBuy | null {
    return store.get("LogBuy", id) as LogBuy | null;
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
}

export class LogSell extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogSell entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogSell entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogSell", id.toString(), this);
  }

  static load(id: string): LogSell | null {
    return store.get("LogSell", id) as LogSell | null;
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
}

export class LogTrade extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogTrade entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogTrade entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogTrade", id.toString(), this);
  }

  static load(id: string): LogTrade | null {
    return store.get("LogTrade", id) as LogTrade | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get takerAccountOwner(): Bytes {
    let value = this.get("takerAccountOwner");
    return value.toBytes();
  }

  set takerAccountOwner(value: Bytes) {
    this.set("takerAccountOwner", Value.fromBytes(value));
  }

  get takerAccountNumber(): BigInt {
    let value = this.get("takerAccountNumber");
    return value.toBigInt();
  }

  set takerAccountNumber(value: BigInt) {
    this.set("takerAccountNumber", Value.fromBigInt(value));
  }

  get makerAccountOwner(): Bytes {
    let value = this.get("makerAccountOwner");
    return value.toBytes();
  }

  set makerAccountOwner(value: Bytes) {
    this.set("makerAccountOwner", Value.fromBytes(value));
  }

  get makerAccountNumber(): BigInt {
    let value = this.get("makerAccountNumber");
    return value.toBigInt();
  }

  set makerAccountNumber(value: BigInt) {
    this.set("makerAccountNumber", Value.fromBigInt(value));
  }

  get inputMarket(): BigInt {
    let value = this.get("inputMarket");
    return value.toBigInt();
  }

  set inputMarket(value: BigInt) {
    this.set("inputMarket", Value.fromBigInt(value));
  }

  get outputMarket(): BigInt {
    let value = this.get("outputMarket");
    return value.toBigInt();
  }

  set outputMarket(value: BigInt) {
    this.set("outputMarket", Value.fromBigInt(value));
  }

  get takerInputUpdate_deltaWei_sign(): boolean {
    let value = this.get("takerInputUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set takerInputUpdate_deltaWei_sign(value: boolean) {
    this.set("takerInputUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get takerInputUpdate_deltaWei_value(): BigInt {
    let value = this.get("takerInputUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set takerInputUpdate_deltaWei_value(value: BigInt) {
    this.set("takerInputUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get takerInputUpdate_newPar_sign(): boolean {
    let value = this.get("takerInputUpdate_newPar_sign");
    return value.toBoolean();
  }

  set takerInputUpdate_newPar_sign(value: boolean) {
    this.set("takerInputUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get takerInputUpdate_newPar_value(): BigInt {
    let value = this.get("takerInputUpdate_newPar_value");
    return value.toBigInt();
  }

  set takerInputUpdate_newPar_value(value: BigInt) {
    this.set("takerInputUpdate_newPar_value", Value.fromBigInt(value));
  }

  get takerOutputUpdate_deltaWei_sign(): boolean {
    let value = this.get("takerOutputUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set takerOutputUpdate_deltaWei_sign(value: boolean) {
    this.set("takerOutputUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get takerOutputUpdate_deltaWei_value(): BigInt {
    let value = this.get("takerOutputUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set takerOutputUpdate_deltaWei_value(value: BigInt) {
    this.set("takerOutputUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get takerOutputUpdate_newPar_sign(): boolean {
    let value = this.get("takerOutputUpdate_newPar_sign");
    return value.toBoolean();
  }

  set takerOutputUpdate_newPar_sign(value: boolean) {
    this.set("takerOutputUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get takerOutputUpdate_newPar_value(): BigInt {
    let value = this.get("takerOutputUpdate_newPar_value");
    return value.toBigInt();
  }

  set takerOutputUpdate_newPar_value(value: BigInt) {
    this.set("takerOutputUpdate_newPar_value", Value.fromBigInt(value));
  }

  get makerInputUpdate_deltaWei_sign(): boolean {
    let value = this.get("makerInputUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set makerInputUpdate_deltaWei_sign(value: boolean) {
    this.set("makerInputUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get makerInputUpdate_deltaWei_value(): BigInt {
    let value = this.get("makerInputUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set makerInputUpdate_deltaWei_value(value: BigInt) {
    this.set("makerInputUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get makerInputUpdate_newPar_sign(): boolean {
    let value = this.get("makerInputUpdate_newPar_sign");
    return value.toBoolean();
  }

  set makerInputUpdate_newPar_sign(value: boolean) {
    this.set("makerInputUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get makerInputUpdate_newPar_value(): BigInt {
    let value = this.get("makerInputUpdate_newPar_value");
    return value.toBigInt();
  }

  set makerInputUpdate_newPar_value(value: BigInt) {
    this.set("makerInputUpdate_newPar_value", Value.fromBigInt(value));
  }

  get makerOutputUpdate_deltaWei_sign(): boolean {
    let value = this.get("makerOutputUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set makerOutputUpdate_deltaWei_sign(value: boolean) {
    this.set("makerOutputUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get makerOutputUpdate_deltaWei_value(): BigInt {
    let value = this.get("makerOutputUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set makerOutputUpdate_deltaWei_value(value: BigInt) {
    this.set("makerOutputUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get makerOutputUpdate_newPar_sign(): boolean {
    let value = this.get("makerOutputUpdate_newPar_sign");
    return value.toBoolean();
  }

  set makerOutputUpdate_newPar_sign(value: boolean) {
    this.set("makerOutputUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get makerOutputUpdate_newPar_value(): BigInt {
    let value = this.get("makerOutputUpdate_newPar_value");
    return value.toBigInt();
  }

  set makerOutputUpdate_newPar_value(value: BigInt) {
    this.set("makerOutputUpdate_newPar_value", Value.fromBigInt(value));
  }

  get autoTrader(): Bytes {
    let value = this.get("autoTrader");
    return value.toBytes();
  }

  set autoTrader(value: Bytes) {
    this.set("autoTrader", Value.fromBytes(value));
  }
}

export class LogCall extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogCall entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogCall entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogCall", id.toString(), this);
  }

  static load(id: string): LogCall | null {
    return store.get("LogCall", id) as LogCall | null;
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

  get callee(): Bytes {
    let value = this.get("callee");
    return value.toBytes();
  }

  set callee(value: Bytes) {
    this.set("callee", Value.fromBytes(value));
  }
}

export class LogLiquidate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogLiquidate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogLiquidate entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogLiquidate", id.toString(), this);
  }

  static load(id: string): LogLiquidate | null {
    return store.get("LogLiquidate", id) as LogLiquidate | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get solidAccountOwner(): Bytes {
    let value = this.get("solidAccountOwner");
    return value.toBytes();
  }

  set solidAccountOwner(value: Bytes) {
    this.set("solidAccountOwner", Value.fromBytes(value));
  }

  get solidAccountNumber(): BigInt {
    let value = this.get("solidAccountNumber");
    return value.toBigInt();
  }

  set solidAccountNumber(value: BigInt) {
    this.set("solidAccountNumber", Value.fromBigInt(value));
  }

  get liquidAccountOwner(): Bytes {
    let value = this.get("liquidAccountOwner");
    return value.toBytes();
  }

  set liquidAccountOwner(value: Bytes) {
    this.set("liquidAccountOwner", Value.fromBytes(value));
  }

  get liquidAccountNumber(): BigInt {
    let value = this.get("liquidAccountNumber");
    return value.toBigInt();
  }

  set liquidAccountNumber(value: BigInt) {
    this.set("liquidAccountNumber", Value.fromBigInt(value));
  }

  get heldMarket(): BigInt {
    let value = this.get("heldMarket");
    return value.toBigInt();
  }

  set heldMarket(value: BigInt) {
    this.set("heldMarket", Value.fromBigInt(value));
  }

  get owedMarket(): BigInt {
    let value = this.get("owedMarket");
    return value.toBigInt();
  }

  set owedMarket(value: BigInt) {
    this.set("owedMarket", Value.fromBigInt(value));
  }

  get solidHeldUpdate_deltaWei_sign(): boolean {
    let value = this.get("solidHeldUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set solidHeldUpdate_deltaWei_sign(value: boolean) {
    this.set("solidHeldUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get solidHeldUpdate_deltaWei_value(): BigInt {
    let value = this.get("solidHeldUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set solidHeldUpdate_deltaWei_value(value: BigInt) {
    this.set("solidHeldUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get solidHeldUpdate_newPar_sign(): boolean {
    let value = this.get("solidHeldUpdate_newPar_sign");
    return value.toBoolean();
  }

  set solidHeldUpdate_newPar_sign(value: boolean) {
    this.set("solidHeldUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get solidHeldUpdate_newPar_value(): BigInt {
    let value = this.get("solidHeldUpdate_newPar_value");
    return value.toBigInt();
  }

  set solidHeldUpdate_newPar_value(value: BigInt) {
    this.set("solidHeldUpdate_newPar_value", Value.fromBigInt(value));
  }

  get solidOwedUpdate_deltaWei_sign(): boolean {
    let value = this.get("solidOwedUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set solidOwedUpdate_deltaWei_sign(value: boolean) {
    this.set("solidOwedUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get solidOwedUpdate_deltaWei_value(): BigInt {
    let value = this.get("solidOwedUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set solidOwedUpdate_deltaWei_value(value: BigInt) {
    this.set("solidOwedUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get solidOwedUpdate_newPar_sign(): boolean {
    let value = this.get("solidOwedUpdate_newPar_sign");
    return value.toBoolean();
  }

  set solidOwedUpdate_newPar_sign(value: boolean) {
    this.set("solidOwedUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get solidOwedUpdate_newPar_value(): BigInt {
    let value = this.get("solidOwedUpdate_newPar_value");
    return value.toBigInt();
  }

  set solidOwedUpdate_newPar_value(value: BigInt) {
    this.set("solidOwedUpdate_newPar_value", Value.fromBigInt(value));
  }

  get liquidHeldUpdate_deltaWei_sign(): boolean {
    let value = this.get("liquidHeldUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set liquidHeldUpdate_deltaWei_sign(value: boolean) {
    this.set("liquidHeldUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get liquidHeldUpdate_deltaWei_value(): BigInt {
    let value = this.get("liquidHeldUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set liquidHeldUpdate_deltaWei_value(value: BigInt) {
    this.set("liquidHeldUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get liquidHeldUpdate_newPar_sign(): boolean {
    let value = this.get("liquidHeldUpdate_newPar_sign");
    return value.toBoolean();
  }

  set liquidHeldUpdate_newPar_sign(value: boolean) {
    this.set("liquidHeldUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get liquidHeldUpdate_newPar_value(): BigInt {
    let value = this.get("liquidHeldUpdate_newPar_value");
    return value.toBigInt();
  }

  set liquidHeldUpdate_newPar_value(value: BigInt) {
    this.set("liquidHeldUpdate_newPar_value", Value.fromBigInt(value));
  }

  get liquidOwedUpdate_deltaWei_sign(): boolean {
    let value = this.get("liquidOwedUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set liquidOwedUpdate_deltaWei_sign(value: boolean) {
    this.set("liquidOwedUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get liquidOwedUpdate_deltaWei_value(): BigInt {
    let value = this.get("liquidOwedUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set liquidOwedUpdate_deltaWei_value(value: BigInt) {
    this.set("liquidOwedUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get liquidOwedUpdate_newPar_sign(): boolean {
    let value = this.get("liquidOwedUpdate_newPar_sign");
    return value.toBoolean();
  }

  set liquidOwedUpdate_newPar_sign(value: boolean) {
    this.set("liquidOwedUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get liquidOwedUpdate_newPar_value(): BigInt {
    let value = this.get("liquidOwedUpdate_newPar_value");
    return value.toBigInt();
  }

  set liquidOwedUpdate_newPar_value(value: BigInt) {
    this.set("liquidOwedUpdate_newPar_value", Value.fromBigInt(value));
  }
}

export class LogVaporize extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogVaporize entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogVaporize entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogVaporize", id.toString(), this);
  }

  static load(id: string): LogVaporize | null {
    return store.get("LogVaporize", id) as LogVaporize | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get solidAccountOwner(): Bytes {
    let value = this.get("solidAccountOwner");
    return value.toBytes();
  }

  set solidAccountOwner(value: Bytes) {
    this.set("solidAccountOwner", Value.fromBytes(value));
  }

  get solidAccountNumber(): BigInt {
    let value = this.get("solidAccountNumber");
    return value.toBigInt();
  }

  set solidAccountNumber(value: BigInt) {
    this.set("solidAccountNumber", Value.fromBigInt(value));
  }

  get vaporAccountOwner(): Bytes {
    let value = this.get("vaporAccountOwner");
    return value.toBytes();
  }

  set vaporAccountOwner(value: Bytes) {
    this.set("vaporAccountOwner", Value.fromBytes(value));
  }

  get vaporAccountNumber(): BigInt {
    let value = this.get("vaporAccountNumber");
    return value.toBigInt();
  }

  set vaporAccountNumber(value: BigInt) {
    this.set("vaporAccountNumber", Value.fromBigInt(value));
  }

  get heldMarket(): BigInt {
    let value = this.get("heldMarket");
    return value.toBigInt();
  }

  set heldMarket(value: BigInt) {
    this.set("heldMarket", Value.fromBigInt(value));
  }

  get owedMarket(): BigInt {
    let value = this.get("owedMarket");
    return value.toBigInt();
  }

  set owedMarket(value: BigInt) {
    this.set("owedMarket", Value.fromBigInt(value));
  }

  get solidHeldUpdate_deltaWei_sign(): boolean {
    let value = this.get("solidHeldUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set solidHeldUpdate_deltaWei_sign(value: boolean) {
    this.set("solidHeldUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get solidHeldUpdate_deltaWei_value(): BigInt {
    let value = this.get("solidHeldUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set solidHeldUpdate_deltaWei_value(value: BigInt) {
    this.set("solidHeldUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get solidHeldUpdate_newPar_sign(): boolean {
    let value = this.get("solidHeldUpdate_newPar_sign");
    return value.toBoolean();
  }

  set solidHeldUpdate_newPar_sign(value: boolean) {
    this.set("solidHeldUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get solidHeldUpdate_newPar_value(): BigInt {
    let value = this.get("solidHeldUpdate_newPar_value");
    return value.toBigInt();
  }

  set solidHeldUpdate_newPar_value(value: BigInt) {
    this.set("solidHeldUpdate_newPar_value", Value.fromBigInt(value));
  }

  get solidOwedUpdate_deltaWei_sign(): boolean {
    let value = this.get("solidOwedUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set solidOwedUpdate_deltaWei_sign(value: boolean) {
    this.set("solidOwedUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get solidOwedUpdate_deltaWei_value(): BigInt {
    let value = this.get("solidOwedUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set solidOwedUpdate_deltaWei_value(value: BigInt) {
    this.set("solidOwedUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get solidOwedUpdate_newPar_sign(): boolean {
    let value = this.get("solidOwedUpdate_newPar_sign");
    return value.toBoolean();
  }

  set solidOwedUpdate_newPar_sign(value: boolean) {
    this.set("solidOwedUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get solidOwedUpdate_newPar_value(): BigInt {
    let value = this.get("solidOwedUpdate_newPar_value");
    return value.toBigInt();
  }

  set solidOwedUpdate_newPar_value(value: BigInt) {
    this.set("solidOwedUpdate_newPar_value", Value.fromBigInt(value));
  }

  get vaporOwedUpdate_deltaWei_sign(): boolean {
    let value = this.get("vaporOwedUpdate_deltaWei_sign");
    return value.toBoolean();
  }

  set vaporOwedUpdate_deltaWei_sign(value: boolean) {
    this.set("vaporOwedUpdate_deltaWei_sign", Value.fromBoolean(value));
  }

  get vaporOwedUpdate_deltaWei_value(): BigInt {
    let value = this.get("vaporOwedUpdate_deltaWei_value");
    return value.toBigInt();
  }

  set vaporOwedUpdate_deltaWei_value(value: BigInt) {
    this.set("vaporOwedUpdate_deltaWei_value", Value.fromBigInt(value));
  }

  get vaporOwedUpdate_newPar_sign(): boolean {
    let value = this.get("vaporOwedUpdate_newPar_sign");
    return value.toBoolean();
  }

  set vaporOwedUpdate_newPar_sign(value: boolean) {
    this.set("vaporOwedUpdate_newPar_sign", Value.fromBoolean(value));
  }

  get vaporOwedUpdate_newPar_value(): BigInt {
    let value = this.get("vaporOwedUpdate_newPar_value");
    return value.toBigInt();
  }

  set vaporOwedUpdate_newPar_value(value: BigInt) {
    this.set("vaporOwedUpdate_newPar_value", Value.fromBigInt(value));
  }
}

export class LogWithdrawExcessTokens extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save LogWithdrawExcessTokens entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogWithdrawExcessTokens entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogWithdrawExcessTokens", id.toString(), this);
  }

  static load(id: string): LogWithdrawExcessTokens | null {
    return store.get(
      "LogWithdrawExcessTokens",
      id
    ) as LogWithdrawExcessTokens | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class LogAddMarket extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogAddMarket entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogAddMarket entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogAddMarket", id.toString(), this);
  }

  static load(id: string): LogAddMarket | null {
    return store.get("LogAddMarket", id) as LogAddMarket | null;
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

export class LogSetIsClosing extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogSetIsClosing entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogSetIsClosing entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogSetIsClosing", id.toString(), this);
  }

  static load(id: string): LogSetIsClosing | null {
    return store.get("LogSetIsClosing", id) as LogSetIsClosing | null;
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

  get isClosing(): boolean {
    let value = this.get("isClosing");
    return value.toBoolean();
  }

  set isClosing(value: boolean) {
    this.set("isClosing", Value.fromBoolean(value));
  }
}

export class LogSetPriceOracle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogSetPriceOracle entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogSetPriceOracle entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogSetPriceOracle", id.toString(), this);
  }

  static load(id: string): LogSetPriceOracle | null {
    return store.get("LogSetPriceOracle", id) as LogSetPriceOracle | null;
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

  get priceOracle(): Bytes {
    let value = this.get("priceOracle");
    return value.toBytes();
  }

  set priceOracle(value: Bytes) {
    this.set("priceOracle", Value.fromBytes(value));
  }
}

export class LogSetInterestSetter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save LogSetInterestSetter entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogSetInterestSetter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogSetInterestSetter", id.toString(), this);
  }

  static load(id: string): LogSetInterestSetter | null {
    return store.get("LogSetInterestSetter", id) as LogSetInterestSetter | null;
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

  get interestSetter(): Bytes {
    let value = this.get("interestSetter");
    return value.toBytes();
  }

  set interestSetter(value: Bytes) {
    this.set("interestSetter", Value.fromBytes(value));
  }
}

export class LogSetMarginPremium extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogSetMarginPremium entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogSetMarginPremium entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogSetMarginPremium", id.toString(), this);
  }

  static load(id: string): LogSetMarginPremium | null {
    return store.get("LogSetMarginPremium", id) as LogSetMarginPremium | null;
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

  get marginPremium_value(): BigInt {
    let value = this.get("marginPremium_value");
    return value.toBigInt();
  }

  set marginPremium_value(value: BigInt) {
    this.set("marginPremium_value", Value.fromBigInt(value));
  }
}

export class LogSetSpreadPremium extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogSetSpreadPremium entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogSetSpreadPremium entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogSetSpreadPremium", id.toString(), this);
  }

  static load(id: string): LogSetSpreadPremium | null {
    return store.get("LogSetSpreadPremium", id) as LogSetSpreadPremium | null;
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

  get spreadPremium_value(): BigInt {
    let value = this.get("spreadPremium_value");
    return value.toBigInt();
  }

  set spreadPremium_value(value: BigInt) {
    this.set("spreadPremium_value", Value.fromBigInt(value));
  }
}

export class LogSetMarginRatio extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogSetMarginRatio entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogSetMarginRatio entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogSetMarginRatio", id.toString(), this);
  }

  static load(id: string): LogSetMarginRatio | null {
    return store.get("LogSetMarginRatio", id) as LogSetMarginRatio | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get marginRatio_value(): BigInt {
    let value = this.get("marginRatio_value");
    return value.toBigInt();
  }

  set marginRatio_value(value: BigInt) {
    this.set("marginRatio_value", Value.fromBigInt(value));
  }
}

export class LogSetLiquidationSpread extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save LogSetLiquidationSpread entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogSetLiquidationSpread entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogSetLiquidationSpread", id.toString(), this);
  }

  static load(id: string): LogSetLiquidationSpread | null {
    return store.get(
      "LogSetLiquidationSpread",
      id
    ) as LogSetLiquidationSpread | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get liquidationSpread_value(): BigInt {
    let value = this.get("liquidationSpread_value");
    return value.toBigInt();
  }

  set liquidationSpread_value(value: BigInt) {
    this.set("liquidationSpread_value", Value.fromBigInt(value));
  }
}

export class LogSetEarningsRate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogSetEarningsRate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogSetEarningsRate entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogSetEarningsRate", id.toString(), this);
  }

  static load(id: string): LogSetEarningsRate | null {
    return store.get("LogSetEarningsRate", id) as LogSetEarningsRate | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get earningsRate_value(): BigInt {
    let value = this.get("earningsRate_value");
    return value.toBigInt();
  }

  set earningsRate_value(value: BigInt) {
    this.set("earningsRate_value", Value.fromBigInt(value));
  }
}

export class LogSetMinBorrowedValue extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save LogSetMinBorrowedValue entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogSetMinBorrowedValue entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogSetMinBorrowedValue", id.toString(), this);
  }

  static load(id: string): LogSetMinBorrowedValue | null {
    return store.get(
      "LogSetMinBorrowedValue",
      id
    ) as LogSetMinBorrowedValue | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get minBorrowedValue_value(): BigInt {
    let value = this.get("minBorrowedValue_value");
    return value.toBigInt();
  }

  set minBorrowedValue_value(value: BigInt) {
    this.set("minBorrowedValue_value", Value.fromBigInt(value));
  }
}

export class LogSetGlobalOperator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save LogSetGlobalOperator entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogSetGlobalOperator entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogSetGlobalOperator", id.toString(), this);
  }

  static load(id: string): LogSetGlobalOperator | null {
    return store.get("LogSetGlobalOperator", id) as LogSetGlobalOperator | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get approved(): boolean {
    let value = this.get("approved");
    return value.toBoolean();
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }
}

export class LogOperatorSet1 extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogOperatorSet1 entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogOperatorSet1 entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogOperatorSet1", id.toString(), this);
  }

  static load(id: string): LogOperatorSet1 | null {
    return store.get("LogOperatorSet1", id) as LogOperatorSet1 | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get trusted(): boolean {
    let value = this.get("trusted");
    return value.toBoolean();
  }

  set trusted(value: boolean) {
    this.set("trusted", Value.fromBoolean(value));
  }
}
