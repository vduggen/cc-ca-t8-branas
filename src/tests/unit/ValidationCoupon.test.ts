import Coupon from "@domain/entity/Coupon";
import CouponRepositoryMemory from "@infra/repository/memory/CouponRepositoryMemory";
import ValidationCoupon from "../application/ValidationCoupon"

describe('ValidationCoupon', function() {
    test('Deve validar um cupom de desconto', function() {
        const couponRepository = new CouponRepositoryMemory();
        couponRepository.save(new Coupon('VALE20', 20, new Date('2022-10-11T10:00:00')))
        const validationCoupon = new ValidationCoupon(couponRepository);
        const input = {
            name: 'VALE20',
            now: new Date('2021-10-11T12:21:00')
        };
        const couponIsValid = validationCoupon.execute(input)
        expect(couponIsValid).toBeTruthy();
    })
})