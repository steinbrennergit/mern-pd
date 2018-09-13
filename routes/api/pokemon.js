const router = require("express").Router();
const pokemonController = require("../../controllers/pokemonController");

// Matches with "/api/pokemon/"
router.route("/")
    .get(pokemonController.findAll);

// Matches with "/api/pokemon/:id"
router.route("/:id")
    .get(pokemonController.findById)
    .post(pokemonController.savePokemon);

// Matches with "/api/pokemon/in/:name"
router.route("/in/:name")
    .get(pokemonController.findByName);

// Matches with "/api/pokemon/dex/:dex"
router.route("/dex/:dex")
    .get(pokemonController.findByDexNum);

module.exports = router;