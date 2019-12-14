import { bodyType, config, context, fetchBaseType, json } from './types';
export declare const fetchBaseBody: (url: string, body: bodyType, context?: context, config?: config) => Promise<json>;
export declare const fetchBase: fetchBaseType;
