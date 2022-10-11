import Dimension from "@domain/entity/Dimension";

describe('Dimension', function() {
    test('As dimensões não podem ser negativas', function() {
        const dimension = () => new Dimension(-20, 0, 0, 0);
        expect(dimension).toThrow('Invalid dimension');
    })
})