import { Request } from "express";
import CalculateDelivery, { InputCalculateDelivery } from "../../application/CalculateDelivery";
import Checkout, { InputCheckout } from "../../application/Checkout";
import GetOrderByCpf from "../../application/GetOrderByCpf";
import HttpServer from "../http/HttpServer";

type RequestCheckout = Request<any, any, InputCheckout>;
type RequestOrder = Request<any, any, any, { cpf: string }>;
type RequestDelivery = Request<any, any, InputCalculateDelivery>;

export default class OrderController {
    
    constructor(
        readonly httpServer: HttpServer,
        readonly checkout: Checkout,
        readonly getOrderByCpf: GetOrderByCpf,
        readonly calculateDelivery: CalculateDelivery
    ) {
        httpServer.on<RequestCheckout>('post', '/checkout', async function(request) {
            await checkout.execute(request.body);

            return {};
        })

        httpServer.on<RequestOrder>('get', '/orders', async function(request) {
            const orders = await getOrderByCpf.execute(request.query.cpf);

            return { orders };
        })

        httpServer.on<RequestDelivery>('get', '/delivery', async function(request) {
            const orders = await calculateDelivery.execute(request.body);

            return { orders };
        })
    }
}