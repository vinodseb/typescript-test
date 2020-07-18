// tslint:disable:no-unused-expression
import chai from "chai";
import {constructExpression, evaluateExpression, extractVariableName, isExpression, isString} from "../main/config";

const VARIABLE_ONE = "test";

before( async () => {
    process.env.VARIABLE_ONE = VARIABLE_ONE;
});

describe("Given Config Module", () => {
    describe("When isString is called", () => {
        it("Should return true with a valid string", () => {
            chai.expect(isString("${VALID_STRING}")).to.be.equal(true);
            chai.expect(isString("")).to.be.equal(true);
        });

        it("Should return false with non strings", () => {
            chai.expect(isString({test: "test"})).to.be.equal(false);
        });

        it("Should return false with nulls", () => {
            chai.expect(isString(undefined)).to.be.equal(false);
            chai.expect(isString(null)).to.be.equal(false);
        });
    });

    describe("When isExpression is called", () => {
        it("Should return true with a valid expression", () => {
            chai.expect(isExpression("${VALID_EXPRESSION}")).to.be.equal(true);
            chai.expect(isExpression(" ${VALID_EXPRESSION}    ")).to.be.equal(true);
        });

        it("Should return false with invalid expressions", () => {
            chai.expect(isExpression("")).to.be.equal(false);
        });

        it("Should return false with nulls", () => {
            chai.expect(isExpression(undefined)).to.be.equal(false);
            chai.expect(isExpression(null)).to.be.equal(false);
        });
    });

    describe("When extractVariableName is called", () => {
        it("Should return variableName from a valid expression", () => {
            chai.expect(extractVariableName("${VALID_EXPRESSION}")).to.be.equal("VALID_EXPRESSION");
            chai.expect(extractVariableName("${ VALID_EXPRESSION    }")).to.be.equal("VALID_EXPRESSION");
        });

        it("Should return undefined from an empty expression", () => {
            chai.expect(extractVariableName("${}")).to.be.undefined;
            chai.expect(extractVariableName("${      }")).to.be.undefined;
        });

        it("Should return undefined on a null expression", () => {
            chai.expect(extractVariableName(null)).to.be.undefined;
            chai.expect(extractVariableName(undefined)).to.be.undefined;
        });
    });

    describe("When constructExpression is called", () => {
        it("Should return env expression from a valid variable", () => {
            chai.expect(constructExpression("PATH")).to.be.equal("process.env.PATH");
            chai.expect(constructExpression("  PATH ")).to.be.equal("process.env.PATH");
        });

        it("Should return undefined from an empty variable", () => {
            chai.expect(constructExpression("")).to.be.undefined;
        });

        it("Should return undefined from a null value", () => {
            chai.expect(constructExpression(null)).to.be.undefined;
        });
    });

    describe("When evaluateExpression is called", () => {
        it("Should return value from a valid expression", () => {
            chai.expect(evaluateExpression("process.env.VARIABLE_ONE")).to.be.equal(VARIABLE_ONE);
            chai.expect(evaluateExpression(" process.env.VARIABLE_ONE ")).to.be.equal(VARIABLE_ONE);
        });

        it("Should return undefined from an empty expression", () => {
            chai.expect(evaluateExpression("")).to.be.undefined;
        });

        it("Should return undefined from a null expression", () => {
            chai.expect(evaluateExpression(null)).to.be.undefined;
        });
    });
});
