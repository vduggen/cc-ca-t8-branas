import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    code: string;
    cpf: Cpf;
    orderItems: OrderItem[];
    coupon?: Coupon;

    constructor(cpf: string, readonly date: Date = new Date()) {
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
        this.code = '';
    }

    existItemInOrderItems(id: number) {
        const result = this.orderItems.filter(orderItem => orderItem.idItem === id);
        const itemAlreadyExists = result.length > 0;
        if (itemAlreadyExists) throw new Error('The item already exists');
    }

    addItem(item: Item, quantity: number) {
        this.existItemInOrderItems(item.idItem);
        const orderItem = new OrderItem(item.idItem, item.price, quantity, item.getVolume(), item.getDensity());
        this.orderItems.push(orderItem);
    }

    addCoupon(coupon: Coupon) {
        this.coupon = coupon;
    }

    getTotal() {
        const total = this.orderItems.reduce((total, orderItem) => total + orderItem.getTotal(), 0);
        return total - this.calculeDiscount(total);
    }

    private calculeDiscount(total: number) {
        const existCoupon = this.coupon?.getPercent() || 0;
        return total * existCoupon / 100;
    }
}