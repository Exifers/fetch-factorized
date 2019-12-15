export interface config {
  insertContentType?: boolean
  contentTypeHeaderValue?: string
  customFetchBase?: fetchBaseType
  insertCsrfToken? : boolean
  csrfHeaderName?: string
  csrfHeaderValue?: string | (() => string),
  csrfCookieName?: string
  customFetch?: (string, object) => Promise<Object>
}

export type context = {[key:string]: any}

export type json = {[key:string]: json} | json[] | string | number | boolean | null

export type bodyType = json | FormData

export type fetchBaseType = (url: string, context: context, config:config) => Promise<any>
