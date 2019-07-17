import express, { Router } from "express";
import bodyParser from 'body-parser';
import { journal_service } from "./services/journal";

const router: Router = express.Router();
const jsonParser = bodyParser.json();

router.route('/journal/:id*?')
    .get(journal_service.get)
    .post(jsonParser, journal_service.update)
    .put(jsonParser, journal_service.create)
    .delete(jsonParser, journal_service.remove)

export = router