import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import me from '../assets/me.jpeg'; // ✅ Imported image

const Dev = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-100 to-pink-300 flex items-center justify-center px-6">
      <motion.div
        className="bg-white shadow-2xl rounded-xl p-10 max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Developer Image */}
        <div className="flex justify-center mb-6">
          <motion.img
            src={me}
            alt="Eng Abdullah"
            className="w-40 h-40 rounded-full border-4 border-pink-500 object-cover shadow-lg"
            whileHover={{
              rotate: [0, 10, -10, 10, -10, 0], // Fun rotation effect when hovered
              transition: { duration: 0.6 },
            }}
          />
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Eng Abdullah</h1>
        <p className="text-pink-600 text-lg font-semibold mb-1">
          CEO & Founder of Dugsi Tech
        </p>
        <p className="text-gray-600 mb-6">Fullstack Developer / UI Designer</p>

        {/* Contact Section */}
        <div className="flex justify-center flex-col items-center space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <FaPhoneAlt className="text-pink-600" />
            <span className="text-base">+252613169435</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-pink-600" />
            <span className="text-base">enga95311@gmail.com</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://github.com/engabdullah-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dev;
