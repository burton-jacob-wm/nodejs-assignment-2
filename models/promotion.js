var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promoSchema = new Schema({
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
    price: {
        type: Currency,
        required: false
    },

    label: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

var Promo = mongoose.model('Promo', promoSchema);

module.exports = Promo;
