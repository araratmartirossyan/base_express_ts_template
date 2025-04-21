import express, { json } from "express";
import cors from "cors";
import "dotenv/config";
import customerController from './modules/customer/customer.controller'

const app = express();

app.use('/customers', customerController);

app.use(cors());
app.use(json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server has been started on port:", PORT);
  console.log(`URL: http://localhost:${PORT}`);
});
