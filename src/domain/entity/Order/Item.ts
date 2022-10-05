import Dimension from "../Dimension/Dimension";

export default class Item {
    constructor(
        readonly idItem: number,
        readonly description: string,
        readonly price: number,
        readonly dimension: Dimension,
        readonly weight: number
    ) {}
}