export default class Coupon {
    constructor(
        readonly name: string,
        readonly percent: number,
        readonly expireDate: Date = new Date()
    ) {}

    isExpired(now: Date = new Date()) {
        const currentDate = now.getTime();
        const expireDateCoupon = this.expireDate.getTime();
        return expireDateCoupon < currentDate;
    }

    getPercent() {
        return this.percent;
    }
}