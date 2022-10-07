import OrderRepository from "@domain/repository/OrderRepository";

export default class GetOrderByCpf {
    
    constructor(readonly orderRepository: OrderRepository) {}

    async execute(cpf: string): Promise<Output[]> {
        const orders = await this.orderRepository.getByCpf(cpf);
        const output = [];
        for (const order of orders) {
            output.push({ code: order.code, total: order.getTotal() })
        }
        return output;
    }
}

type Output = {
    total: number,
    code: string,
}