require("dotenv").config();
const getAlldogs = require("../helpers/getAlldogs");

//Controller to bring all dogs either by their id or UUID
const getDogById = async (req, res) => {
  try {
    const { id } = req.params;
    if (+id <= 0) throw Error("There aren't any dogs with that id");
    const dogsTotal = await getAlldogs();
    let dogId = dogsTotal.filter((el) => el.id == id);
    return res.status(200).json(dogId);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = getDogById;
