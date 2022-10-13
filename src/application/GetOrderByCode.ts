import Order from "@domain/entity/Order";
import OrderCode from "@domain/entity/OrderCode";
import OrderRepository from "@domain/repository/OrderRepository";

export type InputGetOrderByCode = {
    code: OrderCode
}

export default class GetOrderByCode {
    
    constructor(readonly orderRepository: OrderRepository) {}

    async execute(input: InputGetOrderByCode): Promise<Output[]> {
        return this.orderRepository.getByCode(input.code);
    }
}

type Output = Order;