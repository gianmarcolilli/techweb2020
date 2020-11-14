const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
  title: {type:String, required:true},
  didascalia : { type:String,required:true},
  id: { type:String},
  fasciaEta: { type: String },
  image: {type:String},
  attivita: [
    {
      activityId : { type: String},
      activityTitle : { type: String}
    }
  ]}
);

module.exports = mongoose.model('Story', storySchema);
