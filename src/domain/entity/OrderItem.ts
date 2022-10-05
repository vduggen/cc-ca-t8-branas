import Dimension from "./Dimension";

export default class OrderItem {
    constructor(
        readonly idItem: number,
        readonly price: number,
        readonly quantity: number,
        readonly dimensions: Dimension,
        readonly weight: number
    ) {
        this.quantityIsNegative(quantity);
        this.weightIsNegative(weight);
    }

    getTotal() {
        return this.price * this.quantity;
    }

    quantityIsNegative(quantity: number) {
        const isNegative = quantity < 0;
        if (isNegative) throw new Error('Quantity cannot be negative');
    }

    weightIsNegative(weight: number) {
        const isNegative = weight < 0;
        if (isNegative) throw new Error('Weight cannot be negative');
    }
}