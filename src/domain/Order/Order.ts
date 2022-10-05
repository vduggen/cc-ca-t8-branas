import Cpf from "../Cpf/Cpf";
import Dimension from "../Dimension/Dimension";
import Coupon from "./Coupon/Coupon";
import Item from "./Item";
import OrderItem from "./OrderItem/OrderItem";

export default class Order {
    cpf: Cpf;
    orderItems: OrderItem[];
    coupon?: Coupon;

    constructor(cpf: string) {
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
    }

    existItemInOrderItems(id: number) {
        const result = this.orderItems.filter(orderItem => orderItem.idItem === id);
        const itemAlreadyExists = result.length > 0;
        if (itemAlreadyExists) throw new Error('The item already exists');
    }

    addItem(item: Item, quantity: number, dimension: Dimension, weight: number) {
        this.existItemInOrderItems(item.idItem);
        const orderItem = new OrderItem(item.idItem, item.price, quantity, dimension, weight);
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