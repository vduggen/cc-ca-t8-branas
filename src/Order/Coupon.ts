export default class Coupon {
    name: string;
    percent: number;

    constructor(name: string, percent: number) {
        this.name = name;
        this.percent = percent;
    }

    getPercent() {
        return this.percent;
    }
}