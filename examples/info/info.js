"use strict"

const BCNS = require("../../lib/BCNS").default
const bcns = new BCNS({
  restURL: `https://bcns-api.portal.network/v1/`
})

async function getInfo() {
  try {
    // get BCNS info
    const info = await bcns.DataRetrieval.info()

    console.log(``)
    console.log(`BCNS information:`)
    console.log(JSON.stringify(info, null, 2))
  } catch (err) {
    console.error(`Error in getInfo: `, err)
    throw err
  }
}

getInfo()
