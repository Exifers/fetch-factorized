export declare const get: (url: any) => Promise<import("./types").Object>;
export declare const post: (url: any, body: any) => Promise<import("./types").Object>;
export declare const put: (url: any, body: any) => Promise<import("./types").Object>;
export declare const patch: (url: any, body: any) => Promise<import("./types").Object>;
export declare const delete_: (url: any) => Promise<import("./types").Object>;
export declare const options: (url: any) => Promise<import("./types").Object>;
export declare const head: (url: any) => Promise<import("./types").Object>;
export declare const trace: (url: any) => Promise<import("./types").Object>;
export declare const configure: (config: any) => {
    get: (url: any) => Promise<import("./types").Object>;
    post: (url: any, body: any) => Promise<import("./types").Object>;
    put: (url: any, body: any) => Promise<import("./types").Object>;
    patch: (url: any, body: any) => Promise<import("./types").Object>;
    delete: (url: any) => Promise<import("./types").Object>;
    options: (url: any) => Promise<import("./types").Object>;
    head: (url: any) => Promise<import("./types").Object>;
    trace: (url: any) => Promise<import("./types").Object>;
};
declare const _default: {
    get: (url: any) => Promise<import("./types").Object>;
    post: (url: any, body: any) => Promise<import("./types").Object>;
    put: (url: any, body: any) => Promise<import("./types").Object>;
    patch: (url: any, body: any) => Promise<import("./types").Object>;
    'delete': (url: any) => Promise<import("./types").Object>;
    options: (url: any) => Promise<import("./types").Object>;
    head: (url: any) => Promise<import("./types").Object>;
    trace: (url: any) => Promise<import("./types").Object>;
    configure: (config: any) => {
        get: (url: any) => Promise<import("./types").Object>;
        post: (url: any, body: any) => Promise<import("./types").Object>;
        put: (url: any, body: any) => Promise<import("./types").Object>;
        patch: (url: any, body: any) => Promise<import("./types").Object>;
        delete: (url: any) => Promise<import("./types").Object>;
        options: (url: any) => Promise<import("./types").Object>;
        head: (url: any) => Promise<import("./types").Object>;
        trace: (url: any) => Promise<import("./types").Object>;
    };
};
export default _default;
