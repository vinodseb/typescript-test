// tslint:disable:no-eval
import ts from "typescript";
import config from "./application.json";

const EXPRESSION_START = "{{";
const EXPRESSION_END = "}}";

export const populateEnvironmentVariables = (obj: any): any => {
    Object.keys(obj)
        .forEach((key: string) => {
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

export const isString = (value: any): boolean =>
    typeof value === "string";

export const isExpression = (value: string): boolean => {
    value = value?.trim();
    return (value?.startsWith(EXPRESSION_START) && value?.endsWith(EXPRESSION_END)) ?? false;
};

export const extractVariableName = (value: string): string => {
    if (!value) {
        return undefined;
    }
    value = value.trim();
    const startPosition = EXPRESSION_START.length;
    const endPosition = value.length - (EXPRESSION_START.length + EXPRESSION_END.length);
    const variableName = value.substr(startPosition, endPosition).trim();
    return variableName.length > 0 ? variableName : undefined;
};

export const constructExpression = (variableName: string): string => {
    if (!variableName) {
        return undefined;
    }
    variableName = variableName.trim();
    return variableName.length > 0 ? `process.env.${variableName}` : undefined;
};

export const evaluateExpression = (expression: string): string =>
    eval(ts.transpile(expression ?? ""));

populateEnvironmentVariables(config);
export const getConfig = (): any => config;
