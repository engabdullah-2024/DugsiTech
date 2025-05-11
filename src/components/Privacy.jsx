import React from 'react';
import { FaShieldAlt, FaLock, FaUserSecret } from 'react-icons/fa';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-100 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto bg-white/40 dark:bg-gray-900/40 backdrop-blur-md shadow-lg rounded-2xl p-8 text-center">
        <div className="text-pink-600 dark:text-pink-400 text-5xl mb-4">
          <FaShieldAlt />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          We value your privacy and are committed to protecting your personal information.
        </p>

        <div className="text-left space-y-6">
          <div className="flex items-start gap-4">
            <FaLock className="text-2xl text-pink-600 dark:text-pink-400 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">1. Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We collect your name, email address, and class/program info for registration purposes only.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaUserSecret className="text-2xl text-pink-600 dark:text-pink-400 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">2. How We Use Your Data</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We use your data only to register you for the appropriate programs and exams. We do not share or sell your information to third parties.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaShieldAlt className="text-2xl text-pink-600 dark:text-pink-400 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">3. Your Privacy Rights</h2>
              <p className="text-gray-600 dark:text-gray-300">
                You may request access to, update, or delete your information at any time by contacting our support team.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          Last updated: May 11, 2025
        </p>
      </div>
    </div>
  );
};

export default Privacy;
