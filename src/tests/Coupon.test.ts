import Coupon from "@domain/entity/Coupon";

describe('Coupon', function() {
    test('Não deve aplicar cupom de desconto expirado', function() {
        const coupon = new Coupon('VALE20', 20, new Date('1995-12-17T00:00:00'));
        const result = coupon.isExpired(new Date('2022-10-10T00:00:00'));
        expect(result).toBeTruthy();
    })
})