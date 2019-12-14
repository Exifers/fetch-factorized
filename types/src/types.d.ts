export interface config {
    insertContentType?: boolean;
    contentTypeHeaderValue?: string;
    customFetchBase?: fetchBaseType;
    insertCsrfToken?: boolean;
    csrfHeaderName?: string;
    csrfHeaderValue?: string | (() => string);
    csrfCookieName?: string;
    customFetch?: (string: any, object: any) => Promise<any>;
}
export interface Object {
    [key: string]: any;
}
export declare type fetchBaseType = (url: string, context: Object, config: config) => Promise<Object>;
