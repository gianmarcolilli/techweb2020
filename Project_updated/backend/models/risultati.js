const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const risultatiSchema = mongoose.Schema({
  idRisultato : { type:number },
  idPartita: {type:String, required:true, unique:true},
  idSquadra: {type:String, required:true},
  currentStepId: {type:Number, required:true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Risultati', risultatiSchema);


