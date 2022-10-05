import Item from "../entity/Order/Item";

export default interface ItemRepository {
    getItem(idItem: number): Promise<Item>;
    save(item: Item): Promise<void>;
}