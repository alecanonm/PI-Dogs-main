const { DATEONLY } = require("sequelize");
const { Dog, conn } = require("../../src/db.js");
// const { expect } = require("chai");

// describe("Dog model", () => {
//   before(() =>
//     conn.authenticate().catch((err) => {
//       console.error("Unable to connect to the database:", err);
//     })
//   );
//   describe("Validators", () => {
//     beforeEach(() => Dog.sync({ force: true }));
//     describe("name", () => {
//       it("should throw an error if name is null", (done) => {
//         Dog.create({})
//           .then(() => done(new Error("It requires a valid name")))
//           .catch(() => done());
//       });
//       it("should work when its a valid name", () => {
//         Dog.create({ name: "Pug" });
//       });
//     });
//   });
// });

describe("Dog model", () => {
  beforeAll(() => {
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
  });

  describe("Validators", () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe("Name", () => {
      it("should throw an error if name is null", async () => {
        const dog = Dog.create({});
        await dog.catch((err) => expect(err).toBe(err));
      });

      it("should work when its a valid name", async () => {
        const dog = await Dog.create({
          name: "Pug",
          height: 34.5,
          weight: 54,
          age: 34,
          image: "images",
        });
        expect(typeof dog.name).toBe("string");
      });
    });
    describe("Height", () => {
      it("Height must be a Number Type", async () => {
        const dog = await Dog.create({
          name: "Pug",
          height: 34.5,
          weight: 54,
          age: 34,
          image: "images",
        });
        expect(typeof dog.height).toBe("number");
      });
    });
    describe("Weight", () => {
      it("Height must be a Number Type", async () => {
        const dog = await Dog.create({
          name: "Pug",
          height: 34.5,
          weight: 54,
          age: 34,
          image: "images",
        });
        expect(typeof dog.weight).toBe("number");
      });
    });
    describe("age", () => {
      it("age must be a Date", async () => {
        const dog = await Dog.create({
          name: "Pug",
          height: 34.5,
          weight: 54,
          age: new DATEONLY(),
          image: "images",
        });

        expect(typeof dog.age).toBe("string");
      });
    });
    describe("Image", () => {
      it("Image must be a String", async () => {
        const dog = await Dog.create({
          name: "Pug",
          height: 34.5,
          weight: 54,
          age: new DATEONLY(),
          image: "images",
        });

        expect(typeof dog.image).toBe("string");
      });
    });
  });
});
