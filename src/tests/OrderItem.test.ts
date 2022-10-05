import Dimension from "@domain/entity/Dimension";
import OrderItem from "@domain/entity/OrderItem";

describe('OrderItem', function() {
    test('A quantidade de um item não pode ser negativa', function() {
        const dimension = new Dimension(0, 0, 0);
        const resultAddItem = () => new OrderItem(1, 300, -1, dimension, 0);
        expect(resultAddItem).toThrow('Quantity cannot be negative');
    })
})