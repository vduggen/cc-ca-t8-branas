export default class Coupon {
    constructor(
        readonly name: string,
        readonly percent: number,
        readonly date: Date = new Date()
    ) {}

    isExpired() {
        const currentDate = new Date().getTime();
        const dateCoupon = this.date.getTime();
        return dateCoupon < currentDate;
    }

    getPercent() {
        return this.percent;
    }
}