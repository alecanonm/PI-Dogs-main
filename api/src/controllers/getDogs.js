const getAlldogs = require("../helpers/getAlldogs");

//Controller to bring all dogs etiher from the API as like from  data base
const getDogs = async (req, res) => {
  try {
    const response = await getAlldogs();
    if (!response) throw Error("Something went wrong!");
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDogs;
