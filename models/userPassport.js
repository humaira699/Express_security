var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var User = new Schema({
    admin:   {
        type: Boolean,
        default: false
    }
});
//registers a plugin for this schema
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('UserP', User);

