export interface config {
    insertContentType?: boolean;
    contentTypeHeaderValue?: string;
    customFetchBase?: fetchBaseType;
    insertCsrfToken?: boolean;
    csrfHeaderName?: string;
    csrfHeaderValue?: string | (() => string);
    csrfCookieName?: string;
    customFetch?: (string: any, object: any) => Promise<Object>;
}
export declare type context = {
    [key: string]: any;
};
export declare type json = {
    [key: string]: json;
} | json[] | string | number | boolean | null;
export declare type bodyType = json | FormData;
export declare type fetchBaseType = (url: string, context: context, config: config) => Promise<json>;
