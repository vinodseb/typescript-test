import express, { 
    Request, 
    Response, 
    Router 
} from "express";
import { JournalService } from "./services/journal";
import { Journal } from "./model";
import bodyParser from 'body-parser';

const router: Router = express.Router();
const journalService = new JournalService();
const jsonParser = bodyParser.json();

router.route('/journal/:id*?')
    .get((req: Request, res: Response) => {
        const journal = journalService.get(req.params.id); 
        res.send(journal);
    })
    .post(jsonParser, (req: Request, res: Response) => {
        journalService.update(req.body as Journal);
        res.send('Journal Updated')
    })
    .put(jsonParser, (req: Request, res: Response) => {
        journalService.create(req.body as Journal);
        res.send('New Journal Created')
    })
    .delete(jsonParser, (req: Request, res: Response) => {
        journalService.delete(req.body as Journal);
        res.send('Journal Deleted')
    })

export = router