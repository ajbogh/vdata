import defaults from 'lodash/defaults'
import fetchWrapper from './fetchWrapper'
import map from 'lodash/map'
import pick from 'lodash/pick'
import stringify from 'json-stable-stringify'
import sum from 'lodash/sum'
import toQueryString from './toQueryString'

const withDefaults = (options) => pick(defaults({}, options, {
  credentials: 'same-origin'
}), ['headers', 'body', 'method', 'credentials'])

const makeKey = (url, request) => {
  const headers = Object.entries(request.headers || {}).map(([key, val]) => `${key}:${val}`)
  const values = map(`${headers}${request.url}`, (c) => c.codePointAt(0))
  return `${sum(values)}`
}

const createHttpAdapter = (options = {}) => {
  let promiseCache = {}
  const adapter = options.adapter || fetchWrapper
  const deserialize = options.deserialize || ((data) => data)
  const createRequest = (url, options) => {
    const request = withDefaults(options)
    return adapter(url, {...request, body: (request.body) ? stringify(request.body) : undefined})
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        } else {
          throw new Error(res)
        }
      })
      .then(deserialize)
      .catch((err) => {
        throw err
      })
  }
  return (options = {}) => {
    let url = options.url
    const force = options.force || false
    if (options.params) {
      const qs = toQueryString(options.params)
      url += `?${qs}`
    }
    if (options.method === 'GET') {
      const key = makeKey(url, options)
      let promise = promiseCache[key]
      if (!promise || force === true) {
        promise = promiseCache[key] = createRequest(url, options)
      }
      return promise
    } else {
      return createRequest(url, options)
    }
  }
}

export default createHttpAdapter
