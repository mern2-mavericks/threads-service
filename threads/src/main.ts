import express from "express";
import {mongooseConnect} from "./utils/mongoose";
import dotenv from "dotenv";
import {threadsRouter} from "./routes/threads.route";
import {env} from "./utils/env";

dotenv.config();
const app = express();
mongooseConnect();
app.use(express.json());

app.use("/threads", threadsRouter);

app.listen(env.PORT, () => console.log(`running on port ${env.PORT}`));
