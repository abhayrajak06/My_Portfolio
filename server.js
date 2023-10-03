import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRoute from "./routes/portfolioRoute.js";

//dotenv configuration
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/portfolio", emailRoute);

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
