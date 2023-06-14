const supertest = require("supertest");
const server = require("../../src/app");

describe("Dogs", () => {
  describe("getDog Routes", () => {
    describe("getting all dogs from the API", () => {
      it("should return a 200", async () => {
        await supertest(server).get("/dogs").expect(200);
      });
    });
    describe("getting a dog by id", () => {
      it("should return a 200", async () => {
        await supertest(server).get("/dogs/1").expect(200);
      });
      it("should return a 404 if the id does not exist", async () => {
        await supertest(server).get("/dogs/-1").expect(404);
      });
    });
    describe("getting a dog by name (breed)", () => {
      it("should return a 200", async () => {
        await supertest(server).get("/dogs/name?name=bulldog").expect(200);
      });
      it("should return a 404 when the breed it's been not founded", async () => {
        await supertest(server).get("/dogs/name?name=batman").expect(404);
      });
    });
    describe("Creating a new dog", () => {
      it("should return a 201 if the dog was created", async () => {
        const newDog = {
          id: 5,
          name: "Daren",
          height: "1.56",
          weight: "45",
          age: 22,
          image: "DGHSID",
        };
        await supertest(server).post("/dogs").send(newDog).expect(201);
      });
    });
  });
});
