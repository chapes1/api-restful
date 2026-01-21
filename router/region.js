const { Router } = require("express");
const router = Router();
const RegionController = require("../controllers/RegionController.js");

router.get("/", RegionController.find);
router.get("/:id", RegionController.findById);
router.post("/", RegionController.create);
router.delete("/:id", RegionController.destroy);
router.put("/:id", RegionController.update);

module.exports = router;
