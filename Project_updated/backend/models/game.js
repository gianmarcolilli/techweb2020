const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
  idPartita: { type:Number, unique:true, required:true},
  idClasse: {type:Number, required:true},
  idSquadra: {type:Number, required:true},
  numeroPlayer: {type:Number},
  currentStepId: {type:Number, required:true},
  nextStepId: {type:Number},
  variabileOk: {type:Number},
  score: {type:Number}
});

module.exports = mongoose.model('Game', gameSchema);


