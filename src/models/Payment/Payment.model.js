export class Payment {
    constructor({ order_id, status, amount }) {
        this.order_id = order_id;
        this.status = status;
        this.amount = amount;
    }
}