export interface config {
    insertContentType?: boolean;
    contentTypeHeaderValue?: string;
    customFetchBase?: fetchBaseType;
    insertCsrfToken?: boolean;
    csrfHeaderName?: string;
    csrfHeaderValue?: string | (() => string);
    csrfCookieName?: string;
    customFetch?: (string: any, object: any) => Promise<Json>;
}
export declare type Object = {
    [key: string]: any;
};
export declare type Json = {
    [key: string]: Json;
} | Json[] | string | number | boolean | null;
export declare type fetchBaseType = (url: string, context: Object, config: config) => Promise<Json>;
