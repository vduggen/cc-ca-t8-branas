import { Request } from "express";
import Checkout, { InputCheckout } from "../../application/Checkout";
import GetOrderByCpf from "../../application/GetOrderByCpf";
import HttpServer from "../http/HttpServer";

type RequestCheckout = Request<any, any, InputCheckout>;
type RequestOrder = Request<any, any, any, { cpf: string }>;

export default class OrderController {
    
    constructor(
        readonly httpServer: HttpServer,
        readonly checkout: Checkout,
        readonly getOrderByCpf: GetOrderByCpf
    ) {
        httpServer.on<RequestCheckout>('post', '/checkout', async function(request) {
            await checkout.execute(request.body);

            return {};
        })

        httpServer.on<RequestOrder>('get', '/orders', async function(request) {
            const orders = await getOrderByCpf.execute({
                cpf: request.query.cpf
            });

            return { orders };
        })
    }
}