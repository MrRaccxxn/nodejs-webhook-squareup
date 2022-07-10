import { Client } from 'square'
import dotenv from "dotenv";

dotenv.config();

// Square client config
const config = {
    environment: process.env.SQUARE_ENVIRONMENT,
    accessToken: process.env.SQUARE_ACCESS_TOKEN
}

// Configure instance of Square client
const squareClient = new Client(config)

export default squareClient;
