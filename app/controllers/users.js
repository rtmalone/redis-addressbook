'use strict';

var User = require('../models/user');

exports.new = function(req, res){
  res.render('users/new');
};

exports.create = function(req, res){
  console.log(req);
  User.register(req.body, function(user){
    if(user){
      res.redirect('/');
    } else {
      res.redirect('/register');
    }
  });
};
