import Cpf from "../Cpf/Cpf";
import Coupon from "./Coupon";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    cpf: Cpf;
    orderItems: OrderItem[];
    coupon?: Coupon;

    constructor(cpf: string) {
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
    }

    addItem(item: Item, quantity: number) {
        this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
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