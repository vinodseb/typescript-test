import { expect } from "chai";
import "mocha";
import { getCurrentDate } from "../main/services/journal";

describe("getCurrentDate function", () => {
    it("should return current date", () => {
        const currentDate: Date = getCurrentDate();
        expect(currentDate.toISOString()).to.equals(new Date().toISOString());
    });
});
