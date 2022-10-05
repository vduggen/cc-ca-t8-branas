import Dimension from "@domain/entity/Dimension";

describe('Dimension', function() {
    test('A largura não pode ser negativa', function() {
        const dimension = () => new Dimension(-20, 0, 0);
        expect(dimension).toThrow('Width cannot be negative');
    })

    test('A altura não pode ser negativa', function() {
        const dimension = () => new Dimension(0, -15, 0);
        expect(dimension).toThrow('Height cannot be negative');
    })

    test('A profundidade não pode ser negativa', function() {
        const dimension = () => new Dimension(0, 0, -10);
        expect(dimension).toThrow('Depth cannot be negative');
    })

    test('Realizar o cálculo do tamanho do item (camera)', function() {
        const dimension = new Dimension(20, 15, 10);
        const result = dimension.calculateSize();
        expect(result).toBe(0.003);
    })

    test('Realizar o cálculo do tamanho do item (guitarra)', function() {
        const dimension = new Dimension(100, 30, 10);
        const result = dimension.calculateSize();
        expect(result).toBe(0.03);
    })

    test('Realizar o cálculo do tamanho do item (geladeira)', function() {
        const dimension = new Dimension(200, 100, 50);
        const result = dimension.calculateSize();
        expect(result).toBe(1);
    })
})