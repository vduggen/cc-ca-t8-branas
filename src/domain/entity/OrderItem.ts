export default class OrderItem {
    constructor(
        readonly idItem: number,
        readonly price: number,
        readonly quantity: number,
        readonly size: number,
        readonly density: number
    ) {
        this.quantityIsNegative(quantity);
        this.sizeIsNegative(size);
        this.densityIsNegative(density);
    }

    getTotal() {
        return this.price * this.quantity;
    }

    quantityIsNegative(quantity: number) {
        const isNegative = quantity < 0;
        if (isNegative) throw new Error('Quantity cannot be negative');
    }

    densityIsNegative(density: number) {
        const isNegative = density < 0;
        if (isNegative) throw new Error('Density cannot be negative');
    }

    sizeIsNegative(size: number) {
        const isNegative = size < 0;
        if (isNegative) throw new Error('Size cannot be negative');
    }
}