import React from 'react';
import { FaFilePdf, FaRegGrinBeam, FaStar } from 'react-icons/fa'; // Using React icons

const OurServices = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto text-center  text-pink-600 ">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <div className="text-4xl text-pink-600 mb-4">
              <FaFilePdf />
            </div>
            <h3 className="text-xl font-semibold mb-4">Free National Exam PDFs</h3>
            <p className="text-gray-700 mb-4">We provide Grade 12 national exams for years 2019 to 2024 for free. Download them anytime, anywhere.</p>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition">Learn More</button>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <div className="text-4xl text-pink-600 mb-4">
              <FaRegGrinBeam />
            </div>
            <h3 className="text-xl font-semibold mb-4">Online Assistance</h3>
            <p className="text-gray-700 mb-4">Get personalized support for your exam preparation. We are here to guide you in every step of your journey.</p>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition">Learn More</button>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <div className="text-4xl text-pink-600 mb-4">
              <FaStar />
            </div>
            <h3 className="text-xl font-semibold mb-4">Quality Exam Solutions</h3>
            <p className="text-gray-700 mb-4">Access well-organized and correct answers for the national exams. Boost your chances of acing your exams!</p>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition">Learn More</button>
           
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default OurServices;
