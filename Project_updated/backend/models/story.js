const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
  title: {type:String, required:true},
  didascalia : { type:String,required:true}
});

module.exports = mongoose.model('Story', storySchema);
