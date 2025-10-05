import React, { useEffect, useState } from 'react';

interface SuccessMessageProps {
  show: boolean;
  duration?: number; 
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ show, duration = 3000 }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
    if (show) {
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  if (!visible) return null;

  return (
    <>
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white border-l-4 border-green-500 shadow-lg rounded-lg px-6 py-4 flex items-center space-x-3 animate-slide-down">
          <div className="text-green-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p className="text-gray-800 font-semibold">Order placed successfully!</p>
        </div>
      </div>

      <style>{`
        @keyframes slide-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default SuccessMessage;
