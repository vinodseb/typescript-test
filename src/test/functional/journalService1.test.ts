import chai from "chai";
import chaiHttp from "chai-http";
import { Server } from "http";
import "mocha";
import { TestServer } from "./FunctionalTestUtil";

chai.use(chaiHttp);
let server: Server;

before(async () => {
    server = await TestServer();
});

describe("Journal API Request", () => {
    it("should return response on call", () => {
        return chai.request(server).get("/journal/1234")
            .then((res) => {
                chai.expect(res.body.title).to.has("Awesome Journal");
            });
    });
    it("should return response on call", () => {
        return chai.request(server).get("/journal/1234")
            .then((res) => {
                chai.expect(res.body.title).to.has("Awesome Journal");
            });
    });
});
