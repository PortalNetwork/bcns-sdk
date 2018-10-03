"use strict"
const assert = require("assert")
const BCNS = require("./../lib/BCNS").default
const bcns = new BCNS({
  restURL: "https://bcns-api.portal.network/v1/"
})

describe("#DataRetrieval", () => {
  describe("#info", () => {
    it(`should get info`, async () => {
      try {
        const info = await bcns.DataRetrieval.info()
        assert.deepEqual(Object.keys(info), [
          "bcnsversion_int",
          "bcnsversion",
          "bitcoincoreversion",
          "block",
          "blocktime",
          "blocktransactions",
          "totaltrades",
          "totaltransactions",
          "alerts"
        ])
      } catch (error) {}
    })

    it(`should fail`, async () => {
      try {
        const info = await bcns.DataRetrieval.info("fail")
      } catch (error) {
        assert.equal(error.code, -8)
        assert.equal(error.message, "JSON value is not an integer as expected")
      }
    })
  })
})
