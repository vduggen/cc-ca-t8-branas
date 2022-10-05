import Dimension from "./domain/entity/Dimension";
import Item from "./domain/entity/Item";

import OrderController from "./infra/controller/OrderController";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import ItemRepositoryMemory from "./infra/repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "./infra/repository/memory/OrderRepositoryMemory";
import Checkout from "./application/Checkout";

const httpServer = new ExpressAdapter();
httpServer.listen(3000);

const itemRepository = new ItemRepositoryMemory();
itemRepository.save(new Item(1, 'Camera', 1000, new Dimension(20, 15, 10), 0.003));

const orderRepository = new OrderRepositoryMemory();

const checkout = new Checkout(itemRepository, orderRepository);

new OrderController(httpServer, checkout);