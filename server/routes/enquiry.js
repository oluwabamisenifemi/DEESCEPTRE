const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      socialMedia,
      handle,
    } = req.body;

    // EMAIL TRANSPORT
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // EMAIL CONTENT
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Website Enquiry",
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Social Media:</strong> ${socialMedia}</p>
        <p><strong>Handle:</strong> ${handle}</p>
      `,
    };

    // SEND EMAIL
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Enquiry sent successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send enquiry",
    });
  }
});

module.exports = router;