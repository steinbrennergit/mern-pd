const router = require("express").Router();
const pokemonRoutes = require("./pokemon");

// Pokemon routes
router.use("/pokemon", pokemonRoutes);
 
module.exports = router;
