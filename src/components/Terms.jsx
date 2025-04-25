import React from 'react';
import { FaFileContract, FaCheckCircle, FaBan } from 'react-icons/fa';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-100 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto bg-white/40 dark:bg-gray-900/40 backdrop-blur-md shadow-lg rounded-2xl p-8 text-center">
        <div className="text-pink-600 dark:text-pink-400 text-5xl mb-4">
          <FaFileContract />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          Please read these terms and conditions carefully before using our website.
        </p>

        <div className="text-left space-y-6">
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-2xl text-pink-600 dark:text-pink-400 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">1. Usage Terms</h2>
              <p className="text-gray-600 dark:text-gray-300">
                By accessing this site, you agree to use the content only for educational purposes. All materials provided are for personal use.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-2xl text-pink-600 dark:text-pink-400 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">2. Account Responsibility</h2>
              <p className="text-gray-600 dark:text-gray-300">
                You are responsible for maintaining the confidentiality of your login credentials and activities that occur under your account.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaBan className="text-2xl text-pink-600 dark:text-pink-400 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">3. Prohibited Activities</h2>
              <p className="text-gray-600 dark:text-gray-300">
                You agree not to misuse the platform or attempt to harm the system, its users, or its services in any form.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          Last updated: April 20, 2025
        </p>
      </div>
    </div>
  );
};

export default Terms;
