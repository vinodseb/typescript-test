import express, { Express } from "express";
import logger from "./logger";
import router from "./routes";

const app: Express = express();
const port: number = 8080;

app.use("/", router);

const server = app.listen(port, () => {
    logger.log("info", `server started at http://localhost:${port}`);
});

export = server;
