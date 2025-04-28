import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Plans = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState('Loading...');

  const plans = [
    {
      title: 'Basic Plan',
      price: 0.7,
      services: [
        'Access to all Grade 12 National Exam PDFs',
        'Free access to exams from 2019 to 2020',
        'Email support for any issues',
      ],
    },
    {
      title: 'Standard Plan',
      price: 2,
      services: [
        'Access to all Grade 12 National Exam PDFs',
        'Free access to exams from 2019 to 2022',
        'Priority email support',
        'Access to bonus study materials',
      ],
    },
    {
      title: 'Premium Plan',
      price: 5,
      services: [
        'Access to all Grade 12 National Exam PDFs',
        'Free access to exams from 2019 to 2024',
        '24/7 email and phone support',
        'Exclusive study materials',
        'One-on-one tutoring session for exam preparation',
      ],
    },
  ];

  useEffect(() => {
    const trialData = JSON.parse(localStorage.getItem('trialInfo'));
    const end = new Date('2025-06-30T23:59:59');

    if (trialData) {
      const timer = setInterval(() => {
        const now = new Date();
        const timeRemaining = end - now;
        if (timeRemaining <= 0) {
          clearInterval(timer);
          setTimeLeft('Trial expired');
          localStorage.removeItem('trialInfo');
          alert('Your 66-day trial has ended. Please upgrade to continue.');
          navigate('/plans');
        } else {
          const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

          setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setTimeLeft('Start your free trial!');
    }
  }, [navigate]);

  const startTrial = () => {
    const start = new Date();
    const end = new Date('2025-06-30T23:59:59');

    const trialInfo = {
      startISO: start.toISOString(),
      endISO: end.toISOString(),
    };

    localStorage.setItem('trialInfo', JSON.stringify(trialInfo));
    alert('Your trial has started!');
    navigate('/exam');
  };

  const handlePaymentRedirect = (price) => {
    navigate('/payment', { state: { price } });
  };

  return (
    <div className="py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">
          Our Plans (One-Time Payment)
        </h2>

        {/* FREE TRIAL CARD */}
        <div className="mb-12">
          <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-3">🎁 66-Day Free Trial</h3>
            <p className="text-gray-700 mb-4">
              Enjoy full access to DugsiHub content from today up to{' '}
              <strong>{new Date('2025-06-30').toLocaleDateString()}</strong>.
            </p>
            <p className="text-xl font-semibold text-gray-700 mb-4">
              {timeLeft}
            </p>
            <button
              onClick={startTrial}
              className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 font-semibold transition duration-300"
            >
              Start Free Trial
            </button>
          </div>
        </div>

        {/* PAID PLANS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">{plan.title}</h3>
              <p className="text-xl text-pink-800 mb-6">One-Time Payment: ${plan.price}</p>
              <ul className="text-left text-gray-600 mb-6">
                {plan.services.map((service, i) => (
                  <li key={i} className="mb-2 flex items-start">
                    <FaCheckCircle className="w-5 h-5 text-pink-500 mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePaymentRedirect(plan.price)}
                className="bg-pink-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
              >
                Purchase Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
