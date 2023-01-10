const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

const transporter = nodemailer.createTransport({
  host: "gmail",
  auth: {
    user: process.env.REACT_APP_EMAIL,
    pass: process.env.REACT_APP_EMAIL_PASS
  },
});


// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//       user: 'maurine.fay@ethereal.email',
//       pass: 'KStCxxy28NqBcFQMxg'
//   }
// });


transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

//  let mailOptions = {
//   from: "maurine.fay@ethereal.email",
//   to: "rohithreddyrohi18@gmail.com",
//   subject: "Nodemailer API",
//   text: "Hi from your nodemailer API",
//  };


let mailOptions = {
  from: process.env.REACT_APP_EMAIL,
  to: "rohithreddyrohi18@gmail.com",
  subject: "Nodemailer API",
  text: "Hi from your nodemailer API",
 };

 transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
  }
 });

// app.post("/send", function (req, res) {
//   let mailOptions = {
//     from: `rohith18151821@gmail.com`,
//     to: `${req.body.mailerState.email}`,
//     subject: `${req.body.mailerState.name} sent you a message from your portfolio site!`,
//     text: `${req.body.mailerState.message}`,
//   };

//   transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       console.log("Error " + err);
//     } else {
//       console.log("Email sent successfully");
//       res.json({ status: "Email sent" });
//     }
//   });
// });
