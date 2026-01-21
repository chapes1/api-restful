const TypeModel = require("../model/Type.js");

const find = async (req, res) => {
  const types = await TypeModel.find();
  if (types.length > 0) return res.status(200).json(types);
  return res.status(404).json({ message: "Type not found" });
};

const findById = async (req, res) => {
  const type = await TypeModel.findById(req.params.id);
  if (type) return res.status(200).json(type);
  return res.status(404).json({ message: "Type not found" });
};
const create = async (req, res) => {
  try {
    const { name } = req.body;
    const exists = await TypeModel.alreadyExist(name);
    if (exists) return res.status(409).json({ message: "Type already exists" });

    const type = await TypeModel.create({ name });
    return res.status(201).json({ message: "Type created successfully", type });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", err });
  }
};
const update = async (req, res) => {
  try {
    const { name } = req.body;
    const exists = await TypeModel.alreadyExist(name);
    if (exists) return res.status(409).json({ message: "Type already exists" });

    const type = await TypeModel.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true, runValidators: true },
    );

    if (!type) return res.status(404).json({ message: "Type not found" });

    return res.status(200).json({ message: "Type updated", type });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", err });
  }
};
const destroy = async (req, res) => {
  const type = await TypeModel.findByIdAndDelete(req.params.id, {
    new: true,
    runValidators: true,
  });
  if (!type) return res.status(404).json({ message: "Type not found" });
  return res.status(200).json({ message: "Type deleted", type });
};

module.exports = { find, findById, create, update, destroy };
