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

  get borrowIndex(): BigInt | null {
    let value = this.get("borrowIndex");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set borrowIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("borrowIndex");
    } else {
      this.set("borrowIndex", Value.fromBigInt(value as BigInt));
    }
  }

  get supplyIndex(): BigInt | null {
    let value = this.get("supplyIndex");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set supplyIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("supplyIndex");
    } else {
      this.set("supplyIndex", Value.fromBigInt(value as BigInt));
    }
  }

  get lastIndexUpdate(): BigInt | null {
    let value = this.get("lastIndexUpdate");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lastIndexUpdate(value: BigInt | null) {
    if (value === null) {
      this.unset("lastIndexUpdate");
    } else {
      this.set("lastIndexUpdate", Value.fromBigInt(value as BigInt));
    }
  }

  get borrowed(): BigInt | null {
    let value = this.get("borrowed");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set borrowed(value: BigInt | null) {
    if (value === null) {
      this.unset("borrowed");
    } else {
      this.set("borrowed", Value.fromBigInt(value as BigInt));
    }
  }

  get supplied(): BigInt | null {
    let value = this.get("supplied");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set supplied(value: BigInt | null) {
    if (value === null) {
      this.unset("supplied");
    } else {
      this.set("supplied", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Long extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Long entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Long entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Long", id.toString(), this);
  }

  static load(id: string): Long | null {
    return store.get("Long", id) as Long | null;
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

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get marginDeposit(): BigInt {
    let value = this.get("marginDeposit");
    return value.toBigInt();
  }

  set marginDeposit(value: BigInt) {
    this.set("marginDeposit", Value.fromBigInt(value));
  }

  get leverage(): BigDecimal | null {
    let value = this.get("leverage");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set leverage(value: BigDecimal | null) {
    if (value === null) {
      this.unset("leverage");
    } else {
      this.set("leverage", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get expires(): BigInt | null {
    let value = this.get("expires");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set expires(value: BigInt | null) {
    if (value === null) {
      this.unset("expires");
    } else {
      this.set("expires", Value.fromBigInt(value as BigInt));
    }
  }

  get openPrice(): BigDecimal | null {
    let value = this.get("openPrice");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set openPrice(value: BigDecimal | null) {
    if (value === null) {
      this.unset("openPrice");
    } else {
      this.set("openPrice", Value.fromBigDecimal(value as BigDecimal));
    }
  }
}

export class Short extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Short entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Short entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Short", id.toString(), this);
  }

  static load(id: string): Short | null {
    return store.get("Short", id) as Short | null;
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

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get leverage(): BigDecimal | null {
    let value = this.get("leverage");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set leverage(value: BigDecimal | null) {
    if (value === null) {
      this.unset("leverage");
    } else {
      this.set("leverage", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get expires(): BigInt | null {
    let value = this.get("expires");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set expires(value: BigInt | null) {
    if (value === null) {
      this.unset("expires");
    } else {
      this.set("expires", Value.fromBigInt(value as BigInt));
    }
  }

  get openPrice(): BigDecimal | null {
    let value = this.get("openPrice");
    if (value === null) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set openPrice(value: BigDecimal | null) {
    if (value === null) {
      this.unset("openPrice");
    } else {
      this.set("openPrice", Value.fromBigDecimal(value as BigDecimal));
    }
  }
}
