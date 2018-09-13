const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  dexNum: { type: Number, required: true },
  indexedName: { type: String, required: true },
  name: { type: String, required: true },
  type1: { type: String, required: true },
  type2: { type: String },
  total: { type: Number, required: true },
  hp: { type: Number, required: true },
  atk: { type: Number, required: true },
  def: { type: Number, required: true },
  spAtk: { type: Number, required: true },
  spDef: { type: Number, required: true },
  speed: { type: Number, required: true },
  gen: { type: Number },
  legendary: { type: Boolean },
  img: { type: String, required: true },
  sprite: { type: String, required: true }
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;