const { ViewEncapsulation } = require("@angular/core");
const express = require("express");
const { create, db } = require("../models/game");
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Game = require("../models/game");

const router = express.Router();

router.post("", (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");

  let findQry = Game.find();

  findQry
    .then((documents) => {
      return Game.count();
    })
    .then((lunghezza) => {
      const game = new Game({
        idPartita: req.body.idPartita,
        idClasse: req.body.idClasse,
        idSquadra: req.body.idSquadra,
        numeroPlayer: req.body.numeroPlayer,
        currentStepId: -1,
        nextStepId: -1,
        variabileOk: 0,
        score:0
      });

      game
        .save()
        .then((createdGame) => {
          res.status(201).json({
            message: "Game added successfully",
            game: {
              ...createdGame,
              idPartita: req.body.idPartita,
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
});

router.put("/:idPartita", (req, res, next) => {
  // if (req.body.prossimoId && variabileOk == 0) {
  //   let gameIdentificato = Game.find({ idPartita: idPartita });
  //   gameIdentificato.nextStepId = req.body.prossimoId
  //   gameIdentificato.variabileOk = 1

  //   // fino a qui
  //   gameIdentificato.save();
  // } else if (req.body.prossimoId && gameIdentificato.variabileOk > 1 && gameIdentificato.variabileOk < gameIdentificato.numeroPlayer) {
  //   gameIdentificato.variabileOk++;
  // }
  const game = Game.findOne({
    idPartita: req.params.idPartita,
  }).then((game) => {
    if (game) {
      if (
        req.body.prossimoId != undefined &&
        game.variabileOk >= 0 &&
        game.variabileOk < game.numeroPlayer
      ) {
        //Se non sono il primo ad entrarci
        if (game.variabileOk > 0) {
          console.log("sono il n " + (game.variabileOk + 1));
          Game.findOneAndUpdate(
            { idPartita: req.params.idPartita },
            {
              idPartita: req.params.idPartita,
              idClasse: game.idClasse,
              idSquadra: game.idSquadra,
              numeroPlayer: game.numeroPlayer,
              currentStepId: game.currentStepId,
              nextStepId: game.nextStepId,
              score : game.score,
              variabileOk: game.variabileOk + 1,
            },
            { new: true }
          )
            .then((result) => {
              res
                .status(200)
                .json({ message: "Update successful!", result: result });
            })
            .catch((error) => {
              res.status(500).json({
                message: "Couldn't update game" + "ERRORE: " + error,
              });
            });
        } else if (game.variabileOk == 0) {
          //Se sono il primo a entrarci
          console.log("sono il primo e sto impostando come score : "+ req.body.score);
          Game.findOneAndUpdate(
            { idPartita: req.params.idPartita },
            {
              idPartita: req.params.idPartita,
              idClasse: game.idClasse,
              idSquadra: game.idSquadra,
              numeroPlayer: game.numeroPlayer,
              currentStepId: game.currentStepId,
              nextStepId: req.body.prossimoId,
              score : req.body.score?req.body.score:game.score,
              variabileOk: 1,
            },
            { new: true }
          )
            .then((result) => {
              res
                .status(200)
                .json({ message: "Update successful!", result: result });
            })
            .catch((error) => {
              res.status(500).json({
                message: "Couldn't update game" + "ERRORE: " + error,
              });
            });
        }
      } else if (game.variabileOk == game.numeroPlayer) {
        //Se sono l'ultimo a entrarci
        console.log("sono l ultimooooo");
        Game.findOneAndUpdate(
          { idPartita: req.params.idPartita },
          {
            idPartita: req.params.idPartita,
            idClasse: game.idClasse,
            idSquadra: game.idSquadra,
            numeroPlayer: game.numeroPlayer,
            currentStepId: game.nextStepId,
            nextStepId: -1,
            score : game.score,
            variabileOk: 0,
          },
          { new: true }
        )
          .then((result) => {
            res
              .status(200)
              .json({ message: "Update successful!", result: result });
          })
          .catch((error) => {
            res.status(500).json({
              message: "Couldn't update game" + "ERRORE: " + error,
            });
          });
      }
    } else {
      res.status(404).json({ message: "Game not found!" });
    }
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

router.get("/:idPartita", (req, res, next) => {
  Game.findOne({
    idPartita: req.params.idPartita,
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
