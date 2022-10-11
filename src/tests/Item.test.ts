import Dimension from "@domain/entity/Dimension"
import Item from "@domain/entity/Item"

describe('Item', function() {
    test('O peso do item não pode ser negativo', function() {
        const result = () => new Item(1, 'Camera', 3000, new Dimension(0, 0, 0), -1);
        expect(result).toThrow('Weight cannot be negative')
    })
})