export default class Coupon {
    constructor(
        readonly name: string,
        readonly percent: number,
        readonly date: Date = new Date()
    ) {}

    isExpired(now: Date = new Date()) {
        const currentDate = now.getTime();
        const dateCoupon = this.date.getTime();
        const isExpired = dateCoupon < currentDate;
        if (isExpired) throw new Error('Cupom expirado');
        return false;
    }

    getPercent() {
        return this.percent;
    }
}