const mongoose = require("mongoose");
const db = require("../models");
const fs = require("fs");

// This file removes all Pokemon from our DB,
// then reads and parses CSV files for import into our DB

function compare(a, b) {
  return (a.dexNum - b.dexNum);
}

function pushToDb(seed) {
  db.Pokemon.insertMany(seed).then((err, docs) => {
    if (err) console.log(err);

    console.log("#####\nseeding done\n#####\n");
    mongoose.disconnect();
  });
}

function seedMe() {
  console.log("#####\nseeding\n#####\n");
  fs.readFile("./data/Pokemon.csv", "utf8", (err, data) => {
    const seed = [];
    const lines = data.split("\n");
    const splitLines = lines.map(line => line.split(","));
    splitLines.forEach((data) => {
      const pokemon = {
        dexNum: data[0],
        indexedName: data[1],
        name: data[2],
        type1: data[3],
        type2: data[4],
        total: data[5],
        hp: data[6],
        atk: data[7],
        def: data[8],
        spAtk: data[9],
        spDef: data[10],
        speed: data[11],
        gen: data[12],
        legendary: data[13]
      }

      seed.push(pokemon);
    });

    seed.sort(compare);

    fs.readFile("./data/images.csv", "utf8", (err, data) => {
      const imgLines = data.split("\n");
      const splitImgs = imgLines.map(line => line.split(","));
      const imgs = splitImgs.map((arr) => {
        return {
          dexNum: arr[0],
          img: arr[1],
          sprite: arr[2]
        }
      });

      imgs.sort(compare);
      imgs.forEach((data, i) => {
        if (data.dexNum !== seed[i].dexNum) {
          console.log("FAILURE AT DEXNUM " + data.dexNum);
        }

        seed[i].img = data.img;
        seed[i].sprite = data.sprite;
      });

      seed.shift();

      pushToDb(seed);
    });
  });
}

// db.Pokemon.findOne({ dexNum: 5 }).then((dbModel => console.log(dbModel)));

db.Pokemon.remove().then((err, docs) => {
  if (err) console.log(err);

  seedMe();
});

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pokedex"
);