var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },

    designation: {
        type: Currency,
        required: false
    },

    abbr: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

var Leaders = mongoose.model('Leaders', leaderSchema);

module.exports = Leaders;
/**
 * Created by session1 on 11/3/16.
 */
