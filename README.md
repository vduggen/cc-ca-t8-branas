# Parte 1

- [X] Não deve criar um pedido com cpf inválido.
- [X] Deve criar um pedido com 3 itens (com descrição, preço e quantidade)
- [X] Deve criar um pedido com cupom de desconto (percentual sobre o total do pedido)

# Parte 2

- [X] Não deve aplicar cupom de desconto expirado
- [X] Ao fazer um pedido, a quantidade de um item não pode ser - negativa
- [X] Ao fazer um pedido, o mesmo item não pode ser informado mais - de uma vez
- [X] Nenhuma dimensão do item pode ser negativa
- [X] O peso do item não pode ser negativo
- [X] Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)
- [X] Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado

# Parte 3

- [X] Deve gerar o código do pedido
- [X] Deve fazer um pedido (caso de uso)
- [X] Deve simular o frete (caso de uso)
- [X] Deve validar o cupom de desconto (caso de uso)

# Parte 4
- [X] Deve retornar um pedido com base no código (caso de uso)
- [X] Deve retornar a lista de pedidos (caso de uso)
- [] Calcule a distância entre dois CEPs e utilize no algoritmo de cálculo do frete 
- [X] Calcular frete (caso de uso)

Considere

- Criar uma API (tanto faz se é REST, GraphQL ou qualquer outro formato) para os casos de uso
- Criar testes de integração para a API e os casos de uso
- Cadastrar no banco de dados 2 ou 3 CEPs e associar com as coordenadas das cidades dos CEPs, apenas para viabilizar os cálculos, não é necessário carregar a base de CEPs inteira
- Utilizar o algoritmo de cálculo e arquivo com as coordenadas: https://github.com/rodrigobranas/cccat7_freight