import instance from './instance'

export default {
  get (url: string, config?) {
    return instance.get(url, config)
  },
  post (url: string, payload?, config?) {
    return instance.post(url, payload, config)
  },
  delete () {

  },
  put () {

  },
  patch () {

  }
}
