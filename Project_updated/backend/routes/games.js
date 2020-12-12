const { ViewEncapsulation } = require("@angular/core");
const express = require("express");
const game = require("../models/game");
const { create, db } = require("../models/game");

const Game = require("../models/game");

const router = express.Router();



router.post(
  "",
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");

    let findQry = Game.find();

    findQry
      .then((documents) => {
        return Game.count();
      })
      .then((lunghezza) => {
          const game = new Game({
            idPartita: lunghezza,
            idClasse: req.body.idClasse,
            idSquadra: req.body.idSquadra,
            currentStepId: -1,
            statoStep: "unresolved"
          });

          game
            .save()
            .then((createdGame) => {
              res.status(201).json({
                message: "Game added successfully",
                game: {
                  ...createdGame,
                  idPartita: lunghezza,
                },
              });
            })
            .catch((e) => {
              console.log(e.message);
              res.status(500).json({
                message: "Error!",
              });
            });
      });
  }
);

router.put("/:idPartita", (req, res, next) => {

  // se risposta data
  Game.updateOne(
    { idPartita: req.params.idPartita },
    {
      idPartita: req.params.idPartita,
      idClasse: req.body.idClasse,
      idSquadra: req.body.idSquadra,
      currentStepId: req.body.currentStepId,
      statoStep: "resolved"
    }

    //qui deve fare il polling
    //tutti gli altri procedono allo step successivo
    //un volta fatto cio
    // Game.updateOne(
    //   { id: req.params.id },
    //   {
    //     id: req.body.id,
    //     idClasse: req.body.idClasse,
    //     idSquadra: req.body.idSquadra,
    //     currentStepId: qui ci va il correct o il wrongId,
    //     statoStep: "unresolved"
    //   }
  )
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Cannot find game" });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Couldn't update game" + "ERRORE: " + error,
      });
    });
});


router.get("", (req, res, next) => {
  const postQuery = Game.find();
  let fetchedGames;

  postQuery
    .then((documents) => {
      fetchedGames = documents;
      return Game.count();
    })
    .then((count) => {
      res.status(200).json({
        message: "Games fetched successfully!",
        posts: fetchedGames,
        maxPosts: count,
      });
    });
});

router.get("/:id", (req, res, next) => {
  Game.findOne({
    id: req.params.id,
  }).then((game) => {
    if (game) {
      res.status(200).json(game);
    } else {
      res.status(404).json({ message: "Game not found!" });
    }
  });
});

// router.delete("/:id", (req, res, next) => {
//   listaId[req.params.id] = false;
//   Story.deleteOne({ id: req.params.id }).then((result) => {
//     if (result.n > 0) {
//       res.status(200).json({ message: "Deletion successful!" });
//     } else {
//       res.status(404).json({ message: "Not found!" });
//     }
//   });
// });

module.exports = router;
