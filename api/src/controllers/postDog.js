const { Dog } = require("../db");

//controller to create a new dog into data base
const postDog = async (req, res) => {
  try {
    const { id, name, height, weight, age, image, temperament } = req.body;

    if (
      name === "" ||
      height === "" ||
      weight === "" ||
      age === "" ||
      temperament === ""
    )
      throw Error({ error: "Wow! fill all the fields" });

    const newDog = await Dog.create({
      name,
      height,
      weight,
      age,
      image,
    });

    newDog.addTemperament(temperament);

    res.status(201).json({ success: "A new dog was created" });
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

module.exports = postDog;
