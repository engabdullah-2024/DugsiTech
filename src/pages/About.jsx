import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-100 to-pink-300 flex items-center justify-center px-6">
      <div className="max-w-4xl text-center py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
          About <span className="text-pink-600">Dugsi Hub</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Dugsi Hub is a modern digital platform dedicated to helping Grade 12 students access exam PDFs for all subjects with ease. 
          <br className="hidden md:inline" />
          Our goal is to support student success by offering **free, organized, and instant access** to educational resources, anytime, anywhere.
        </p>
        <p className="text-base md:text-lg text-gray-600 italic">
          Empowering future generations through technology and knowledge.
        </p>
      </div>
    </div>
  );
};

export default About;
