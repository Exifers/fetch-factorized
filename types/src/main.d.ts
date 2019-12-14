import { json, config, bodyType } from "./types";
export declare const get: (url: string) => Promise<json>;
export declare const post: (url: string, body: bodyType) => Promise<json>;
export declare const put: (url: string, body: bodyType) => Promise<json>;
export declare const patch: (url: string, body: bodyType) => Promise<json>;
export declare const delete_: (url: string) => Promise<json>;
export declare const options: (url: string) => Promise<json>;
export declare const head: (url: string) => Promise<json>;
export declare const trace: (url: string) => Promise<json>;
export declare const configure: (config: config) => {
    [key: string]: any;
};
declare const _default: {
    get: (url: string) => Promise<json>;
    post: (url: string, body: bodyType) => Promise<json>;
    put: (url: string, body: bodyType) => Promise<json>;
    patch: (url: string, body: bodyType) => Promise<json>;
    'delete': (url: string) => Promise<json>;
    options: (url: string) => Promise<json>;
    head: (url: string) => Promise<json>;
    trace: (url: string) => Promise<json>;
    configure: (config: config) => {
        [key: string]: any;
    };
};
export default _default;
