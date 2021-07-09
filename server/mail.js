const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

require('dotenv').config()

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const date = new Date();
const today = `${date.getDate()}/${
  date.getMonth() + 1
}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

const sendMail = (email, first_name, last_name, phone, message, cb) => {
  const mailOptions = {
    from: email,
    to: "restarter.dev@gmail.com",
    subject: `Los Girasoles Consulta Web - ${first_name} ${last_name}`,
    html: `<h1>Los Girasoles</h1><h2>Consulta Web ${today}</h2><p><ul><li>Nombre: ${first_name}</li><li>Apellido: ${last_name}</li><li>Telefono: ${phone}</li><li>Email: ${email}</li></ul></p><h2>Mensaje</h2><p>${message}</p>`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
