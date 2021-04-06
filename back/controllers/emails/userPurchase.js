const nodemailer = require("nodemailer");

const purchaseConfirmation = (userEmail, userFirstname, productsArray, address) => {
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
    subject: `${userFirstname}, thanks for buying!`,
    text: `Dear ${userFirstname}, your order ${productsArray}, is being prepared and will be sent as far is ready to ${address}.`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email with order sent: " + info.response);
    }
  });
};

module.exports = purchaseConfirmation;
