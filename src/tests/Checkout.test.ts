import axios from "axios"

describe('Checkout', function() {
    test('Deve fazer um pedido', function() {
        axios.post('http://localhost:3000/checkout', {
            cpf: '092.216.699-470',
            orderItems: [
                { idItem: 1, quantity: 3 }
            ]
        })
    })
})