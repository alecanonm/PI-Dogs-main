const { Dog, Temperament } = require("../db");

//controller to bring all dogs from data base
const getDogsFromDB = async (_, res) => {
  try {
    const dbDogs = await Dog.findAll({
      include: [
        { model: Temperament, as: "temperaments", attributes: ["name"] },
      ],
    });

    if (!dbDogs) throw Error("There are no dogs in the data base");

    res.status(200).json(dbDogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDogsFromDB;
