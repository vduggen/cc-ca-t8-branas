export default class OrderItem {
    constructor(
        readonly idItem: number,
        readonly price: number,
        readonly quantity: number,
        readonly volume: number,
        readonly density: number
    ) {
        this.quantityIsNegative(quantity);
        this.volumeIsNegative(volume);
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

    volumeIsNegative(size: number) {
        const isNegative = size < 0;
        if (isNegative) throw new Error('Size cannot be negative');
    }
}