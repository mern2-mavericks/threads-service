import express from "express";
import { mongooseConnect } from "./utils/mongoose";
import dotenv from "dotenv";
import { threadsRouter } from "./routes/threads.route";

 
dotenv.config();

const app = express();
app.use(express.json());

mongooseConnect();

app.use("/threads", threadsRouter);


app.listen(8000)