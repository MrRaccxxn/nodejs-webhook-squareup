import { Payment } from "../models/Payment/Payment.model.js";
import { socketPaymentIds } from "../app.js";

export const paymentUpdated = async (req, res) => {
    const payment = new Payment({
        order_id: req.body.data.object.payment.order_id,
        status: req.body.data.object.payment.status,
        amount: req.body.data.object.payment.total_money.amount
    });

    const socket = socketPaymentIds.get(payment.order_id);
    socket.emit('paymentUpdated', { paymentStatus: payment })
    res.status(200).send("OK");
}
