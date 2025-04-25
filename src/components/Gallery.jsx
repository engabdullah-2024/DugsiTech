import React from 'react';
import flower from '../assets/flower.jpeg';
import cat from '../assets/cat.jpeg';
import lion from '../assets/lion.jpeg';
import bmw from '../assets/bmw.jpeg';
import jet from '../assets/jet.jpeg';
import city from '../assets/city.jpeg';
import me from '../assets/me.jpeg';
import { FaCamera } from 'react-icons/fa';

const imageDetails = [
  { src: flower, name: 'Beautiful Flower' },
  { src: cat, name: 'Cute Cat' },
  { src: lion, name: 'King Lion' },
  { src: bmw, name: 'Luxury BMW' },
  { src: jet, name: 'Private Jet' },
  { src: city, name: 'Modern City' },
  { src: me, name: 'Abdalla' },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-100 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-5xl text-pink-600 dark:text-pink-400 mb-4 mx-auto">
          <FaCamera />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Our Gallery
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Explore some of our amazing memories and events.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {imageDetails.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-pink-400 transition duration-300"
            >
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 w-full bg-white/50 dark:bg-black/40 backdrop-blur-sm text-gray-800 dark:text-white p-2 text-sm font-semibold">
                {img.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://photos.google.com" // 🔁 Replace with your gallery URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            View More Photos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
