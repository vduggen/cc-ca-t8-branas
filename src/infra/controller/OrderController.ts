import { Request } from "express";
import Checkout, { InputCheckout } from "../../application/Checkout";
import HttpServer from "../http/HttpServer";

type RequestOn = Request<any, any, InputCheckout>;

export default class OrderController {
    
    constructor(
        readonly httpServer: HttpServer,
        readonly checkout: Checkout,
    ) {
        httpServer.on<RequestOn>('post', '/checkout', async function(request) {
            await checkout.execute(request.body);
        })
    }
}