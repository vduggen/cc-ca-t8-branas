import Freight from "@domain/entity/Freight";

describe('Freight', function() {
    test('Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado', function() {
        const freight = new Freight();
        const result = freight.calculate(1000, 0.003, 333);
        expect(result).toBe(10)
    })

    test('Deve calcular o valor do frete com base nas dimensões (guitarra)', function() {
        const freight = new Freight();
        const result = freight.calculate(1000, 0.03, 100);
        expect(result).toBe(30)
    })

    test('Deve calcular o valor do frete com base nas dimensões (geladeira)', function() {
        const freight = new Freight();
        const result = freight.calculate(1000, 1, 40);
        expect(result).toBe(400)
    })
})