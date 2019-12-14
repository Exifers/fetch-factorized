import {_delete_, _get, _head, _options, _patch, _post, _put, _trace} from './requests'
import {json, config, bodyType} from "./types";

/* Ensure exported methods don't take any additional parameters */
export const get = (url: string): Promise<json> => _get(url, {})
export const post = (url: string, body: bodyType): Promise<json> => _post(url, body, {})
export const put = (url: string, body: bodyType): Promise<json> => _put(url, body, {})
export const patch = (url: string, body: bodyType): Promise<json> => _patch(url, body, {})
export const delete_ = (url: string): Promise<json> => _delete_(url, {})
export const options = (url: string): Promise<json> => _options(url, {})
export const head = (url: string): Promise<json> => _head(url, {})
export const trace = (url: string): Promise<json> => _trace(url, {})

export const configure = (config: config): { [key: string]: any } => ({
  /* Inject config */
  get: (url: string): Promise<json> => _get(url, config),
  post: (url: string, body: bodyType): Promise<json> => _post(url, body, config),
  put: (url: string, body: bodyType): Promise<json> => _put(url, body, config),
  patch: (url: string, body: bodyType): Promise<json> => _patch(url, body, config),
  delete: (url: string): Promise<json> => _delete_(url, config),
  options: (url: string): Promise<json> => _options(url, config),
  head: (url: string): Promise<json> => _head(url, config),
  trace: (url: string): Promise<json> => _trace(url, config)
})

export default {
  get,
  post,
  put,
  patch,
  'delete': delete_,
  options,
  head,
  trace,

  configure
}
