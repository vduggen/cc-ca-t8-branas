import Delivery from "@domain/entity/Delivery"
import Dimension from "@domain/entity/Dimension";
import Item from "@domain/entity/Item";
import ItemRepositoryMemory from "@infra/repository/memory/ItemRepositoryMemory";
import CalculateDelivery, { InputCalculateDelivery } from "../application/CalculateDelivery";

const makeSut = async (item: Item) => {
    const itemRepository = new ItemRepositoryMemory();
    itemRepository.save(item);

    const delivery = new Delivery();
    const calculateDelivery = new CalculateDelivery(delivery, itemRepository);
    const input: InputCalculateDelivery = {
        idItem: 1,
        distance: 1000
    };
    return await calculateDelivery.execute(input);
}

describe('CalculateDelivery', function() {
    test('Deve simular o frete (camera)', async function() {
        const result = await makeSut(new Item(1, 'Camera', 1000, new Dimension(20, 15, 10), 1));
        expect(result).toBe(10);
    })

    test('Deve simular o frete (guitarra)', async function() {
        const result = await makeSut(new Item(1, 'Guitarra', 1000, new Dimension(100, 30, 10), 3));
        expect(result).toBe(30);
    })
})