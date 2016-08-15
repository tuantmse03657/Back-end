'use strict';
var config = require('config');
var consumer = {};
var logger = require('../helpers/logger');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport(config.get('mailer')));
var config = require('config');
consumer.name = 'email';

consumer.task = function(job, done){
    var data = job.data;
        try{
            logger.debug('Send email', data.title);
            transporter.sendMail({
                from: config.get('mailer.from'),
                to: data.to,
                subject: data.title,
                html: 'Hi,</br> Thank you.'
            });
        } catch(e) {
            logger.error(e);
        }
    done();
};

module.exports = consumer;
