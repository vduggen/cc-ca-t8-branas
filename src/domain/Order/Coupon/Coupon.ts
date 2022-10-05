export default class Coupon {
    name: string;
    percent: number;
    date: Date;

    constructor(name: string, percent: number, date: Date) {
        this.isExpired(date);
        this.name = name;
        this.percent = percent;
        this.date = date;
    }

    isExpired(date: Date) {
        const currentDate = new Date().getTime();
        const dateCoupon = date.getTime();
        const isExpired = dateCoupon < currentDate;
        if (isExpired) throw new Error('Cupom expirado');
    }

    getPercent() {
        return this.percent;
    }
}