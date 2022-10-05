import Order from "../domain/entity/Order";
import ItemRepository from "../domain/repository/ItemRepository";
import OrderRepository from "../domain/repository/OrderRepository";

interface InputOrderItem {
    idItem: number,
    quantity: number
}

export type InputCheckout = {
    cpf: string;
    orderItems: InputOrderItem[]
};

export default class Checkout {
    
    constructor(
        readonly itemRepository: ItemRepository,
        readonly orderRepository: OrderRepository
    ) {}

    async execute(input: InputCheckout): Promise<void> {
        const order = new Order(input.cpf);
        for (const orderItem of input.orderItems) {
            const item = await this.itemRepository.getItem(orderItem.idItem);
            order.addItem(item, orderItem.quantity);
        }
        this.orderRepository.save(order);
        
    }
}
