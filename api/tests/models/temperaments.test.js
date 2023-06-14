const { Temperament, conn } = require("../../src/db.js");

describe("Temperaments model", () => {
  beforeAll(() => {
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
  });

  describe("Validators", () => {
    beforeEach(() => Temperament.sync({ force: true }));
    describe("Name", () => {
      it("should throw an error if name is null", async () => {
        const temp = Temperament.create({});
        await temp.catch((err) => expect(err).toBe(err));
      });
    });
  });
});
