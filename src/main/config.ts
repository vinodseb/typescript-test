// tslint:disable:no-eval
import ts from "typescript";
import config from "./application.json";

const EXPRESSION_START = "{{";
const EXPRESSION_END = "}}";

const populateEnvironmentVariables = (obj: any): any => {
    Object.keys(obj)
        .forEach((key) => {
            const value = obj[key];
            if (isString(value)) {
                if (isExpression(value)) {
                    const variableName = extractVariableName(value);
                    const expression = constructExpression(variableName);
                    obj[key] = evaluateExpression(expression) ?? value;
                }
            } else {
                obj[key] = populateEnvironmentVariables(value);
            }
        });
    return obj;
};

const isString = (value: any): boolean =>
    typeof value === "string";

const isExpression = (value: string): boolean =>
    value.startsWith(EXPRESSION_START) && value.endsWith(EXPRESSION_END);

const extractVariableName = (value: string): string =>
    value.substr(EXPRESSION_START.length, value.length - (EXPRESSION_START.length + EXPRESSION_END.length)).trim();

const constructExpression = (variableName: string): string =>
    `process.env.${variableName}`;

const evaluateExpression = (expression: string): string =>
    eval(ts.transpile(expression));

populateEnvironmentVariables(config);
export = config;
