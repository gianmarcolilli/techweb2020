const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
  title: {type:String, required:true},
  didascalia : { type:String,required:true},
  id: { type:String},
  fasciaEta: { type: String },
  image: {type:String},
  attivita: [
    {
      activityId : { type: Number,required:true},
      activityTitle : { type: String,required:true},
      action: { type: String,required:true},
      backImg: { type: String},
      actionImg : { type: String},
      puzzleImg : { type: String},
      difficulty : { type: String},
      answers : {type: Array},
      quizCorrectIdx: {type: Number},
      order: {type: Array},
      chatMessages : {type: Array},
      correctId :  {type: Number,required:true},
      wrongId: {type: Number,required:true},
      risposta : { type: String}

    }
  ]}
);

module.exports = mongoose.model('Story', storySchema);
