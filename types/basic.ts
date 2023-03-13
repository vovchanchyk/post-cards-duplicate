import { Request } from "express";


export interface AppRequest<T> extends Request{
    body: T,
}

