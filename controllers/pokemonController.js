const db = require("../models");
 
// Defining methods for the pokemonController
module.exports = {
  findAll: function (req, res) {
    // console.log("finding");
    db.Pokemon
      .find()
      .sort({ dexNum: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Pokemon
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByDexNum: function (req, res) {
    db.Pokemon
      .findOne({ dexNum: parseInt(req.params.dex) })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function (req, res) {
    db.Pokemon
      .findOne({ indexedName: req.params.name })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  savePokemon: function (req, res) {
    res.json(req); // useless method
  },
  create: function (req, res) {
    db.Pokemon
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Pokemon
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Pokemon
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
