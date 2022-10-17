import OrderCode from "@domain/entity/OrderCode"

describe('OrderCode', function() {
    test('Deve gerar o código do pedido', function() {
        const orderCode = new OrderCode(new Date('2022-10-11T00:00:00'), 1);
        expect(orderCode.getCode()).toBe('202200000001');
    })
})