import Dimension from "../Dimension/Dimension";
import Coupon from "./Coupon/Coupon";
import Item from "./Item";
import Order from "./Order";

describe('Order', function() {
    test('Não deve criar um pedido com cpf inválido', function() {
        const order = () => new Order('000.000.000-00');
        expect(order).toThrow('Document is invalid');
    })

    test('Deve criar um pedido com 3 itens (com descrição, preço e quantidade)', function() {
        const order = new Order('092.216.699-47');
        order.addItem(new Item(1, 'Celular Samsung', 1500), 1, new Dimension(0,0,0), 0);
        order.addItem(new Item(2, 'Celular Iphone', 5500), 1, new Dimension(0,0,0), 0);
        order.addItem(new Item(3, 'Celular LG', 500), 3, new Dimension(0,0,0), 0);
        const total = order.getTotal();
        expect(total).toBe(8500);
    })

    test('Deve criar um pedido com cupom de desconto (percentual sobre o total do pedido)', function() {
        const order = new Order('092.216.699-47');
        const orderItem = new Item(1, 'Celular Samsung', 1000);
        order.addItem(orderItem, 1, new Dimension(0,0,0), 0);
        order.addCoupon(new Coupon('VALE20', 20, new Date('2050-12-17T00:00:00')));
        const total = order.getTotal();
        expect(total).toBe(800);
    })

    test('Não deve existir dois itens duplicados', function() {
        const order = new Order('092.216.699-47');
        const orderItem = new Item(1, 'Celular Samsung', 1000);
        order.addItem(orderItem, 1, new Dimension(0,0,0), 0);
        const resultAddItem = () => order.addItem(orderItem, 1, new Dimension(0,0,0), 0);
        expect(resultAddItem).toThrow('The item already exists');
    })
})