const { Temperament } = require("../db");
require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

//Controller to store all the temperaments that we could get from API
const getTemperaments = async (_, res) => {
  try {
    const response = await axios.get(URL);

    if (!response) throw Error("Something went wrong!");

    const temperaments = response.data.map((data) => data.temperament);
    let dataTemperament = temperaments.join().split(",");
    dataTemperament = dataTemperament.map((el) => el.trim());
    const uniqueTemperament = [...new Set(dataTemperament)];
    uniqueTemperament.forEach((data) => {
      data !== "" && Temperament.findOrCreate({ where: { name: data } });
    });
    const allTemperaments = await Temperament.findAll();
    res.status(200).json(allTemperaments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = getTemperaments;
