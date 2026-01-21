const { Router } = require("express");
const router = Router();
const pokemonController = require("../controllers/PokemonController.js");

router.get("/", pokemonController.find);
router.get("/:id", pokemonController.findById);
router.post("/", pokemonController.create);
router.delete("/:id", pokemonController.destroy);
router.put("/:id", pokemonController.update);

module.exports = router;
