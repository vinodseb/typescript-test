import bodyParser from "body-parser";
import express, { Router } from "express";
import * as JournalService from "./services/journal";

const router: Router = express.Router();
const jsonParser = bodyParser.json();

router.route("/journal/:id*?")
    .get(JournalService.get)
    .post(jsonParser, JournalService.update)
    .put(jsonParser, JournalService.create)
    .delete(jsonParser, JournalService.remove);

export = router;
