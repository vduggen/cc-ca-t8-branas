import Freight from "@domain/entity/Freight";
import ItemRepository from "@domain/repository/ItemRepository";
import GetDistanceTwoPoints, { InputGetDistanceTwoPoints } from "./GetDistanceTwoPoints";

export interface InputCalculateFreight extends InputGetDistanceTwoPoints {
    idItem: number,
}

export default class CalculateFreight {
    
    constructor(
        private readonly freight: Freight,
        private readonly itemRepository: ItemRepository,
        private readonly getDistanceTwoPoints: GetDistanceTwoPoints
    ) {}

    async execute(input: InputCalculateFreight): Promise<number> {
        const item = await this.itemRepository.getItem(input.idItem);

        const distance = await this.getDistanceTwoPoints.execute(input);

        return this.freight.calculate(distance, item.getVolume(), item.getDensity());
    }
}