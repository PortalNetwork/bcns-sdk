"use strict"

import axios from "axios"
class DataRetrieval {
  constructor(restURL) {
    this.restURL = restURL
  }

  async info() {
    try {
      let response = await axios.get(
        `${this.restURL}dataRetrieval/info`
      )
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }

  async resolutionAddress(domain) {
    let path = `${this.restURL}dataRetrieval/BCNS/resolution/address`
    if (domain) {
      path = `${this.restURL}dataRetrieval/BCNS/resolution/address?domain=${domain}`
    }
    try {
      let response = await axios.get(path)
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }

  async resolutionMultihash(domain) {
    let path = `${this.restURL}dataRetrieval/BCNS/resolution/multihash`
    if (domain) {
      path = `${this.restURL}dataRetrieval/BCNS/resolution/multihash?domain=${domain}`
    }
    try {
      let response = await axios.get(path)
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }
}

export default DataRetrieval
