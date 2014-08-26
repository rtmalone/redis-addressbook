'use strict';

var User = require('../models/user');

exports.login = function(req, res){
  res.render('users/login');
};

exports.new = function(req, res){
  res.render('users/new');
};

exports.create = function(req, res){
  console.log(req.body);
  User.register(req.body, function(err, user){
    if(user){
      res.redirect('/');
    } else {
      res.redirect('/register');
    }
  });
};

exports.authenticate = function(req, res){
  User.authenticate(req.body, function(user){
      if(user){
        res.redirect('/');
      } else {
        res.redirect('/login');
      }
  });
};
