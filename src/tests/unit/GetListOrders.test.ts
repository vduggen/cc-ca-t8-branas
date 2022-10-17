import Order from "@domain/entity/Order";
import OrderRepositoryMemory from "@infra/repository/memory/OrderRepositoryMemory"
import GetListOrders from "../application/GetListOrders"

describe('GetListOrders', function() {
    test('Deve retornar a lista de pedidos', async function() {
        const orderRepository = new OrderRepositoryMemory();
        await orderRepository.save(new Order('092.216.699-47', new Date('2022-10-13T00:00:00'), 1));
        const getListOrders = new GetListOrders(orderRepository);
        const result = await getListOrders.execute();
        expect(result).toHaveLength(1);
    })
})