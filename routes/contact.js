var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var bodyparser = require('body-parser');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


router.post('/send', function(req, res, next){

	var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
        	user: 'tecguyinfo@gmail.com',
        	pass: 'something'
        }
	});

	var mailOptions = {
		from: 'Rabbani <rabbanisarkar15204@gmail.com>',
		to: 'golam15-204@diu.edu.bd',
		subject: 'Website Submission',
		text: 'You Have a new Submission with the following details.. Name: '+req.body.name+ 'Email: '+req.body.email+ 'Message: '+req.body.message,
		html: '<p>You Have Recivhed a new message!!<ul><li>Name: '+req.body.name+ '</li><li>Email: '+req.body.email+ '</li><li>Message: '+req.body.message + '</li></ul></p>'
	};

	transporter.sendMail(mailOptions, function(error, info){
          
          if(error){
          	console.log(error);
          	res.redirect('/');
          }

          else{
          	console.log('Message Send: '+ info.response);
          	res.redirect('/');
          }
	});

	});

module.exports = router;
