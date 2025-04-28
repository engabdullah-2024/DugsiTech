import React from 'react';
import { FaGithub, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Community = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mt-10">
        {/* Information about DugsiHub */}
        <h2 className="text-3xl font-bold text-gray-800">Welcome to DugsiHub</h2>
        <p className="mt-4 text-lg text-gray-600">
          DugsiHub is a platform where Grade 12 students can find all past exam papers from 2019 to 2024. 
          Whether you're preparing for upcoming exams or revising past papers, DugsiHub has you covered with easy access to all the resources you need.
        </p>

        {/* Social Media Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Join Our Community</h3>
          <p className="mt-2 text-lg text-gray-600">
            Stay connected with DugsiHub for updates, discussions, and more.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-500"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://facebook.com/yourfacebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600"
            >
              <FaFacebook size={40} />
            </a>
            <a
              href="https://wa.me/613169435"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-green-500"
            >
              <FaWhatsapp size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
