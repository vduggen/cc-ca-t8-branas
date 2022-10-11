export default class Dimension {

    constructor(
        readonly width: number,
        readonly height: number,
        readonly depth: number,
        readonly weight: number,
    ) {
        if (
            this.isNegative(width)  ||
            this.isNegative(height) ||
            this.isNegative(depth)  ||
            this.isNegative(weight)
        ) throw new Error('Invalid dimension');
    }

    private isNegative = (parameter: number) => parameter <= 0;

    getCalculateVolume() {
        return this.width * this.height * this.depth / 1000000;
    }

    getCalculateDensity() {
        return this.weight / this.getCalculateVolume();
    }
}