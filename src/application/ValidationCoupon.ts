import CouponRepository from "@domain/repository/CouponRepository";

export type InputValidationCoupon = {
    name: string;
    now?: Date;
};

export default class ValidationCoupon {

    constructor(readonly couponRepository: CouponRepository) {}

    async execute(input: InputValidationCoupon): Promise<boolean> {
        const now = input?.now || new Date();
        return this.couponRepository.validate(input.name, now);
    }
}