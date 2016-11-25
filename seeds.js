var mongoose = require('mongoose');
var Campground = require("./models/campground");
var Comment = require('./models/comment');
var data = [
    {
        name: 'Kris Camp', 
        image: 'https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg', 
        description: 'Quisque aliquet sodales iaculis. Nulla facilisi. Sed tortor augue, fringilla sit amet finibus et, euismod a odio. Nam efficitur, tortor non congue finibus, metus libero rutrum nisl, sit amet hendrerit nibh metus at nisl. Curabitur tincidunt scelerisque massa.'
    },
    {
        name: 'Clouds rest', 
        image: 'https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg', 
        description: 'Quisque aliquet sodales iaculis. Nulla facilisi. Sed tortor augue, fringilla sit amet finibus et, euismod a odio. Nam efficitur, tortor non congue finibus, metus libero rutrum nisl, sit amet hendrerit nibh metus at nisl. Curabitur tincidunt scelerisque massa.'
    },
    {
        name: 'C00L 1337 C4MP', 
        image: 'https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg', 
        description: 'Quisque aliquet sodales iaculis. Nulla facilisi. Sed tortor augue, fringilla sit amet finibus et, euismod a odio. Nam efficitur, tortor non congue finibus, metus libero rutrum nisl, sit amet hendrerit nibh metus at nisl. Curabitur tincidunt scelerisque massa.'
    },
    {
        name: 'Canyon floor', 
        image: 'https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg', 
        description: 'Quisque aliquet sodales iaculis. Nulla facilisi. Sed tortor augue, fringilla sit amet finibus et, euismod a odio. Nam efficitur, tortor non congue finibus, metus libero rutrum nisl, sit amet hendrerit nibh metus at nisl. Curabitur tincidunt scelerisque massa.'
    }
];


function seedDB(){
    //REMOVE ALL CAMPGROUNDS
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log('REMOVED CAMPGROUNDS!')
        //add a few campgrounds
        /*data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if (err){
                    console.log('Error');
                } else {
                    console.log('Campground added');
                    //create a comment
                    Comment.create({text: 'This place is great, but I wish there was internet', author: 'Homer'
                        }, function(err, comment){
                            if (err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log('new comment created');
                            }
                           
                        });
                }
            })
        });*/
    });
    
    
    
}

module.exports = seedDB;

