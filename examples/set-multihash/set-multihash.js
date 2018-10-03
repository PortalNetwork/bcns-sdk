"use strict"

const BCNS = require("../../lib/BCNS").default
const bcns = new BCNS({
  restURL: `https://bcns-api.portal.network/v1/`
})

async function SetMultihash() {
  try {
    const result = await bcns.DataWrite.multihash("portalnetwork", "QmSpuwejUGjREmgsvm8eq3ZdsS7mVTHCRPZmLiUq84S9x8", "sean@portal.network")

    console.log(``)
    console.log(`Set multihash to BCNS domain :`)
    console.log(JSON.stringify(result, null, 2))
  } catch (err) {
    console.error(`Error in SetMultihash: `, err)
    throw err
  }
}

SetMultihash()
