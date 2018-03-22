var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var UserSchema   = new Schema({
    name: String,
    lastname: String,
    dob: Date
});
module.exports = mongoose.model('User', UserSchema);

