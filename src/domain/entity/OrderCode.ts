export default class OrderCode {
    private code = '';

    constructor(readonly date: Date = new Date(), readonly sequence: number = 1) {
        this.generateCode();
    }

    private generateCode() {
        const year = this.date.getFullYear();
        const formatSequence = String(this.sequence).padStart(8, "0");
        this.code = `${year}${formatSequence}`;
    }

    getCode() {
        return this.code;
    }
}