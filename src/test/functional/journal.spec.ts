import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import server from "../../main/index";

chai.use(chaiHttp);

// before(async () => {
//     process.env.PORT = await portfinder.getPortPromise({ port: 10002 });
// });

describe("Journal API Request", () => {
    it("should return response on call", () => {
        return chai.request(server).get("/journal/1234")
            .then((res) => {
                chai.expect(res.body.title).to.eql("Awesome Journal");
            });
    });
});

after(async () => {
    server.close();
});
