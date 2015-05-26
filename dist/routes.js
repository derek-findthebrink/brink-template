(function() {
  var express, router, siteTitle, siteUrl;

  express = require('express');

  router = express.Router();

  siteTitle = 'systemT | template';

  siteUrl = 'localhost:3000';

  router.get('/', function(req, res, next) {
    return res.render('pages/home', {
      title: siteTitle
    });
  });

  module.exports = router;

}).call(this);
