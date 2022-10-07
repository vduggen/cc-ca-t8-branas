import CouponRepository from "@domain/repository/CouponRepository";

export type InputValidationCoupon = {
    name: string;
};

export default class ValidationCoupon {

    constructor(readonly couponRepository: CouponRepository) {}

    async execute(input: InputValidationCoupon): Promise<boolean> {
        return this.couponRepository.validate(input.name);
    }
}