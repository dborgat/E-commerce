const nodemailer = require("nodemailer");

const sendConfirmation = (userEmail, userFirstname) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "drunkartp5@gmail.com",
      pass: "kqdcrkwptgmionow",
    },
  });

  const mailOptions = {
    from: "DRUNKART",
    to: `${userEmail}`,
    subject: `Welcome ${userFirstname}!`,
    text: `Dear ${userFirstname}, we are glad to tell you that your account has been created successfully.`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Register email sent: " + info.response);
    }
  });
};

module.exports = sendConfirmation;
