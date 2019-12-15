import {getCookie} from './cookie'
import {bodyType, config, context, fetchBaseType} from './types'

const decodeResponse = (response, handler): Promise<any> => {
  return response.json().then(handler).catch(() => {
    return response.formData().then(handler).catch(() => {
      return response.text().then(handler).catch(() => {
        return Promise.resolve(undefined).then(handler)
      })
    })
  })
}

const handleResponse = (response: any): any => {
  if (!response.ok) {
    return decodeResponse(response, decoded => {
      throw decoded
    })
  }
  return decodeResponse(response, decoded => decoded)
}

const eval_ = (f: string | (() => string)): string => {
  if (typeof f === 'function') {
    return f()
  }
  return f
}

export const fetchBaseBody = (url: string, body: bodyType, context: context = {}, config: config = {}): Promise<any> => {
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

export const fetchBase: fetchBaseType = (url: string, context: context, config: config = {}): Promise<any> => {
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
    .then(handleResponse)
}
