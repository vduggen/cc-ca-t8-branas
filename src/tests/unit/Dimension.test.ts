import Dimension from "@domain/entity/Dimension";

describe('Dimension', function() {
    test('A largura não pode ser negativa', function() {
        const dimension = () => new Dimension(-20, 0, 0, 0);
        expect(dimension).toThrow('Invalid dimension');
    })

    test('A altura não pode ser negativa', function() {
        const dimension = () => new Dimension(0, -20, 0, 0);
        expect(dimension).toThrow('Invalid dimension');
    })
    
    test('A profundidade não pode ser negativa', function() {
        const dimension = () => new Dimension(0, 0, -20, 0);
        expect(dimension).toThrow('Invalid dimension');
    })
    
    test('O peso não pode ser negativo', function() {
        const dimension = () => new Dimension(0, 0, 0, -20);
        expect(dimension).toThrow('Invalid dimension');
    })
})