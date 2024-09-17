import express from "express";
import {createProxyMiddleware} from "http-proxy-middleware";

const app = express();


app.use(
  "/threads",
  createProxyMiddleware({
    target: "http://threads:8001",
  })
);

app.listen(8010, () => console.log("running on port 8010"));
