import { Router } from "express";
import * as notificationWebHookController from "../controllers/notificationWebHook.controller.js";

const notificationRouter = Router();

notificationRouter.post("/notifications-webhook", notificationWebHookController.paymentUpdated);

export default notificationRouter;
