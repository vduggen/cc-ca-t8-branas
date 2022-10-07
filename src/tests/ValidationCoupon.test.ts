import Coupon from "@domain/entity/Coupon";
import CouponRepositoryMemory from "@infra/repository/memory/CouponRepositoryMemory";
import ValidationCoupon from "../application/ValidationCoupon"

describe('ValidationCoupon', function() {
    test('Deve validar o cupom de desconto é expirado', async function() {
        const couponRepository = new CouponRepositoryMemory();
        couponRepository.save(new Coupon('VALE20', 20))
        const validationCoupon = new ValidationCoupon(couponRepository);
        const input = {
            name: 'VALE20'
        };
        const couponIsValid = await validationCoupon.execute(input)
        expect(couponIsValid).toBe(true);
    })
})