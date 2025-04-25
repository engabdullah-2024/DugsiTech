import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Service = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true); // Set loading state

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      // EmailJS send function
      const response = await emailjs.send(
        'service_iw7fdr8', // Your Service ID
        'template_5gnkvye', // Your Template ID
        formData,
        '6nbY0x5vkTOwEohEU' // Your User ID (API Key)
      );

      if (response.status === 200) {
        alert("Email sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      alert("Failed to send email, please try again!");
      console.error(error);
    } finally {
      setSending(false); // Stop loading state
    }
  };

  return (
    <div className="service-form-container">
      <h2 className="text-xl font-bold text-center mb-6">Contact Us for Our Services</h2>
      <form onSubmit={sendEmail} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg opacity-90 backdrop-blur-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            rows="4"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className={`bg-pink-600 text-white py-2 px-4 rounded-md font-semibold transition duration-300 ${
              sending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-pink-700'
            }`}
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Service;
