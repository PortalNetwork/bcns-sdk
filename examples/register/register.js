"use strict"

const BCNS = require("../../lib/BCNS").default
const bcns = new BCNS({
  restURL: `https://bcns-api.portal.network/v1/`
})

async function BCNSRegister() {
  try {
    // Register BCNS domain
    const result = await bcns.DataWrite.register("portalnetwork", "bchtest:qzfklzftxegmm48cms8ha99dem3mz0gheysqgfvuex", "sean@portal.network")

    console.log(``)
    console.log(`Register BCNS domain:`)
    console.log(JSON.stringify(result, null, 2))
  } catch (err) {
    console.error(`Error in BCNSRegister: `, err)
    throw err
  }
}

BCNSRegister()
