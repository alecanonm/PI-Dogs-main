const supertest = require("supertest");
const server = require("../../src/app");

describe("Temperaments", () => {
  describe("Temperaments Routes", () => {
    describe("getting all the temperaments from the API", () => {
      it("should return a 200", async () => {
        await supertest(server).get("/temperaments").expect(200);
      });
    });
  });
});
