// tslint:disable:no-eval
import ts from "typescript";
import config from "./application.json";

const populateEnvironmentVariables = (obj: any): any => {
    Object.keys(obj)
        .forEach((key) => {
            const value = obj[key];
            if (typeof value === "string") {
                if (value.startsWith("process.env")) {
                    obj[key] = eval(ts.transpile(value));
                }
            } else {
                obj[key] = populateEnvironmentVariables(value);
            }
        });
    return obj;
};

populateEnvironmentVariables(config);
export = config;
