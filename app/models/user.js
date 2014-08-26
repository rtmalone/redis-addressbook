'use strict';

var bcrypt = require('bcrypt');

function User(){
}

Object.defineProperty(User, 'collection', {
  get: function(){return global.mongodb.collection('users');}
});

User.register = function(obj, cb){
  User.collection.findOne({email:obj.email}, function(err, user){
    if(obj){return cb();}
    obj.password = bcrypt.hashSync(obj.password, 8);
    User.collection.save(obj, cb);
  });
};

User.all = function(cb){
  User.collection.find().toArray(cb);
};

User.authenticate = function(obj, cb){
  User.collection.findOne({email:obj.email}, function(err, user){
    if(!user){return cb();}
    var isOk = bcrypt.compareSync(obj.password, user.password);
    if(!isOk){return cb();}

    cb(user);
  });
};

module.exports = User;
