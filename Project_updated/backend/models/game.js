const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
  idPartita: { type:Number, required:true, unique:true },
  idClasse: {type:Number, required:true},
  idSquadra: {type:Number, required:true},
  currentStepId: {type:Number, required:true},
  statoStep: {type:String}
});

module.exports = mongoose.model('Game', gameSchema);


