import OrderCode from "@domain/entity/OrderCode";
import Order from "../entity/Order";

export default interface OrderRepository {
    save(order: Order): Promise<void>;
    getByCpf(cpf: string): Promise<Order[]>;
    getByCode(code: OrderCode): Promise<Order[]>;
}