var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BrugerSchema = new Schema({
    navn : {type: String, required: true},
    mail : {type : String, required: true},
    kodeord : {type: String, required: true}, 
});

exports.BrugerSchema = BrugerSchema;