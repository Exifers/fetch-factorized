import {fetchBase, fetchBaseBody} from './base'
import {config, bodyType} from "./types";

export const _get = (url: string, config: config): Promise<any> => (
  fetchBase(
    url,
    {
      method: 'GET'
    },
    config
  )
)
export const _post = (url: string, body: bodyType, config: config): Promise<any> => (
  fetchBaseBody(
    url,
    body,
    {
      method: 'POST'
    },
    {
      ...config,
      insertCsrfToken: true,
      insertContentType: true
    }
  )
)
export const _put = (url: string, body: bodyType, config: config): Promise<any> => (
  fetchBaseBody(
    url,
    body,
    {
      method: 'PUT'
    },
    {
      ...config,
      insertCsrfToken: true,
      insertContentType: true
    }
  )
)
export const _patch = (url: string, body: bodyType, config: config): Promise<any> => (
  fetchBaseBody(
    url,
    body,
    {
      method: 'PATCH'
    },
    {
      ...config,
      insertCsrfToken: true,
      insertContentType: true
    }
  )
)
export const _delete_ = (url: string, config: config): Promise<any> => (
  fetchBase(url,
    {
      method: 'DELETE',
    },
    {
      ...config,
      insertCsrfToken: true
    }
  )
)
export const _options = (url: string, config: config): Promise<any> => (
  fetchBase(
    url,
    {
      method: 'OPTIONS',
    },
    config
  )
)
export const _head = (url: string, config: config): Promise<any> => (
  fetchBase(url,
    {
      method: 'HEAD',
    },
    config
  )
)
export const _trace = (url: string, config: config): Promise<any> => (
  fetchBase(url,
    {
      method: 'TRACE',
    },
    config
  )
)
