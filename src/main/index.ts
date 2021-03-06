import express, { Express } from "express";
import {getConfig} from "./config";
import logger from "./logger";
import router from "./routes";

const app: Express = express();
const port: number =  +process.env.PORT || 8080;

app.use("/", router);

const server = app.listen(port, () => {
    logger.info(`${getConfig().local.path} server started at http://localhost:${port}`);
});

export = server;
