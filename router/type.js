const { Router } = require("express");
const router = Router();
const TypeController = require('../controllers/TypeController.js');

router.get('/', TypeController.find);
router.get('/:id', TypeController.findById);
router.post('/', TypeController.create);
router.delete('/:id', TypeController.destroy);
router.put('/:id', TypeController.update);

module.exports = router;
