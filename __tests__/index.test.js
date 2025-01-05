const request = require("supertest");
const app = require("../server");

describe("Root Endpoint", () => {
  it("should return status 200 and the correct response text", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello World!");
  });
});

describe("About Endpoint", () => {
  it("should return status 200 and the correct response text", async () => {
    const res = await request(app).get("/about");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("We are ASL Deployment Team");
  });
});

describe("Nonexistent Endpoint", () => {
  it("should return status 404 for an unknown route", async () => {
    const res = await request(app).get("/nonexistent");
    expect(res.statusCode).toEqual(404);
  });
});

describe("Headers Test", () => {
  it("should not include the 'X-Powered-By' header", async () => {
    const res = await request(app).get("/");
    expect(res.headers["x-powered-by"]).toBeUndefined();
  });
});
