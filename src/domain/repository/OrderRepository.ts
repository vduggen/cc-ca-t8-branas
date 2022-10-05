import Order from "@domain/entity/Order/Order";

export default interface OrderRepository {
    save(order: Order): Promise<void>;
    getByCpf(cpf: string): Promise<Order[]>;
}