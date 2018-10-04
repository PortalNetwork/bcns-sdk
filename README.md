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
    const register = await bcns.DataWrite.address("portalnetwork", "bchtest:qzfklzftxegmm48cms8ha99dem3mz0gheysqgfvuex", "sean@portal.network")
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
    const register = await bcns.DataWrite.multihash("portalnetwork", "QmSpuwejUGjREmgsvm8eq3ZdsS7mVTHCRPZmLiUq84S9x8", "sean@portal.network")
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

## PayloadCreation

### Register
Return the payload of register.

#### Example
```javascript
(async () => {
  try {
    const register = await bcns.PayloadCreation.register("bitcoincash", "bchtest:qzfklzftxegmm48cms8ha99dem3mz0gheysqgfvuex")
    console.log(register);
  } catch (error) {
    console.error(error)
  }
})()
```

#### Result
```javascript
"000001f4626974636f696e6361736800626368746573743a7171326a3967703937676d3961366c7776687863347a7532387176716d3078346a356537327637656a6700"
```

### SetAddress
Return the payload of set address.

#### Example
```javascript
(async () => {
  try {
    const register = await bcns.PayloadCreation.address("bitcoincash", "bchtest:qzfklzftxegmm48cms8ha99dem3mz0gheysqgfvuex")
    console.log(register);
  } catch (error) {
    console.error(error)
  }
})()
```

#### Result
```javascript
"00000212706f7274616c6e6574776f726b00626368746573743a717a666b6c7a66747865676d6d3438636d73386861393964656d336d7a3067686579737167667675657800"
```

### SetMultihash
Return the payload of set multihash.

#### Example
```javascript
(async () => {
  try {
    const register = await bcns.PayloadCreation.multihash("bitcoincash", "QmSpuwejUGjREmgsvm8eq3ZdsS7mVTHCRPZmLiUq84S9x8")
    console.log(register);
  } catch (error) {
    console.error(error)
  }
})()
```

#### Result
```javascript
"00000213626974636f696e6361736800516d53707577656a55476a52456d6773766d386571335a647353376d5654484352505a6d4c69557138345339783800"
```