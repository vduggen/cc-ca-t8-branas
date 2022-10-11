import Delivery from "@domain/entity/Delivery";
import ItemRepository from "@domain/repository/ItemRepository";

export type InputCalculateDelivery = {
    idItem: number,
    distance: number,
}

export default class CalculateDelivery {
    
    constructor(
        private readonly delivery: Delivery,
        private readonly itemRepository: ItemRepository,
    ) {}

    async execute(input: InputCalculateDelivery): Promise<number> {
        const item = await this.itemRepository.getItem(input.idItem);
        return this.delivery.calculate(input.distance, item.getVolume(), item.getDensity());
    }
}