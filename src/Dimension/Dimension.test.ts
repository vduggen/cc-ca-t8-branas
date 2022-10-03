import Dimension from "./Dimension"

describe('Dimension', function() {
    test('A largura não pode ser negativa', function() {
        const dimension = () => new Dimension(-20, 0, 0, 0);
        expect(dimension).toThrow('Width cannot be negative');
    })

    test('A altura não pode ser negativa', function() {
        const dimension = () => new Dimension(0, -15, 0, 0);
        expect(dimension).toThrow('Height cannot be negative');
    })

    test('A profundidade não pode ser negativa', function() {
        const dimension = () => new Dimension(0, 0, -10, 0);
        expect(dimension).toThrow('Depth cannot be negative');
    })
    
    test('O peso não pode ser negativo', function() {
        const dimension = () => new Dimension(0, 0, 0, -10);
        expect(dimension).toThrow('Weight cannot be negative');
    })
})