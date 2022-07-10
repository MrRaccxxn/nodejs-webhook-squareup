import { Router } from "express";
import checkoutRouter from "./checkout.route.js";
import notificationRouter from "./notificationWebHook.route.js"

const rootRouter = Router();

rootRouter.use("/square-api", checkoutRouter);
rootRouter.use("/", notificationRouter);

export default rootRouter;
