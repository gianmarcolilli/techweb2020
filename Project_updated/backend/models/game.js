const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
  idPartita: { type:Number },
  idClasse: {type:String, required:true, unique:true},
  idSquadra: {type:String, required:true},
  currentStepId: {type:Number, required:true},
  statoStep: {type:String}
});

module.exports = mongoose.model('Game', gameSchema);


