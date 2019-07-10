import logger = require("../logger");
import { Journal } from "../model";

class JournalService {
    constructor() {
    }

    get = (journalNumber: Number): Journal => {
        return {
            created: new Date(),
            enabled: true,
            number: journalNumber,
            title: "Awesome Journal",
            updated: new Date(),
            widgetEnabled: true
        };
    };
    
    create = (journal: Journal) => {
        logger.log('info', `journal ${JSON.stringify(journal)} created`);
    }
    
    update = (journal: Journal) => {
        logger.log('info', `journal ${JSON.stringify(journal)} updated`);
    }
    
    delete = (journal: Journal) => {
        logger.log('info', `journal ${JSON.stringify(journal)} deleted`);
    }
}

export {
    JournalService
}