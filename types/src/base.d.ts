import { bodyType, config, context, fetchBaseType } from './types';
export declare const fetchBaseBody: (url: string, body: bodyType, context?: context, config?: config) => Promise<any>;
export declare const fetchBase: fetchBaseType;
