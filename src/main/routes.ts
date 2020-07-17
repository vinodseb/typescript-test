import bodyParser from "body-parser";
import express, { Router } from "express";
import * as journalService from "./services/journal";

const router: Router = express.Router();
const jsonParser = bodyParser.json();

router.route("/journal/:id*?")
    .get(journalService.get)
    .post(jsonParser, journalService.update)
    .put(jsonParser, journalService.create)
    .delete(jsonParser, journalService.remove);

export = router;
