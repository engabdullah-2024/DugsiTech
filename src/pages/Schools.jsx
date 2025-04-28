import React from 'react';

const schools = [
  {
    name: 'Alfurqan Modern School',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dNAD1P563iM-v3YS0VJWRW-N6d4nJhD6dQ&s', // Replace with your actual image path
    link: '', // No link for Alfurqan
  },
  {
    name: 'Rise Academy',
    image: 'https://www.riseacademy.so/wp-content/uploads/2021/12/rise-logo-white-png.png', // Replace with your actual image path
    link: 'https://www.riseacademy.so/', // Real link
  },
];

const Schools = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-pink-100 py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-700 mb-12">Our Member Schools</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {schools.map((school, index) => (
            school.link ? (
              // If school has a link, wrap with <a>
              <a
                key={index}
                href={school.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-t from-pink-100 to-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-48 sm:h-64 object-contain mx-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500 to-transparent opacity-30 rounded-xl"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-pink-600">{school.name}</h3>
                </div>
              </a>
            ) : (
              // If no link, just normal div
              <div
                key={index}
                className="bg-gradient-to-t from-pink-100 to-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-48 sm:h-64 object-contain mx-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500 to-transparent opacity-30 rounded-xl"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-pink-600">{school.name}</h3>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schools;
