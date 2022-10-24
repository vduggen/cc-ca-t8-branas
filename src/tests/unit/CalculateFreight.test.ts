import Delivery from "@domain/entity/Freight"
import Dimension from "@domain/entity/Dimension";
import Item from "@domain/entity/Item";
import ItemRepositoryMemory from "@infra/repository/memory/ItemRepositoryMemory";
import CalculateDelivery, { InputCalculateFreight } from "../../application/CalculateFreight"
import GetDistanceTwoPoints from "@application/GetDistanceTwoPoints";
import Distance from "@domain/entity/Distance";
import DistanceRepositoryMemory from "@infra/repository/memory/DistanceRepositoryMemory";

describe('CalculateFreight', function() {
    test('Deve simular o frete ', async function() {
        const delivery = new Delivery();
        const itemRepository = new ItemRepositoryMemory();
        await itemRepository.save(new Item(1, 'Camera', 1000, new Dimension(20, 15, 10, 0.003)));
        const distance = new Distance();
        const distanceRepository = new DistanceRepositoryMemory();
        await distanceRepository.save('89041230', -26.9155, -49.0709);
        await distanceRepository.save('20020050', -22.9129, -43.2003);
        const getDistanceTwoPoints = new GetDistanceTwoPoints(distance, distanceRepository);
        const calculateDelivery = new CalculateDelivery(delivery, itemRepository, getDistanceTwoPoints);
        const input: InputCalculateFreight = {
            fromZipcode: '89041230',
            toZipcode: '20020050',
            idItem: 1
        }
        const result = await calculateDelivery.execute(input);
        expect(result).toBe(10)
    })
})