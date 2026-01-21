const pokemonModel = require("../model/Pokemon.js");

const find = async (req, res) => {
  const pokemons = await pokemonModel.find();
  if (pokemons.length > 0) return res.status(200).json(pokemons);
  return res.status(404).json({ message: "Pokemons not found" });
};

const findById = async (req, res) => {
  const pokemons = await pokemonModel.findById(req.params.id);
  if (pokemons) return res.status(200).json(pokemons);
  return res.status(404).json({ message: "Pokemons not found" });
};

const create = async (req, res) => {
  try {
    const {
      name,
      type,
      EvolutionLvl,
      evolvesTo,
      evolvesFrom,
      weakness,
      skills,
      hiddenSkills,
      weight,
      region,
      pokedexId,
    } = req.body;

    const pokemon = await pokemonModel.create({
      name,
      type,
      EvolutionLvl,
      evolvesTo,
      evolvesFrom,
      weakness,
      skills,
      hiddenSkills,
      weight,
      region,
      pokedexId,
    });

    return res
      .status(201)
      .json({ message: "Pokemon created successfully", pokemon });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", err });
  }
};
const update = async (req, res) => {
  try {
    const {
      name,
      type,
      EvolutionLvl,
      evolvesTo,
      evolvesFrom,
      weakness,
      skills,
      hiddenSkills,
      weight,
      region,
      pokedexId,
    } = req.body;

    const pokemon = await pokemonModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        type,
        EvolutionLvl,
        evolvesTo,
        evolvesFrom,
        weakness,
        skills,
        hiddenSkills,
        weight,
        region,
        pokedexId,
      },
      { new: true, runValidators: true },
    );

    if (!pokemon) return res.status(404).json({ message: "Pokemon not found" });
    console.log(pokemon);
    return res.json({ message: "Pokemon updated", pokemon });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", err });
  }
};
const destroy = async (req, res) => {
  const pokemon = await pokemonModel.findByIdAndDelete(req.params.id, {
    new: true,
    runValidators: true,
  });
  if (!pokemon) return res.status(404).json({ message: "Pokemon not found" });
  return res.status(200).json({ message: "Pokemon deleted", pokemon });
};

module.exports = { find, findById, create, update, destroy };
