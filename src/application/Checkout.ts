import ItemRepository from "@domain/repository/ItemRepository";
import Order from "@domain/entity/Order/Order";

interface InputOrderItem {
    idItem: number,
    quantity: number
}

type Input = {
    cpf: string;
    orderItems: InputOrderItem[]
};

export default class Checkout {
    
    constructor(readonly itemRepository: ItemRepository) {}

    async execute(input: Input): Promise<number> {
        const order = new Order(input.cpf);
        for (const orderItem of input.orderItems) {
            const item = await this.itemRepository.getItem(orderItem.idItem);
            order.addItem(item, orderItem.quantity);
        }
        return order.getTotal();
    }
}
