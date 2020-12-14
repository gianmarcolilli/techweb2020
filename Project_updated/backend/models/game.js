const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
  idPartita: { type:Number, unique:true, required:true},
  idClasse: {type:Number, required:true},
  idSquadra: {type:Number, required:true},
  numeroPlayer: {type:Number},
  currentStepId: {type:Number, required:true},
  statoStep: {type:String}
});

module.exports = mongoose.model('Game', gameSchema);


