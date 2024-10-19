import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import toastUtilInstance from '../../helpers/toastify';

import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: '',
  });

  const {t} = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {    
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send("service_hzlw7fh","template_zi8qf7w", {
      from_name: formData.from_name,
      email: formData.email,
      message: formData.message,
    }, 'FqRRzxqFGb4uqIWHr');

    toastUtilInstance.success('Email was sent successfully');

    setFormData({ from_name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="from_name"
          name="from_name"
          placeholder='Name'
          value={formData.from_name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          id="message"
          name="message"
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
          maxLength={300}
          required
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;

