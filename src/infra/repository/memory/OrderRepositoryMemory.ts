import Order from "../../../domain/entity/Order";
import OrderRepository from "../../../domain/repository/OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
    orders: Order[];

    constructor() {
        this.orders = [];
    }

    generateCode(): string {
        const date = new Date();
        const fullYear = date.getFullYear();
        return `${fullYear}11111111`;
    }

    async save(order: Order): Promise<void> {
        order.code = this.generateCode();
        this.orders.push(order);
    }

    async getByCpf(rawCpf: string): Promise<Order[]> {
        return this.orders.filter(order => order.cpf.rawCpf === rawCpf);
    }
}