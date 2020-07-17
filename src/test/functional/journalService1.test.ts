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

    it("should return response on call", (done) => {
        chai.request(server).get("/journal/1234")
            .then((res) => {
                chai.expect(res.body).to.have.deep.nested.property("title", "Awesome Journal");
                done();
            })
            .catch((err) => done(err));
    });

    it("should return response on call", (done) => {
        chai.request(server).get("/journal/1234")
            .then((res) => {
                chai.expect(res.body).to.have.deep.nested.property("title", "Awesome Journal");
                done();
            })
            .catch((err) => done(err));
    });
});
