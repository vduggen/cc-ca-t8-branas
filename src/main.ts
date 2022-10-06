import Dimension from "./domain/entity/Dimension";
import Item from "./domain/entity/Item";

import OrderController from "./infra/controller/OrderController";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import ItemRepositoryMemory from "./infra/repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "./infra/repository/memory/OrderRepositoryMemory";
import Checkout from "./application/Checkout";
import GetOrderByCpf from "./application/GetOrderByCpf";
import CalculateDelivery from "./application/CalculateDelivery";
import Delivery from "@domain/entity/Delivery";

const httpServer = new ExpressAdapter();
httpServer.listen(3000);

const itemRepository = new ItemRepositoryMemory();
itemRepository.save(new Item(1, 'Camera', 1000, new Dimension(20, 15, 10), 0.003));

const orderRepository = new OrderRepositoryMemory();
const checkout = new Checkout(itemRepository, orderRepository);

const getOrderByCpf = new GetOrderByCpf(orderRepository);

const delivery = new Delivery();
const calculateDelivery = new CalculateDelivery(delivery, itemRepository);

new OrderController(httpServer, checkout, getOrderByCpf, calculateDelivery);