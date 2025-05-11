import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ScrollButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-24 right-5 flex flex-col gap-4 z-50">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition"
        title="Scroll to Top"
      >
        <ChevronUp />
      </button>

      {/* Scroll to Bottom */}
      <button
        onClick={scrollToBottom}
        className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition"
        title="Scroll to Bottom"
      >
        <ChevronDown />
      </button>
    </div>
  );
};

export default ScrollButtons;
