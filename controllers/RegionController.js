const RegionModel = require('../model/Region.js');

const find = async(req, res)=>{
  const regions = await RegionModel.find();
  if(regions.length > 0) return res.status(200).json(regions);
  return res.status(404).json({message: 'Region not found'});
}

const findById = async(req, res)=>{
  const region = await RegionModel.findById(req.params.id);
  if(region) return res.status(200).json(region);
  return res.status(404).json({message: 'Region not found'});
}

const create = async(req, res) => {
  try{
    const { name } = req.body;
    const exists = await RegionModel.alreadyExist(name);
    if (exists) return res.status(409).json({ message: "Region already exists" });

    const region = await RegionModel.create({ name });
    return res.status(201).json({ message: "Region created successfully", region });
  
  }catch(err){
    console.error(err);
    return res.status(500).json({ message: "Server error", err });
  }
}
const update = async(req, res) => {
  try{
    const { name } = req.body;
    const exists = await RegionModel.alreadyExist(name);
    if (exists) return res.status(409).json({ message: "Region already exists" });

    const region = await RegionModel.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true, runValidators: true }
    );

    if (!region) return res.status(404).json({ message: 'Region not found' });

    return res.status(200).json({ message: "Region updated", region });
  }catch(err){
    console.error(err);
    return res.status(500).json({ message: "Server error", err });
  }
}
const destroy = async(req, res) => {
  const region = await RegionModel.findByIdAndDelete(req.params.id, {new: true, runValidators: true});
  if (!region) return res.status(404).json({ message: 'Region not found' });
  return res.status(200).json({message: 'Region deleted', region});
}

module.exports = {find, findById, create, update, destroy}