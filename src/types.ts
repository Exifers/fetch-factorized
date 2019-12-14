export interface config {
  insertContentType?: boolean
  contentTypeHeaderValue?: string
  customFetchBase?: fetchBaseType
  insertCsrfToken? : boolean
  csrfHeaderName?: string
  csrfHeaderValue?: string | (() => string),
  csrfCookieName?: string
  customFetch?: (string, object) => Promise<Json>
}

export type Object = {[key:string]: any}

export type Json = {[key:string]: Json} | Json[] | string | number | boolean | null; 

export type fetchBaseType = (url: string, context: Object, config:config) => Promise<Json>
