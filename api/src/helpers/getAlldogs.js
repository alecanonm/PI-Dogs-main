const { Dog, Temperament } = require("../db");
require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

//this method was created to return  all dogs in each controller
const getAlldogs = async () => {
  const response = await axios.get(URL);
  const dbDogs = await Dog.findAll({
    include: [{ model: Temperament }],
  });
  const allDogs = [...response.data, ...dbDogs];
  return allDogs;
};

module.exports = getAlldogs;
