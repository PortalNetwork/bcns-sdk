"use strict"

import axios from "axios"
class DataWrite {
  constructor(restURL) {
    this.restURL = restURL
  }

  async register(domain, address, email) {
    try {
      let response = await axios.post(
        `${this.restURL}dataWrite/BCNS/register/${domain}/${address}/${email}`
      )
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }

  async address(domain, address, email) {
    try {
      let response = await axios.post(
        `${this.restURL}dataWrite/BCNS/address/${domain}/${address}/${email}`
      )
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }

  async multihash(domain, multihash, email) {
    try {
      let response = await axios.post(
        `${this.restURL}dataWrite/BCNS/multihash/${domain}/${multihash}/${email}`
      )
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }
}

export default DataWrite
