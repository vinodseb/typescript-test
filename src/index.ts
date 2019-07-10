import express, {
    Express, Router
} from "express";
import router from './routes';
import logger from './logger';

const app: Express = express();
const port: Number = 8080;

app.use('/', router);

app.listen(port, () => {
    logger.log('info', `server started at http://localhost:${port}`);
});
