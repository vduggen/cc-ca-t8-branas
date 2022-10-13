import Order from "@domain/entity/Order";
import OrderRepositoryMemory from "@infra/repository/memory/OrderRepositoryMemory"
import GetOrderByCode, { InputGetOrderByCode } from "../application/GetOrderByCode"

describe('GetOrderByCode', function() {
    test('Deve retornar um pedido com base no código', async function() {
        const orderRepository = new OrderRepositoryMemory();
        orderRepository.save(new Order('092.216.699-47', new Date('2022-10-13T00:00:00'), 1));
        const getOrderByCode = new GetOrderByCode(orderRepository);
        const input: InputGetOrderByCode = {
            code: '202200000001'
        }
        const result = await getOrderByCode.execute(input);
        expect(result).toHaveLength(1);
        expect(result[0].getCode()).toBe('202200000001');
    })
})