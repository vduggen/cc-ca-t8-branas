export default class Dimension {
    constructor(
        readonly width: number,
        readonly height: number,
        readonly depth: number,
        readonly weight: number
    ) {
        this.widthIsNegative(width);
        this.heightIsNegative(height);
        this.depthIsNegative(depth);
        this.weightIsNegative(weight);
    }

    negativeException(type: string) {
        throw new Error(`${type} cannot be negative`);
    }

    isNegative = (parameter: number) => parameter < 0;

    widthIsNegative(width: number) {
        if (this.isNegative(width)) this.negativeException('Width');
    }

    heightIsNegative(height: number) {
        if (this.isNegative(height)) this.negativeException('Height');
    }

    depthIsNegative(depth: number) {
        if (this.isNegative(depth)) this.negativeException('Depth');
    }

    weightIsNegative(weight: number) {
        if (this.isNegative(weight)) this.negativeException('Weight');
    }
}