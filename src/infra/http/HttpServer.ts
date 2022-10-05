import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

export type Methods = 'get' | 'post' | 'put' | 'delete' | 'patch';

export default interface HttpServer {
    app: core.Express;
    on(method: Methods, url: string, callback: (request: Request, response: Response) => {}): void;
}