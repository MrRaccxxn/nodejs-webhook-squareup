import squareClient from "../core/squareClient.js";
import { CreatePaymentLinkModel } from "../models/Payment/createPaymentLink.model.js";
import { v4 as uuidv4 } from "uuid";

export const listPaymentLinks = async (req, res) => {
    try {
        const response = await squareClient.checkoutApi.listPaymentLinks();
        res.json(response.result);
    } catch (error) {
        console.log(error);
    }
};

export const createPaymentLink = async (req, res) => {

    const idempotency = uuidv4();

    try {
        const createPaymentLinkModel = new CreatePaymentLinkModel(
            {
                idempotencyKey: idempotency,
                name: "Ice cream",
                amount: 100,
                redirectUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                currency: "USD",
                locationId: "",
            }
        );
        const parsedData = createPaymentLinkModel.getParseData();
        const response = await squareClient.checkoutApi.createPaymentLink(parsedData);
        res.json(response.result)
    } catch (error) {
        console.log(error);
    }
};
