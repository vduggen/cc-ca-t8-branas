import Dimension from "./Dimension";

export default class Item {
    size: number;
    density: number;

    constructor(
        readonly idItem: number,
        readonly description: string,
        readonly price: number,
        private readonly dimension: Dimension,
        private readonly weight: number
    ) {
        this.size = this.calculateSize(dimension);
        this.weightIsNegative(weight);
        this.density = this.calculateDensity(weight);
    }

    negativeException(type: string) {
        throw new Error(`${type} cannot be negative`);
    }

    private weightIsNegative(weight: number) {
        if (weight < 0) this.negativeException('Weight');
    }

    private calculateSize(dimension: Dimension) {
        return dimension.width * dimension.height * dimension.depth / 1000000;
    }

    private calculateDensity(weight: number) {
        return weight / this.size;
    }
}