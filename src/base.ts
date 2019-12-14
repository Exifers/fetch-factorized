import {getCookie} from './cookie'
import {bodyType, config, context, fetchBaseType, json} from './types'

const handleErrors = (response: any): any => {
  if (!response.ok) {
    return response.json().then(json => {
      throw json
    })
  }
  return response
}

const eval_ = (f: string | (() => string)): string => {
  if (typeof f === 'function') {
    return f()
  }
  return f
}

export const fetchBaseBody = (url: string, body: bodyType, context: context = {}, config: config = {}): Promise<json> => {
  let adaptedBody = body
  if (body instanceof FormData) {
    adaptedBody = body
    config.insertContentType = false
  } else if (body instanceof Object) {
    adaptedBody = JSON.stringify(body)
    config.contentTypeHeaderValue = 'application/json'
  }
  return (config.customFetchBase || fetchBase)(
    url,
    {
      ...context,
      body: adaptedBody
    },
    config
  )
}

export const fetchBase: fetchBaseType = (url: string, context: context, config: config = {}): Promise<json> => {
  context.headers = context.headers || {}

  if (config.insertContentType) {
    context.headers['Content-Type'] = config.contentTypeHeaderValue || 'application/json'
  }

  if (config.insertCsrfToken) {
    context.headers[config.csrfHeaderName || 'X-CSRFToken'] = config.csrfHeaderValue
      ? eval_(config.csrfHeaderValue)
      : getCookie(config.csrfCookieName || 'csrftoken')
  }

  return (config.customFetch || fetch)(url, context)
    .then(handleErrors)
    .then(response => response.json())
}
