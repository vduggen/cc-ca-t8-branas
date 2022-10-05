import Dimension from "@domain/entity/Dimension/Dimension";
import Item from "@domain/entity/Order/Item";

import OrderController from "@infra/controller/OrderController";
import ExpressAdapter from "@infra/http/ExpressAdapter";
import ItemRepositoryMemory from "@infra/repository/memory/ItemRepositoryMemory";
import Checkout from "./application/Checkout";

const httpServer = new ExpressAdapter();
httpServer.listen(3000);

const itemRepository = new ItemRepositoryMemory();
itemRepository.save(new Item(1, 'Camera', 1000, new Dimension(20, 15, 10), 0.003));

const checkout = new Checkout(itemRepository);

new OrderController(httpServer, checkout);