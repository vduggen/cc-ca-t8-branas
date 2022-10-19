import Freight from "@domain/entity/Freight";
import ItemRepository from "@domain/repository/ItemRepository";

export type InputCalculateFreight = {
    idItem: number,
    distance: number,
}

export default class CalculateFreight {
    
    constructor(
        private readonly freight: Freight,
        private readonly itemRepository: ItemRepository,
    ) {}

    async execute(input: InputCalculateFreight): Promise<number> {
        const item = await this.itemRepository.getItem(input.idItem);
        return this.freight.calculate(input.distance, item.getVolume(), item.getDensity());
    }
}