import { json, config, bodyType } from "./types";
export declare const _get: (url: string, config: config) => Promise<json>;
export declare const _post: (url: string, body: bodyType, config: config) => Promise<json>;
export declare const _put: (url: string, body: bodyType, config: config) => Promise<json>;
export declare const _patch: (url: string, body: bodyType, config: config) => Promise<json>;
export declare const _delete_: (url: string, config: config) => Promise<json>;
export declare const _options: (url: string, config: config) => Promise<json>;
export declare const _head: (url: string, config: config) => Promise<json>;
export declare const _trace: (url: string, config: config) => Promise<json>;
