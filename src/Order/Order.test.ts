import Coupon from "./Coupon";
import Item from "./Item";
import Order from "./Order";
import OrderItem from "./OrderItem";

describe('Order', function() {
    test('Não deve criar um pedido com cpf inválido', function() {
        const order = () => new Order('111.111.699-47');
        expect(order).toThrow('Document is invalid');
    })

    test('Deve criar um pedido com 3 itens (com descrição, preço e quantidade)', function() {
        const order = new Order('092.216.699-47');
        order.addItem(new Item(1, 'Celular Samsung', 1500), 1);
        order.addItem(new Item(2, 'Celular Iphone', 5500), 1);
        order.addItem(new Item(3, 'Celular LG', 500), 3);
        const total = order.getTotal();
        expect(total).toBe(8500);
    })

    test('Deve criar um pedido com cupom de desconto (percentual sobre o total do pedido)', function() {
        const order = new Order('092.216.699-47');
        const orderItem = new Item(1, 'Celular Samsung', 1000);
        order.addItem(orderItem, 1);
        order.addCoupon(new Coupon('VALE20', 20));
        const total = order.getTotal();
        expect(total).toBe(800);
    })
})