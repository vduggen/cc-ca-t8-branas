import HttpServer, { Methods } from "./HttpServer";
import express, { Request, Response } from 'express';

export default class ExpressAdapter implements HttpServer {
    app;

    constructor() {
        this.app = express();
        this.app.use(express.json());
    }

    listen(port: number) {
        this.app.listen(port);
    }

    on(method: Methods, url: string, callback: Function): void {
        this.app[method](url, async function (request: Request, response: Response) {
            const output = await callback(request, response);
            response.json(output);
        })
    }
}