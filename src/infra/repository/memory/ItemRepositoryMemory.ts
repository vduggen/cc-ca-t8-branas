import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";

export default class ItemRepositoryMemory implements ItemRepository {
    items: Item[];
    
    constructor() {
        this.items = [];
    }

    async save(item: Item): Promise<void> {
        this.items.push(item);
    }

    async getItem(idItem: number): Promise<Item> {
        const item = this.items.filter(item => item.idItem === idItem);

        const itemNotFound = item.length === 0;
        if (itemNotFound) throw new Error('Item does not exist');
        
        return item[0];
    }
}