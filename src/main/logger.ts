import winston, { Logger } from "winston";

const logger: Logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf((info) => {
            return `${info.timestamp} ${info.level}: ${info.message}`;
        })
    ),
    level: "info",
    transports: [new winston.transports.Console()]
});

export = logger;
