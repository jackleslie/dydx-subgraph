# dydx-subgraph
[Winning submission](https://medium.com/coinlist/announcing-the-winners-of-the-graph-coinlist-hackathon-c69e40af092f) for The Graph + CoinList online hackathon.

## Overview
View your Long and Short positions on the dYdX protocol, and view basic Market information.

## Entities
The following entities are available as a part of the subgraph:

### Market
- `id` - Unique ID for a market
- `tokenAddress` - Contract address for the market token
- `tokenSymbol` - Symbol for the market token
- `borrowIndex` - Amount of borrow interest accrued
- `supplyIndex` - Amount of supply interest accrued
- `lastIndexUpdate` - Time of last index update

### Long & Short
- `id` - Unique ID for a position
- `accountOwner` - Position owner's address
- `accountNumber` - Position account number
- `takerMarketId` - ID of the taker market
- `makerMarketId` - ID of the maker market
- `market` - String representation of position market
- `exchangeWrapper` - Contract address for the dYdX exchange wrapper
- `timestamp` - Time the position was opened
- `amount` - Current position amount
- `marginDeposit` - Initial deposit amount
- `leverage` - Initial leverage
- `expires` - Time the position expires
- `openPrice` - Price the position opened at
- `status` - Can be "Open", "Closed" or "Liquidated"

## Queries
Here are some example queries:

### Display all markets
```
{
  markets {
    id
    tokenAddress
    tokenSymbol
  }
}
```

### Display long positions for given account
```
{
  longs(where: { accountOwner: "..." }) {
    id
    market
    timestamp
    amount
    marginDeposit
    leverage
    expires
    openPrice
    status
  }
}
```

### Display closed short positions for given account
```
{
  shorts(where: { accountOwner: "...", status: "Closed" }) {
    id
    market
    timestamp
    amount
    marginDeposit
    leverage
    expires
    openPrice
  }
}
```

### Display open long positions which expire on a given day
```
{
  longs(where: { expires: "...", status: "Open" }) {
    id
    market
    timestamp
    amount
    marginDeposit
    leverage
    expires
    openPrice
  }
}
```
