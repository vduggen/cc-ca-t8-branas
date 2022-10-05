export default class Delivery {
    private MIN_VALUE = 10;

    constructor(
        readonly distance: number,
        readonly size: number,
        readonly density: number
    ) {}

    calculate() {
        const resultSum = this.distance * this.size * (this.density / 100);
        return resultSum <= this.MIN_VALUE ? this.MIN_VALUE : resultSum;
    }
}