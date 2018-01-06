var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'francisco-rosal98@hotmail.com',
    pass: 'colegiomontano1'
  }
})

var mailOptions = {
  from: 'francisco-rosal98@hotmail.com',
  to: 'frangrosalo@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Que genial!'
}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
})