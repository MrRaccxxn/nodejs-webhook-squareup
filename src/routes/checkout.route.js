import { Router } from "express";
import * as checkoutController from "../controllers/checkout.controller.js";

const checkoutRouter = Router();

checkoutRouter.get("/payment-links", checkoutController.listPaymentLinks);
checkoutRouter.post("/payment-links", checkoutController.createPaymentLink);

export default checkoutRouter;
