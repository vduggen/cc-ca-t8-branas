import Order from "../entity/Order";

export default interface OrderRepository {
    save(order: Order): Promise<void>;
    getByCpf(cpf: string): Promise<Order[]>;
    getByCode(code: string): Promise<Order[]>;
}