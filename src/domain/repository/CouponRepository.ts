import Coupon from "@domain/entity/Coupon";

export default interface CouponRepository {
    validate(name: string, now: Date): Promise<boolean>;
    save(coupon: Coupon): Promise<void>;
}