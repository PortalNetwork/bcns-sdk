# Bitcoin Cash Name Service SDK

This repository is fork from [Wormholecash](https://github.com/Bitcoin-com/wormholecash).

## Install

```
npm install bcns --save
```

## Usage

```javascript
let BCNS = require('bcns/lib/BCNS').default;
let bcns = new BCNS({
  restURL: `https://bcns-api.portal.network/v1/`
});       
```

## DataRetrieval

### Info
Return information about BCNS

#### Example
```javascript
(async () => {
  try {
    const info = await bcns.DataRetrieval.info()
    console.log(info);
  } catch (error) {
    console.error(error)
  }
})()
```

#### Result
```json
{
  "bcnsversion_int": 1000,
  "bcnsversion": "0.0.1",
  "bitcoincoreversion": "0.17.2",
  "block": 1260146,
  "blocktime": 1538548410,
  "blocktransactions": 0,
  "totaltransactions": 1800,
  "alerts": []
}
```

### ResolutionAddress
Return resolution address for the given domain.

#### Example
```javascript
(async () => {
  try {
    const resolutionAddress = await bcns.DataRetrieval.resolutionAddress("portal")
    console.log(resolutionAddress);
  } catch (error) {
    console.error(error)
  }
})()
```

#### Result
```json
{
  "domain": "portal",
  "address": "bchtest:qzfklzftxegmm48cms8ha99dem3mz0gheysqgfvuex"
}
```

### ResolutionMultihash
Return resolution multihash for the given domain.

#### Example
```javascript
(async () => {
  try {
    const resolutionMultihash = await bcns.DataRetrieval.resolutionMultihash("portal")
    console.log(resolutionMultihash);
  } catch (error) {
    console.error(error)
  }
})()
```

#### Result
```json
{
  "domain": "portal",
  "multihash": "QmSpuwejUGjREmgsvm8eq3ZdsS7mVTHCRPZmLiUq84S9x8"
}
```

## DataWrite

### Register
Creates a transaction to register BCNS.

#### Example
```javascript
(async () => {
  try {
    const register = await bcns.DataWrite.register("portalnetwork", "bchtest:qzfklzftxegmm48cms8ha99dem3mz0gheysqgfvuex", "sean@portal.network")
    console.log(register);
  } catch (error) {
    console.error(error)
  }
})()
```

#### Result
```json
{
  "domain": "portalnetwork",
  "tx": "6d4de3ffff89d9c2ef51ee7918588e594d4c2c1487d3fd77430fb055a2a4e7e5"
}
```

### SetAddress
Creates a transaction to set address with BCNS.

#### Example
```javascript
(async () => {
  try {
    const register = await bcns.DataWrite.register("portalnetwork", "bchtest:qzfklzftxegmm48cms8ha99dem3mz0gheysqgfvuex", "sean@portal.network")
    console.log(register);
  } catch (error) {
    console.error(error)
  }
})()
```

#### Result
```json
{
  "domain": "portalnetwork",
  "tx": "d5eafc08932e550b43a9b26b0af2844b5d516e75d1d966a87a59c8e10e8aa7d9"
}
```

### SetMultihash
Creates a transaction to set multihash with BCNS.

#### Example
```javascript
(async () => {
  try {
    const register = await bcns.DataWrite.register("portalnetwork", "QmSpuwejUGjREmgsvm8eq3ZdsS7mVTHCRPZmLiUq84S9x8", "sean@portal.network")
    console.log(register);
  } catch (error) {
    console.error(error)
  }
})()
```

#### Result
```json
{
  "domain": "portalnetwork",
  "tx": "5a5619b7a08ab0e00659bae1fced9942c9f680bc722c96e1101b35fc45f1e4cf"
}
```

