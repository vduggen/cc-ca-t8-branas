import Delivery from "@domain/entity/Delivery";

describe('Delivery', function() {
    test('Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado', function() {
        const delivery = new Delivery(1000, 0.003, 333);
        const result = delivery.calculate();
        expect(result).toBe(10)
    })

    test('Deve calcular o valor do frete (guitarra)', function() {
        const delivery = new Delivery(1000, 0.03, 100);
        const result = delivery.calculate();
        expect(result).toBe(30)
    })

    test('Deve calcular o valor do frete (geladeira)', function() {
        const delivery = new Delivery(1000, 1, 40);
        const result = delivery.calculate();
        expect(result).toBe(400)
    })
})