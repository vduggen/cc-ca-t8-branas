export default class OrderCode {
    constructor(readonly date: Date = new Date(), readonly sequence: number = 1) {}

    private generateCode() {
        const year = this.date.getFullYear();
        const formatSequence = String(this.sequence).padStart(8, "0");
        return `${year}${formatSequence}`;
    }

    getCode() {
        return this.generateCode();
    }
}