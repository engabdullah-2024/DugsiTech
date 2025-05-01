import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLocationArrow, FaWhatsapp } from 'react-icons/fa'; // Added FaWhatsapp

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-100 to-pink-300 pt-16 pb-10 px-6">
      <div className="max-w-4xl mx-auto text-center mt-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Contact <span className="text-pink-600">Dugsi Tech</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Feel free to reach out to us for any inquiries or support.
        </p>

        {/* Contact Details */}
        <div className="space-y-6">
          {/* Phone */}
          <div className="flex justify-center items-center gap-4">
            <FaPhoneAlt size={30} className="text-pink-600" />
            <p className="text-xl font-medium text-gray-800">+252613169435</p>
          </div>

          {/* Email */}
          <div className="flex justify-center items-center gap-4">
            <FaEnvelope size={30} className="text-pink-600" />
            <p className="text-xl font-medium text-gray-800">
              <a href="mailto:enga95311@gmail.com" className="text-pink-600 hover:underline">
                enga95311@gmail.com
              </a>
            </p>
          </div>

          {/* Location */}
          <div className="flex justify-center items-center gap-4">
            <FaLocationArrow size={30} className="text-pink-600" />
            <p className="text-xl font-medium text-gray-800">
              Ceelasha Biyaha, Somalia
            </p>
          </div>

          {/* WhatsApp Group Link */}
          <div className="flex justify-center items-center gap-4">
            <FaWhatsapp size={30} className="text-green-500" />
            <p className="text-xl font-medium text-gray-800">
              <a
                href="https://chat.whatsapp.com/CTS1vz8dE1XBhk9Ersw56V"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Our WhatsApp Group Link
              </a>
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <a
            href="/"
            className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition duration-300"
          >
            Go Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
