import Coupon from "@domain/entity/Coupon";
import CouponRepository from "@domain/repository/CouponRepository";

export default class CouponRepositoryMemory implements CouponRepository {
    coupons: Coupon[];

    constructor() {
        this.coupons = [];
    }

    private filterCoupon(name: string) {
        return this.coupons.filter(coupon => coupon.name === name);
    }

    private validationCouponExists(name: string) {
        const result = this.filterCoupon(name);
        return result.length > 0;
    }

    async validate(name: string): Promise<boolean> {
        const result = this.filterCoupon(name);
        const [firstItem] = result;
        const couponIsValid = !firstItem.isExpired();
        return couponIsValid;
    }

    async save(coupon: Coupon): Promise<void> {
        const couponAlreadyExist = this.validationCouponExists(coupon.name);
        if (!couponAlreadyExist) {
            this.coupons.push(coupon);
        }
    }
}