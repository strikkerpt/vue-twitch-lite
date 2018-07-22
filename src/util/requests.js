// Here we can create functions that will perform requests, for now we only have a get because the project only need to perform reading requests.

import Config from '@/config/config'
import axios from 'axios'

const baseUrl = Config.twitch.baseUrl

/**
 * Function that will perform a get request
 * @param endpoint
 * @param data
 * @returns {Promise}
 */
let get = (endpoint, data) => {
  return new Promise((resolve, reject) => {
    axios.get(baseUrl + '/' + endpoint, {
      params: data
    })
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {get}
