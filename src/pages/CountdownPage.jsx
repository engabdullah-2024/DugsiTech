import React, { useEffect, useState } from 'react';

const CountdownPage = () => {
  const targetDate = new Date('2025-05-08T08:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        window.location.reload();
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-6">
      <h1 className="text-4xl font-bold mb-4">🚧 Website Locked</h1>
      <p className="text-lg mb-2">This site will open on <strong>May 8, 2025 at 8:00 AM</strong>.</p>
      <div className="text-2xl font-semibold mt-4">
        ⏳ Countdown: {timeLeft.days}d {timeLeft.hours}h {timeLeft.mins}m {timeLeft.secs}s
      </div>
    </div>
  );
};

export default CountdownPage;
