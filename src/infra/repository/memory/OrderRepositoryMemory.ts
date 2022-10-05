import Order from "../../../domain/entity/Order";
import OrderRepository from "../../../domain/repository/OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
    orders: Order[];

    constructor() {
        this.orders = [];
    }

    async save(order: Order): Promise<void> {
        this.orders.push(order);
    }

    async getByCpf(cpf: string): Promise<Order[]> {
        return this.orders.filter(order => order.cpf === cpf);
        
    }
}