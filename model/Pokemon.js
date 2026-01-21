const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required:  [true, "Name is required"]
  },
  type: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type',
  }],
  EvolutionLvl: [{
    type: Number,
    required:  [true, "Evolution level is required"]
  }],
  evolvesFrom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pokemon',
    default: null
  },
  evolvesTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pokemon',
    default: null
  },
  weakness: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type',
  }],
  skills: [{
    type: String,
    required:  [true, "Skills is required"]
  }],
  hiddenSkills: [{
    type: String,
    required:  [true, "Hidden skills is required"]
  }],
  weight: {
    type: String,
    required:  [true, "Weight is required"]
  },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region',
    required:  [true, "Region is required"]
  },
  pokedexId: {
    type: String,
    required:  [true, "PokedexId is required"]
  }
}, { timestamps: true });

PokemonSchema.methods.getByType = function(type) {
  return this.model('Pokemon').find({ type });
}

PokemonSchema.methods.getByName = function(name) {
  return this.model('Pokemon').find({ name});
}

PokemonSchema.methods.getByRegion = function(region) {
  return this.model('Pokemon').find({ region });
}
PokemonSchema.methods.getByPokedexID = function(pokedexID) {
  return this.model('Pokemon').find({ pokedexID });
}

module.exports = mongoose.model('Pokemon', PokemonSchema);