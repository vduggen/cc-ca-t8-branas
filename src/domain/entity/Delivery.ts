export default class Delivery {
    private MIN_VALUE = 10;

    calculate(distance: number, size: number, density: number) {
        const resultSum = distance * size * (density / 100);
        const isLowerMinValue = resultSum <= this.MIN_VALUE;
        if (isLowerMinValue) return this.MIN_VALUE;
        return resultSum;
    }
}