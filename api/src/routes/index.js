const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require("../controllers/getDogs");
const getDogById = require("../controllers/getDogById");
const getDosByName = require("../controllers/getDogsByName");
const postDog = require("../controllers/postDog");
const getTemperaments = require("../controllers/getTemperaments");
const getDogsFromDB = require("../controllers/getDogsFromDB");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs/name", getDosByName);
router.get("/dogs", getDogs);
router.get("/dogs/db", getDogsFromDB);
router.post("/dogs", postDog);
router.get("/dogs/:id", getDogById);
router.get("/temperaments", getTemperaments);

module.exports = router;
