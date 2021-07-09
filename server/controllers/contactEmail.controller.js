const sendEmail = require("../mail");

function sendContactEmail(req, res) {
    const { first_name, last_name, email, phone, message } = req.body;
  
    sendEmail(email, first_name, last_name, phone, message, function (err, data) {
      if (err) {
        res.status(500).json({ message: "Internal Error", err: err });
      } else {
        res.status(200).json({ message: "Email Sent!", data: data });
      }
    });
}

module.exports = {
    sendContactEmail
}