import { Request, Response } from "express";
import logger = require("../logger");
import { IJournal } from "../model";

export const get = (req: Request, res: Response): void => {
    res.send({
        created: new Date(),
        enabled: true,
        number: req.params.id,
        title: "Awesome Journal",
        updated: new Date(),
        widgetEnabled: true
    });
};

export const create = (req: Request, res: Response) => {
    const journal: IJournal = req.body;
    logger.log("info", `journal ${JSON.stringify(journal)} created`);
    res.send(journal);
};

export const update = (req: Request, res: Response) => {
    const journal: IJournal = req.body;
    logger.log("info", `journal ${JSON.stringify(journal)} updated`);
    res.send(journal);
};

export const remove = (req: Request, res: Response) => {
    const journal: IJournal = req.body;
    logger.log("info", `journal ${JSON.stringify(journal)} deleted`);
    res.send(journal);
};
