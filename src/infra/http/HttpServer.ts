import { Response } from 'express';
import * as core from 'express-serve-static-core';

export type Methods = 'get' | 'post' | 'put' | 'delete' | 'patch';

export default interface HttpServer {
    app: core.Express;
    on<RequestOn>(method: Methods, url: string, callback: (request: RequestOn, response: Response) => {}): void;
}