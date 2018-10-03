"use strict"

const BCNS = require("../../lib/BCNS").default
const bcns = new BCNS({
  restURL: `https://bcns-api.portal.network/v1/`
})

async function getResolutionMultihash() {
  try {
    const resolutionMultihash = await bcns.DataRetrieval.resolutionMultihash("portal")

    console.log(``)
    console.log(`BCNS resolution multihash:`)
    console.log(JSON.stringify(resolutionMultihash, null, 2))
  } catch (err) {
    console.error(`Error in getResolutionMultihash: `, err)
    throw err
  }
}

getResolutionMultihash()
