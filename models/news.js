const mongoose = require('mongoose')
const { Schema } = mongoose;

const newsSchema = new Schema({
  title:  {type: String, required:[true,'Pole tytuł jest wymagane']}, 
  descr: {type: String, required:[true,'pole Opis jest wymagane']},
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News', newsSchema)