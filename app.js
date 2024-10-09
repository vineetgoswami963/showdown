// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');  // Import CORS
// require('dotenv').config();

// const app = express();

// // Enable CORS
// app.use(cors());

//  app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post('/send-email', async (req, res) => {
//     const { name, email, phone, message } = req.body;

//      console.log('Form data received:', req.body);

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD,
//         }
//     });

//     const mailOptions = {
//         from: process.env.EMAIL,
//         to: process.env.EMAIL,
//         subject: `New Contact Form Submission from ${name}`,
//         text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ status: 'Email sent successfully' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ status: 'fail', error: error.message });
//     }
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


// const  = rexpressequire('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// // Enable CORS
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post('/send-email', async (req, res) => {
//     const { name, email, phone, message } = req.body;

//     console.log('Form data received:', req.body);

//     // Setup Nodemailer
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD,
//         }
//     });

//     const mailOptions = {
//         from: process.env.EMAIL,
//         to: process.env.EMAIL, // Send the email to yourself or another address
//         subject: `New Contact Form Submission from ${name}`,
//         text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
//     };

//     try {
//         // Send mail
//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ status: 'Email sent successfully' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ status: 'fail', error: error.message });
//     }
// });

// // Start server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
