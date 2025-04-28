import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Plans = () => {
  const [timeLeft, setTimeLeft] = useState('Loading...');
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const trialData = JSON.parse(localStorage.getItem('trialInfo'));
      if (trialData && trialData.endISO) {
        const end = new Date(trialData.endISO);

        const updateTimer = () => {
          const now = new Date();
          const timeRemaining = end - now;

          if (timeRemaining <= 0) {
            setTimeLeft('Trial expired');
            clearInterval(timer);
            alert('Your 66-day trial has ended. Please upgrade to continue.');
            localStorage.removeItem('trialInfo');
            navigate('/plans');
          } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
          }
        };

        updateTimer(); // Call once immediately
        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer);
      } else {
        setTimeLeft(null); // No trial started
      }
    }
  }, [navigate]);

  const handleStartTrial = () => {
    if (typeof window !== 'undefined') {
      const now = new Date();
      const end = new Date();
      end.setDate(now.getDate() + 66); // Add 66 days
      const trialInfo = { startISO: now.toISOString(), endISO: end.toISOString() };
      localStorage.setItem('trialInfo', JSON.stringify(trialInfo));
      window.location.reload(); // Refresh to show countdown
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Plans Page</h1>

      {timeLeft === 'Loading...' && (
        <p className="text-lg animate-pulse">Loading your trial...</p>
      )}

      {timeLeft === null && (
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4">You have not started your free trial yet.</p>
          <button
            onClick={handleStartTrial}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
          >
            Start 66-Day Free Trial
          </button>
        </div>
      )}

      {timeLeft !== 'Loading...' && timeLeft !== null && (
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold mb-2">Time Remaining:</p>
          <p className="text-xl text-green-600">{timeLeft}</p>
        </div>
      )}
    </div>
  );
};

export default Plans;
