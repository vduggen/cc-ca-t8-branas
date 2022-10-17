import OrderCode from "@domain/entity/OrderCode";
import Order from "../../../domain/entity/Order";
import OrderRepository from "../../../domain/repository/OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
    private orders: Order[];

    constructor() {
        this.orders = [];
    }

    async getByCode(code: string): Promise<Order[]> {
        return this.orders.filter(order => order.getCode() === code);
    }

    async save(order: Order): Promise<void> {
        this.orders.push(order);
    }

    async getByCpf(rawCpf: string): Promise<Order[]> {
        return this.orders.filter(order => order.cpf.rawCpf === rawCpf);
    }

    async getAll(): Promise<Order[]> {
        return this.orders;
    }
}