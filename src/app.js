import express from "express";
import morgan from "morgan";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import rootRouter from "./routes/index.js";

//This is a global var that should be changed for db, use this just for test purpose
export let socketPaymentIds = new Map();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(rootRouter);
export const server = http.createServer(app);

export const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on('connection', (socket) => {
    socket.on('paymentStarted', (data) => {
        socketPaymentIds.set(data.paymentLink.orderId, socket);
    });
});