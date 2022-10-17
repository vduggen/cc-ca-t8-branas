import { Request } from "express";
import CalculateDelivery, { InputCalculateDelivery } from "../../application/CalculateDelivery";
import Checkout, { InputCheckout } from "../../application/Checkout";
import GetListOrders from "../../application/GetListOrders";
import GetOrderByCode, { InputGetOrderByCode } from "../../application/GetOrderByCode";
import GetOrderByCpf from "../../application/GetOrderByCpf";
import ValidationCoupon, { InputValidationCoupon } from "../../application/ValidationCoupon";
import HttpServer from "../http/HttpServer";

type RequestCheckout = Request<any, any, InputCheckout>;
type RequestOrder = Request<any, any, any, { cpf: string }>;
type RequestGetOrderByCode = Request<InputGetOrderByCode>;
type RequestDelivery = Request<any, any, InputCalculateDelivery>;
type RequestCoupon = Request<any, any, any, InputValidationCoupon>;

export default class OrderController {
    
    constructor(
        readonly httpServer: HttpServer,
        readonly checkout: Checkout,
        readonly getOrderByCpf: GetOrderByCpf,
        readonly calculateDelivery: CalculateDelivery,
        readonly validationCoupon: ValidationCoupon,
        readonly getOrderByCode: GetOrderByCode,
        readonly getListOrders: GetListOrders
    ) {
        httpServer.on<RequestCheckout>('post', '/checkout', async function(request) {
            await checkout.execute(request.body);

            return {};
        })

        httpServer.on<RequestOrder>('get', '/orders', async function(request) {
            let orders = []
            
            if (request?.query?.cpf) {
                orders = await getOrderByCpf.execute(request.query.cpf);
            } else {
                orders = await getListOrders.execute();
            }

            return { orders };
        })

        httpServer.on<RequestGetOrderByCode>('get', '/orders/:code', async function(request) {
            const order = await getOrderByCode.execute(request.params);

            return { order };
        })

        httpServer.on<RequestDelivery>('get', '/delivery', async function(request) {
            const orders = await calculateDelivery.execute(request.body);

            return { orders };
        })

        httpServer.on<RequestCoupon>('get', '/coupon', async function(request) {
            const couponIsValid = await validationCoupon.execute(request.query);

            return { couponIsValid };
        })
    }
}