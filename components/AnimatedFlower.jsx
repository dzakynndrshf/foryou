'use client';
import { useState } from 'react';

const AnimatedFlower = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlowerClick = () => {
    setIsAnimating(true);
    setShowMessage(true);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-5 font-sans">
      {/* Bunga */}
      <div 
        className={`relative w-32 h-40 cursor-pointer transition-transform duration-300 mb-8 ${
          isAnimating ? 'animate-bounce' : ''
        } hover:scale-105`}
        onClick={handleFlowerClick}
      >
        {/* Pusat Bunga */}
        <div className="absolute top-14 left-14 w-10 h-10 bg-yellow-400 rounded-full z-10 shadow-lg shadow-yellow-400/50"></div>
        
        {/* Kelopak Bunga */}
        <div className="absolute top-8 left-8 w-16 h-16 bg-pink-500 rounded-full transform origin-bottom-right rotate-0"></div>
        <div className="absolute top-8 left-8 w-16 h-16 bg-pink-500 rounded-full transform origin-bottom-right rotate-60"></div>
        <div className="absolute top-8 left-8 w-16 h-16 bg-pink-500 rounded-full transform origin-bottom-right rotate-120"></div>
        <div className="absolute top-8 left-8 w-16 h-16 bg-pink-500 rounded-full transform origin-bottom-right rotate-180"></div>
        <div className="absolute top-8 left-8 w-16 h-16 bg-pink-500 rounded-full transform origin-bottom-right rotate-240"></div>
        <div className="absolute top-8 left-8 w-16 h-16 bg-pink-500 rounded-full transform origin-bottom-right rotate-300"></div>
        
        {/* Tangkai Bunga */}
        <div className="absolute top-32 left-15 w-2 h-20 bg-green-600 rounded-full"></div>
        
        {/* Daun */}
        <div className="absolute top-36 left-10 w-6 h-4 bg-green-500 rounded-full transform -rotate-30"></div>
      </div>

      {/* Pesan Motivasi */}
      {showMessage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn"
          onClick={handleCloseMessage}
        >
          <div 
            className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-4 relative animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-light transition-colors duration-200"
              onClick={handleCloseMessage}
            >
              ×
            </button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-pink-500 mb-4">
                💝 Untuk Kamu 💝
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                tetap semangatt yaa jangan menyerah, kalau ada apa-apa boleh cerita ke akuu
              </p>
              
              <div className="flex justify-center space-x-3 mt-4">
                <span className="text-2xl animate-bounce">❤️</span>
                <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>💖</span>
                <span className="text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>💕</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <p className="text-gray-600 italic text-center mt-6">
        Klik bunganya ya! 🌸
      </p>
    </div>
  );
};

export default AnimatedFlower;