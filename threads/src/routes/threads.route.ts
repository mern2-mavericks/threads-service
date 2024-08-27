import express from "express";

import { threadsController } from "../controllers/threads.controller";

export const threadsRouter = express.Router();


threadsRouter.get("/", threadsController.handleGetAll);
threadsRouter.get("/:id", threadsController.handleGetById);
threadsRouter.post("/", threadsController.handleCreate);
threadsRouter.patch("/:id", threadsController.handleUpdate);
threadsRouter.delete("/:id", threadsController.handleDelete)