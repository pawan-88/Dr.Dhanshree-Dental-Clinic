import { Request, Response } from 'express';
import Contact from '../models/Contact';
import { sendNotification } from '../utils/mailer';

export const handleContactForm = async (req: Request, res: Response) => {
  try {
    const { name, phone, serviceType, message } = req.body;

    if (!name || !phone || !serviceType || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const contactEntry = new Contact({ name, phone, serviceType, message });
    await contactEntry.save();

    await sendNotification({ name, phone, serviceType, message });

    return res.status(200).json({ message: 'Submitted successfully!' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
