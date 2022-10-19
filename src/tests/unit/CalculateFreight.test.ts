import Delivery from "@domain/entity/Freight"
import Dimension from "@domain/entity/Dimension";
import Item from "@domain/entity/Item";
import ItemRepositoryMemory from "@infra/repository/memory/ItemRepositoryMemory";
import CalculateDelivery, { InputCalculateFreight } from "../../application/CalculateFreight"

describe('CalculateFreight', function() {
    test('Deve simular o frete ', async function() {
        const delivery = new Delivery();
        const itemRepository = new ItemRepositoryMemory();
        await itemRepository.save(new Item(1, 'Camera', 1000, new Dimension(20, 15, 10, 0.003)));
        const calculateDelivery = new CalculateDelivery(delivery, itemRepository);
        const input: InputCalculateFreight = {
            distance: 1000,
            idItem: 1
        }
        const result = await calculateDelivery.execute(input);
        expect(result).toBe(10)
    })
})