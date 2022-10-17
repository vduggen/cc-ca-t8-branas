import OrderRepository from "@domain/repository/OrderRepository";

export default class GetListOrders {

    constructor(
        readonly orderRepository: OrderRepository
    ) {}

    execute() {
        return this.orderRepository.getAll();
    }
}