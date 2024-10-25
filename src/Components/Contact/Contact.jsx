import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Your CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.send(
            'service_a1i22fi',   // Replace with your EmailJS Service ID
            'template_kno6iis',  // Replace with your EmailJS Template ID
            {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,


            },
            'pdr-ncZsGRFuodzIc'       // Replace with your EmailJS User ID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
            })
            .catch((err) => {
                console.error('Failed to send the message:', err);
                alert('Failed to send the message. Please try again.');
            });

        // Reset form after submission
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-container" id="contact">
            <div className="contact-details">
                <h2>Contact Information</h2>
                <h3>Manikumar Reddy Gajjela</h3>
                <p><strong>Phone:</strong> 551-208-8721</p>
                <p><strong>Email:</strong> <a href="mailto:gmkr300@gmail.com">gmkr300@gmail.com</a></p>
            </div>

            <div className="contact-form-container">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
