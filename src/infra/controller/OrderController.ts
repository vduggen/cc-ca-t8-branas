import Checkout from "../../application/Checkout";
import HttpServer from "../http/HttpServer";

export default class OrderController {
    
    constructor(
        readonly httpServer: HttpServer,
        readonly checkout: Checkout,
    ) {
        httpServer.on('post', '/checkout', async function(request) {
            const total = checkout.execute(request.body);
            return total;
        })
    }
}