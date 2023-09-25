require("dotenv").config();
const getAlldogs = require("../helpers/getAlldogs");

//Controller to get all dogs by its name (Breed)
const getDosByName = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) return;

    const response = await getAlldogs();

    if (!response) throw Error("Something went wrong!");

    const filtered = response.filter((dog) => {
      return dog.name.toLowerCase().includes(name.toLowerCase());
    });

    if (filtered.length === 0) throw Error("Dogs not found!");

    res.status(200).json(filtered);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = getDosByName;
