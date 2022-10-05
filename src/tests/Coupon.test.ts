import Coupon from "@domain/entity/Coupon";

describe('Coupon', function() {
    test('Não deve aplicar cupom de desconto expirado', function() {
        const result = () => new Coupon('VALE20', 20, new Date('1995-12-17T00:00:00'))
        expect(result).toThrow('Cupom expirado');
    })
})