const server = require("../index");

describe("Server Initialization", () => {
  it("should start the server and close it without errors", async () => {
    const port = 5000;
    const testServer = await new Promise((resolve, reject) => {
      const srv = server.listen(port, (err) => {
        if (err) reject(err);
        else resolve(srv);
      });
    });

    // Assert server is running (optional)
    expect(testServer.listening).toBe(true);

    // Close the server
    await new Promise((resolve, reject) => {
      testServer.close((err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  });
});
