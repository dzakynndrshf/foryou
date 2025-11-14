'use client';
import { useState, useEffect } from 'react';

// Daftar pesan motivasi yang bisa diacak
const motivationalMessages = [
  "semangattt yaa Neyssaaa, kalau cape istirahat yaa, tapi jangan lupa kalau mau cerita apapun bolehh ke aku 😊",
];

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [randomMessage, setRandomMessage] = useState('');

  // --- START OF NEW CODE FOR SPARKLE POSITIONS ---
  const [sparklePositions, setSparklePositions] = useState([]);

  useEffect(() => {
    // Logika ini hanya berjalan di client setelah komponen di-mount
    const newPositions = [...Array(60)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${3 + Math.random() * 7}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: `${0.2 + Math.random() * 0.6}`,
      transform: `scale(${0.5 + Math.random() * 0.5})`
    }));
    setSparklePositions(newPositions);
  }, []); // Array dependensi kosong agar hanya berjalan sekali saat mount
  // --- END OF NEW CODE FOR SPARKLE POSITIONS ---

  useEffect(() => {
    if (showMessage) {
      setRandomMessage(
        motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]
      );
    }
  }, [showMessage]);

  const handleFlowerClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowMessage(true);
    }, 600);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
    setIsAnimating(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4 sm:p-8 font-sans overflow-hidden">
      {/* Background Subtle Sparkle/Particle Effect */}
      <div className="absolute inset-0 z-0 sparkle-background">
        {/* --- USING sparklePositions STATE HERE --- */}
        {sparklePositions.map((style, i) => (
          <div key={i} className="sparkle" style={style}></div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-xl text-center p-4">
        {/* JUDUL UTAMA */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-4 tracking-tight drop-shadow-md animate-title-fade">
        </h1>

        {/* Deskripsi Pembuka */}
        <p className="text-gray-600 text-xl md:text-2xl mb-8 font-serif italic max-w-md animate-subtitle-fade animation-delay-300">
          Klik Bunga nyaa yaa
        </p>
        {/* Bunga Kustom: Posisi dan struktur bunga diperbaiki secara signifikan */}
        <div 
          className={`relative flower-main-container cursor-pointer transform transition-transform duration-500 ease-out 
            ${isAnimating ? 'animate-flower-burst' : 'hover:scale-105'} 
            flower-shine`} 
          onClick={handleFlowerClick}
        >
          {/* Petal Layer 1 (Outer, slightly transparent, for glow effect) */}
          <div className="flower-petal outer-petal-1"></div>
          <div className="flower-petal outer-petal-2"></div>
          <div className="flower-petal outer-petal-3"></div>
          <div className="flower-petal outer-petal-4"></div>
          <div className="flower-petal outer-petal-5"></div>
          <div className="flower-petal outer-petal-6"></div>
          <div className="flower-petal outer-petal-7"></div>
          <div className="flower-petal outer-petal-8"></div>


          {/* Petal Layer 2 (Inner, more vibrant) */}
          <div className="flower-petal inner-petal-1"></div>
          <div className="flower-petal inner-petal-2"></div>
          <div className="flower-petal inner-petal-3"></div>
          <div className="flower-petal inner-petal-4"></div>
          <div className="flower-petal inner-petal-5"></div>
          <div className="flower-petal inner-petal-6"></div>
          <div className="flower-petal inner-petal-7"></div>
          <div className="flower-petal inner-petal-8"></div>
          
          {/* Flower Center */}
          <div className="flower-core"></div>
          
          {/* Stem and Leaf */}
          <div className="flower-stem"></div>
          <div className="flower-leaf"></div>
        </div>
      </div>

      {/* Modal */}
      {showMessage && (
        <div className="modal-overlay" onClick={handleCloseMessage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseMessage}>
              ×
            </button>
            
            <h3 className="text-4xl font-extrabold text-white mb-3 tracking-wide drop-shadow-lg p-2 rounded-t-lg bg-pink-500/90">
              Pesan untukmu 💌
            </h3>

            <div className="message-box bg-white p-6 rounded-b-lg border-t-4 border-pink-300 shadow-inner">
                <p className="text-gray-700 text-xl my-4 leading-relaxed italic font-serif">
                  {randomMessage}
                </p>
            </div>
            
            <div className="hearts-confetti">
                <span style={{ animationDelay: '0s' }}>❤️</span>
                <span style={{ animationDelay: '0.1s' }}>💖</span>
                <span style={{ animationDelay: '0.2s' }}>✨</span>
                <span style={{ animationDelay: '0.3s' }}>💕</span>
                <span style={{ animationDelay: '0.4s' }}>🌟</span>
            </div>

            <button className="ok-btn hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300" onClick={handleCloseMessage}>
              Aku Mengerti! Terima Kasih! 😊
            </button>
          </div>
        </div>
      )}

      {/* --- Global CSS untuk Kustomisasi dan Animasi --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;600;700&display=swap');

        html, body {
          font-family: 'Montserrat', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        h1 {
          font-family: 'Great Vibes', cursive;
          line-height: 1.1;
        }

        /* Background Sparkle Effect */
        .sparkle-background {
          pointer-events: none;
        }
        .sparkle {
          position: absolute;
          width: 5px;
          height: 5px;
          background: radial-gradient(circle, #fff 0%, rgba(255, 255, 255, 0) 70%);
          border-radius: 50%;
          animation: sparkle-float linear infinite;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
        }
        @keyframes sparkle-float {
          0% { transform: translateY(0) rotate(0deg) scale(var(--transform-scale, 1)); opacity: var(--initial-opacity, 0); }
          50% { opacity: var(--final-opacity, 1); }
          100% { transform: translateY(-150vh) rotate(360deg) scale(var(--transform-scale, 1.2)); opacity: 0; }
        }

        /* Flower Main Container - Ini adalah div yang membungkus semua bagian bunga */
        .flower-main-container {
            width: 200px; /* Ukuran total bunga */
            height: 250px; /* Tinggi total bunga dengan tangkai */
            position: relative;
            /* Menggunakan flexbox untuk memusatkan komponen bunga di dalamnya */
            display: flex;
            align-items: center; /* Memusatkan secara vertikal */
            justify-content: center; /* Memusatkan secara horizontal */
            margin-top: 20px; /* Memberi sedikit jarak dari teks di atasnya */
        }
        
        .flower-shine::before {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%);
            border-radius: 50%;
            opacity: 0;
            transition: opacity 0.4s ease-out;
            z-index: 0;
            transform: translateZ(-1px); /* Mencegah tumpang tindih dengan kelopak */
        }
        .flower-shine:hover::before {
            opacity: 1;
        }
        
        .flower-core {
          position: absolute;
          /* Perhitungan baru untuk memusatkan */
          top: 75px; 
          left: 80px; 
          width: 40px;
          height: 40px;
          background: radial-gradient(circle, #ffe082 0%, #ffc107 80%);
          border-radius: 50%;
          z-index: 10;
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.6), 
                      inset 0 0 8px rgba(255, 255, 255, 0.8);
          border: 2px solid rgba(255, 255, 255, 0.7);
        }

        .flower-petal {
          position: absolute;
          width: 60px; /* Lebar kelopak */
          height: 90px; /* Tinggi kelopak */
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; /* Bentuk elips/tetesan air */
          transform-origin: center bottom; /* Rotasi dari pangkal bawah */
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255,255,255,0.7);
        }

        /* Outer Petals (Lighter pink with glow) */
        .outer-petal-1, .outer-petal-2, .outer-petal-3, 
        .outer-petal-4, .outer-petal-5, .outer-petal-6,
        .outer-petal-7, .outer-petal-8 {
          background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%);
          z-index: 2;
          top: 60px; /* Posisi dasar kelopak disesuaikan */
          left: 70px; /* Posisi dasar kelopak disesuaikan */
          filter: drop-shadow(0 0 8px rgba(255, 200, 220, 0.7)); /* Efek cahaya pink */
        }
        .outer-petal-1 { transform: rotate(-22.5deg); }
        .outer-petal-2 { transform: rotate(22.5deg); }
        .outer-petal-3 { transform: rotate(67.5deg); }
        .outer-petal-4 { transform: rotate(112.5deg); }
        .outer-petal-5 { transform: rotate(157.5deg); }
        .outer-petal-6 { transform: rotate(202.5deg); }
        .outer-petal-7 { transform: rotate(247.5deg); }
        .outer-petal-8 { transform: rotate(292.5deg); }

        /* Inner Petals (Vibrant pink, slightly smaller) */
        .inner-petal-1, .inner-petal-2, .inner-petal-3, 
        .inner-petal-4, .inner-petal-5, .inner-petal-6,
        .inner-petal-7, .inner-petal-8 {
          background: linear-gradient(135deg, #ff85a2 0%, #ff6f91 100%);
          z-index: 5;
          top: 65px; /* Sedikit lebih ke bawah dari outer untuk tumpang tindih, disesuaikan */
          left: 70px; /* Sama seperti outer */
          width: 60px; /* Ukuran sama dengan outer */
          height: 90px;
        }
        .inner-petal-1 { transform: rotate(-45deg); } /* Rotasi awal disesuaikan */
        .inner-petal-2 { transform: rotate(0deg); }
        .inner-petal-3 { transform: rotate(45deg); }
        .inner-petal-4 { transform: rotate(90deg); }
        .inner-petal-5 { transform: rotate(135deg); }
        .inner-petal-6 { transform: rotate(180deg); }
        .inner-petal-7 { transform: rotate(225deg); }
        .inner-petal-8 { transform: rotate(270deg); }

        .flower-stem {
          position: absolute;
          top: 155px; /* Disesuaikan agar menyambung ke bawah bunga */
          left: 96px; /* Disesuaikan agar tepat di tengah bunga */
          width: 8px;
          height: 90px;
          background: linear-gradient(to bottom, #8BC34A 0%, #689F38 100%);
          border-radius: 4px;
          z-index: 1;
          box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
        }

        .flower-leaf {
          position: absolute;
          top: 185px; /* Disesuaikan relatif ke tangkai */
          left: 70px; /* Disesuaikan relatif ke tangkai */
          width: 35px;
          height: 25px;
          background: linear-gradient(to right, #Aed581 0%, #8BC34A 100%);
          border-radius: 50% 0 50% 50%;
          transform: rotate(-35deg);
          z-index: 1;
          box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
        }

        /* Modal Styling */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(100, 50, 150, 0.5);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.4s ease-out;
        }

        .modal-content {
          background: #fff;
          border-radius: 1.5rem;
          max-width: 480px;
          width: 90%;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.45); 
          animation: slideUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 2px solid #e0b0ff;
        }
        
        .message-box {
            background-image: linear-gradient(135deg, #fefeff 0%, #fff7f9 100%);
        }

        .close-btn {
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          font-size: 2.2rem;
          cursor: pointer;
          color: #fff;
          transition: transform 0.2s ease-in-out;
          z-index: 1100;
          line-height: 1;
        }

        .close-btn:hover {
          transform: scale(1.2) rotate(90deg);
          color: #ffefff;
        }
        
        .hearts-confetti {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
        }

        .hearts-confetti span {
            position: absolute;
            animation: heartFloat 4s infinite ease-in;
            font-size: 1.6rem;
            opacity: 0;
        }
        
        .hearts-confetti span:nth-child(1) { left: 15%; animation-delay: 0.3s; }
        .hearts-confetti span:nth-child(2) { left: 40%; animation-delay: 1.2s; }
        .hearts-confetti span:nth-child(3) { left: 65%; animation-delay: 0s; }
        .hearts-confetti span:nth-child(4) { left: 25%; animation-delay: 2.0s; }
        .hearts-confetti span:nth-child(5) { left: 80%; animation-delay: 1.0s; }


        .ok-btn {
          background: #a855f7;
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 1.15rem;
          cursor: pointer;
          margin: 1.8rem 0 2.8rem 0;
          transition: background-color 0.3s, transform 0.1s;
          box-shadow: 0 7px #7e22ce;
        }

        .ok-btn:active {
          transform: translateY(4px);
          box-shadow: 0 3px #7e22ce;
        }

        /* Keyframes */
        @keyframes sparkle-float {
            0% { transform: translateY(0) scale(0.8); opacity: 0; }
            20% { opacity: 0.7; }
            100% { transform: translateY(-100vh) scale(1.2); opacity: 0; }
        }

        @keyframes animate-title-fade {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-title-fade { animation: animate-title-fade 1s ease-out forwards; }

        @keyframes animate-subtitle-fade {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-subtitle-fade { animation: animate-subtitle-fade 1s ease-out forwards; }
        .animate-subtitle-fade.animation-delay-300 { animation-delay: 0.4s; }

        @keyframes animate-call-to-action {
            0% { opacity: 0; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.05); }
            100% { opacity: 1; transform: scale(1); }
        }
        .animate-call-to-action { animation: animate-call-to-action 1s ease-out forwards; }
        .animate-call-to-action.animation-delay-600 { animation-delay: 0.8s; }


        @keyframes animate-flower-burst {
          0% { transform: scale(1); }
          50% { transform: scale(1.18) rotate(-2deg); }
          100% { transform: scale(1.05); }
        }
        
        @keyframes flowerAuraPulse {
            0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 105, 180, 0.4)); }
            50% { filter: drop-shadow(0 0 20px rgba(255, 105, 180, 0.7)); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100px) scale(0.5);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes heartFloat {
            0% { 
                transform: translateY(0) rotate(0deg); 
                opacity: 0;
            }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { 
                transform: translateY(-150px) rotate(360deg); 
                opacity: 0;
            }
        }
      `}</style>
    </div>
  );
}