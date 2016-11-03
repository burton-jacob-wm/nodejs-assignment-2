var mongoose = require ('mongoose');
assert = require ('assert');

var Dishes = require('./models/dishes');
var Promos = require('./models/promotion');
var Leaders = require('./models/leadership');

var url = 'mongodb://localhost:27017/conFusion';
//Conected Url
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    console.log("Connected correctly to server!");


    Dishes.create({
        name: 'Uthapizza',
        description: 'Test',
        comments: [
            {
                rating: 3,
                comment: 'This is insane',
                author: 'Matt Daemon'
            }]
    }, function(err, dish){

        if (err) throw err;
        console.log('Dish Created!');
        console.log(dish);


        var id = dish._id;

        setTimeout(function () {
            Dishes.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated Test'
                    }
                }, {
                    new: true
                })

                .exec(function (err, dish){
                    if(err) throw err;
                    console.log('Updated Dish!');
                    console.log(dish);

                    dish.comments.push({
                        rating: 5,
                        comment: 'its titanic',
                        author: 'Leonardo di Carpaccio'
                    });

                    dish.save(function (err, dish) {
                        console.log('Updated Comments');
                        console.log(dish);

                        db.collection('dishes').drop(function() {
                            db.close();
                        });
                    });
                });
        }, 3000);
    });

    Promos.create({
        name: 'Weekend Grand Buffet',
        image: "images/buffet.png",
        label: "New",
        price: "19.99",
        description: "Featuring . . ."
    }, function(err, promo){

        if (err) throw err;
        console.log('Promotion Created!');
        console.log(promo);


        var id = promo._id;

        setTimeout(function () {
            Promos.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated Test'
                    }
                }, {
                    new: true
                })

                .exec(function (err, promo){
                    if(err) throw err;
                    console.log('Updated Promotions!');
                    console.log(promo);

                    promo.save(function (err, promo) {
                        console.log('Updated Comments');
                        console.log(promo);

                        db.collection('promos').drop(function() {
                            db.close();
                        });
                    });
                });
        }, 3000);
    });

    Leaders.create({
        name: 'Peter Pan',
        image: "images/alberto.png",
        abbr: "CEO",
        designation: "Chief Epicurious Officer",
        description: "Our CEO, Peter, . . ."
    }, function(err, leaders){

        if (err) throw err;
        console.log('Leader Created!');
        console.log(leaders);


        var id = leaders._id;

        setTimeout(function () {
            Leaders.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated Test'
                    }
                }, {
                    new: true
                })

                .exec(function (err, leaders){
                    if(err) throw err;
                    console.log('Updated Leaders!');
                    console.log(leaders);

                    leaders.save(function (err, leaders) {
                        console.log('Updated Leader');
                        console.log(leaders);

                        db.collection('leaders').drop(function() {
                            db.close();
                        });
                    });
                });
        }, 3000);
    });
});