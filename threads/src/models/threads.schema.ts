import {model, Schema} from "mongoose";

const threadsSchema = new Schema({
  userId: String,
  title: String,
  content: String,
});

export const Threads = model("Threads", threadsSchema);
