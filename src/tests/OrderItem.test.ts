import OrderItem from "@domain/entity/OrderItem";

describe('OrderItem', function() {
    test('A quantidade de um item não pode ser negativa', function() {
        const resultAddItem = () => new OrderItem(1, 300, -1, 0, 0);
        expect(resultAddItem).toThrow('Quantity cannot be negative');
    })

    test('O tamanho de um item não pode ser negativo', function() {
        const resultAddItem = () => new OrderItem(1, 300, 0, -1, 0);
        expect(resultAddItem).toThrow('Size cannot be negative');
    })

    test('A densidade de um item não pode ser negativo', function() {
        const resultAddItem = () => new OrderItem(1, 300, 0, 0, -1);
        expect(resultAddItem).toThrow('Density cannot be negative');
    })
})