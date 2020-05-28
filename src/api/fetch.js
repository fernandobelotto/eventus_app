// const URL_BASE = 'http://192.168.0.102:3000'
const URL_BASE = 'https://desafio-mb-api.herokuapp.com'

export default function eventusFetch(url, options) {
  const defaultHeader = { headers: { 'Content-Type': 'application/json' } }

  options = { ...defaultHeader, ...options }
  const fetchUrl = URL_BASE + url
  return fetch(fetchUrl, options)
    .then(async response => {
      const result = (
        {
          error: !response.ok,
          data: options.headers['Content-Type'] === 'application/json' ? await response.json() : await response.text(),
          response,
          request: { url, options }
        })
      return result
    })
}

export function getApi(url) {
  const options = {
    method: 'GET'
  }

  return eventusFetch(url, options)
    .then(({ data }) => {
      return data
    })
    .catch(error => {
      return error
    })
}

export function postApi(url, bodyData) {
  const options = {
    method: 'POST',
    body: JSON.stringify(bodyData)
  }

  return eventusFetch(url, options)
    .then(({ data }) => {
      return data
    })
    .catch(error => {
      return error
    })
}
