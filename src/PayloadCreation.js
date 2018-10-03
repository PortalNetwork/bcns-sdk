"use strict"

import axios from "axios"
class PayloadCreation {
  constructor(restURL) {
    this.restURL = restURL
  }

  async register(domain, address) {
    try {
      let response = await axios.post(
        `${this.restURL}payloadCreation/BCNS/register/${domain}/${address}`
      )
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }

  async owner(domain, address) {
    try {
      let response = await axios.post(
        `${this.restURL}payloadCreation/BCNS/owner/${domain}/${address}`
      )
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }

  async ttl(domain, ttl) {
    try {
      let response = await axios.post(
        `${this.restURL}payloadCreation/BCNS/ttl/${domain}/${ttl}`
      )
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }

  async resolutionAddress(domain, address) {
    try {
      let response = await axios.post(
        `${this.restURL}payloadCreation/BCNS/resolution/address/${domain}/${address}`
      )
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }

  async resolutionMultihash(domain, protocol, multihash) {
    try {
      let response = await axios.post(
        `${this.restURL}payloadCreation/BCNS/resolution/multihash/${domain}/${protocol}/${multihash}`
      )
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }
}

export default PayloadCreation
