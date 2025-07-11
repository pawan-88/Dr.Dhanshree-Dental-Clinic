import nodemailer from 'nodemailer';

export const sendNotification = async (formData: {
  name: string;
  phone: string;
  serviceType: string;
  message: string;
}) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, 
      pass: process.env.MAIL_PASS, 
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'dr.dhanshreedentalclinic@gmail.com',
    subject: 'New Contact Form Submission',
    html: `
      <h3>New Inquiry from Website</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Service:</strong> ${formData.serviceType}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
