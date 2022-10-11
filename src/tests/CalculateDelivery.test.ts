import Delivery from "@domain/entity/Delivery";
import Dimension from "@domain/entity/Dimension";
import Item from "@domain/entity/Item";

describe('CalculateDelivery', function() {
    test('Deve simular o frete com preço mínimo', async function() {
        const delivery = new Delivery();
        const item = new Item(1, 'Camera', 1000, new Dimension(20, 15, 10), 1);
        const result = delivery.calculate(1000, item.size, item.density);
        expect(result).toBe(10)
    })

    test('Deve simular o frete', async function() {
        const delivery = new Delivery();
        const item = new Item(1, 'Guitarra', 1000, new Dimension(100, 30, 10), 3);
        const result = delivery.calculate(1000, item.size, item.density);
        expect(result).toBe(30)
    })
})