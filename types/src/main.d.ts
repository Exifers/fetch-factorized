import { config, bodyType } from "./types";
export declare const get: (url: string) => Promise<any>;
export declare const post: (url: string, body: bodyType) => Promise<any>;
export declare const put: (url: string, body: bodyType) => Promise<any>;
export declare const patch: (url: string, body: bodyType) => Promise<any>;
export declare const delete_: (url: string) => Promise<any>;
export declare const options: (url: string) => Promise<any>;
export declare const head: (url: string) => Promise<any>;
export declare const trace: (url: string) => Promise<any>;
export declare const configure: (config: config) => {
    [key: string]: any;
};
declare const _default: {
    get: (url: string) => Promise<any>;
    post: (url: string, body: bodyType) => Promise<any>;
    put: (url: string, body: bodyType) => Promise<any>;
    patch: (url: string, body: bodyType) => Promise<any>;
    'delete': (url: string) => Promise<any>;
    options: (url: string) => Promise<any>;
    head: (url: string) => Promise<any>;
    trace: (url: string) => Promise<any>;
    configure: (config: config) => {
        [key: string]: any;
    };
};
export default _default;
