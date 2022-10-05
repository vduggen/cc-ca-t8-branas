import Checkout from "../application/Checkout";

import Dimension from "../domain/entity/Dimension";
import Item from "../domain/entity/Item";

import OrderRepositoryMemory from "../infra/repository/memory/OrderRepositoryMemory";
import ItemRepositoryMemory from "../infra/repository/memory/ItemRepositoryMemory";
import GetOrderByCpf from "../application/GetOrderByCpf";

describe('Checkout', function() {
    test('Deve fazer um pedido', async function() {
        const itemRepository = new ItemRepositoryMemory();
        await itemRepository.save(new Item(1, 'Camera', 1000, new Dimension(20, 15, 10), 0.003));

        const orderRepository = new OrderRepositoryMemory();

        const checkout = new Checkout(itemRepository, orderRepository);
        const inputCheckout = {
            cpf: '092.216.699-47',
            orderItems: [
                { idItem: 1, quantity: 1 }
            ]
        }
        await checkout.execute(inputCheckout);

        const getOrderByCpf = new GetOrderByCpf(orderRepository);
        const ordersByCpf = await getOrderByCpf.execute(inputCheckout.cpf);
        expect(ordersByCpf).toHaveLength(1);
    })
})