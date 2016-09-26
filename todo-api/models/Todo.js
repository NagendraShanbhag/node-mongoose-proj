var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});


TodoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Todo', TodoSchema);