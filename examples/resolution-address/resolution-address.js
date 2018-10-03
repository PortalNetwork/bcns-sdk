"use strict"

const BCNS = require("../../lib/BCNS").default
const bcns = new BCNS({
  restURL: `https://bcns-api.portal.network/v1/`
})

async function getResolutionAddress() {
  try {
    const resolutionAddress = await bcns.DataRetrieval.resolutionAddress("portal")

    console.log(``)
    console.log(`BCNS resolution address:`)
    console.log(JSON.stringify(resolutionAddress, null, 2))
  } catch (err) {
    console.error(`Error in getResolutionAddress: `, err)
    throw err
  }
}

getResolutionAddress()
