'use strict';
var express = require('express'),
    db = require('../models'),
    logger = require('../helpers/logger'),
    moment = require('moment'),
    config = require('config'),
    crypto = require('crypto'),
    router = express.Router();

// create a new Product
router.post('/create', function(req, res){
    var product = new db.Product(req.body);
    product.save(function(error, new_Product){
        if (error) {
            return res.status(406).send(JSON.stringify({error}));
        }
        // remove security attributes
        res.send(JSON.stringify(new_product));
    });
});
router.get('/get/:id', function(req, res){
    logger.debug('Get Product By Id', req.params.id);
    db.User.findOne({
      id: req.params.id
    }).then(function(user){
        // remove security attributes
        res.send(JSON.stringify(user));
    }).catch(function(e){
        res.status(500).send(JSON.stringify(e));
    });
});

// get list of users
router.get('/list/:page/:limit', function(req, res){
    var limit = (req.params.limit)? req.params.limit: 10;
    var skip = (req.params.page)? limit * (req.params.page - 1): 0;
    db.User
    .find()
    .skip(skip)
    .limit(limit)
    .sort({'id': 'desc'})
    .then(function(users) {
        res.send(JSON.stringify(products));
    }).catch(function(e) {
        res.status(500).send(JSON.stringify(e));
    });
});

// get a Product by id
module.exports = router;
