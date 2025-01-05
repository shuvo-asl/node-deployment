const server = require("../index");
const request = require("supertest");

describe("Server Initialization", () => {
  it("should start the server without errors", (done) => {
    const port = 5000;
    const testServer = server.listen(port, () => {
      testServer.close(done); // Cleanly stop the server after the test
    });
  });
});
