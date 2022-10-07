import Coupon from "@domain/entity/Coupon";

export default interface CouponRepository {
    validate(name: string): Promise<boolean>;
    save(coupon: Coupon): Promise<void>;
}