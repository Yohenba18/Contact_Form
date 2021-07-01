const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'roddik12kshetri@gmail.com', // your email address to send email from
      pass: 'Yohen$Korou' // your gmail account password
    }
  });

  module.exports = transporter;