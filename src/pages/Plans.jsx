import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';  // Importing the check-circle icon
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook for navigation

const Plans = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

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

  // Handle the "Purchase Now" button click
  const handlePaymentRedirect = (price) => {
    // Redirect to Payment page and pass the plan price as state
    navigate('/payment', { state: { price } });
  };

  return (
    <div className="py-16 ">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">Our Plans (One-Time Payment)</h2>
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
                    <FaCheckCircle className="w-5 h-5 text-pink-500 mr-3" /> {/* Checkmark icon */}
                    {service}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePaymentRedirect(plan.price)} // Navigate to the Payment page with plan price
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
