import { Server } from "http";
import "mocha";
import portfinder from "portfinder";

export const TestServer = async (): Promise<Server> => {
    process.env.PORT = String(await portfinder.getPortPromise({ port: 8080 }));
    const server = require("../../main/index");
    return server;
};
