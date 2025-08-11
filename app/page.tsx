"use client";

import { useEffect, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

type Miniapp = {
  name: string;
  url: string;
  icon: string;
  desc: string;
};

export default function Home() {
  const [user, setUser] = useState<any | null>(null);
  const [showExplosion, setShowExplosion] = useState(false);
  const [appReady, setAppReady] = useState(false);
  const [splashImageUrl, setSplashImageUrl] = useState<string>('');

  const miniapps: Miniapp[] = [
    {
      name: "FC Tap Game",
      url: "https://farcaster.xyz/miniapps/jcV0ojRAzBKZ/fc-tap-game",
      icon: "https://fc-taps.vercel.app/icon.png",
      desc: "A miniapp to test your finger speeds, tap as much as you can in 15 Seconds"
    },
    {
      name: "Farscan",
      url: "https://farcaster.xyz/miniapps/9GKmp-8gSzi_/farscan",
      icon: "https://farscan.replit.app/icon.png",
      desc: "A miniapp to Check your simple Base transaction history directly in Farcaster. No browser required."
    },
    {
      name: "Cast-it-Fast",
      url: "https://farcaster.xyz/miniapps/Y6Z-3Zz-bf_T/cast-it-fast",
      icon: "https://cast-it-fast.vercel.app/app-icon.png",
      desc: "A miniapp of a fast-paced trivia game with 3 rounds and 15 questions. Cast your answer fast."
    },
    {
      name: "Feed The Snake",
      url: "https://farcaster.xyz/miniapps/qloEP_2uNhBO/feed-the-snake",
      icon: "https://feed-the-snake-six.vercel.app/icon.png",
      desc: "A miniapp to play the old classic Snake Game with modern neon vibes."
    },
    {
      name: "Sloto Caster",
      url: "https://farcaster.xyz/miniapps/q48CMd_Ss_iF/sloto-caster",
      icon: "https://sloto-caster.vercel.app/logo.png",
      desc: "A miniapp to test your luck, slot machine game on base network, try spinning and win Eth now."
    }
  ];

  useEffect(() => {
    const initSDK = async () => {
      try {
        sdk.actions.ready();
        
        const yourSplashImageUrl = "https://mini-hub-six.vercel.app/splash-image.png";
        setSplashImageUrl(yourSplashImageUrl);

        const ctx = await sdk.context;
        setUser(ctx.user);

        setTimeout(() => {
          setShowExplosion(true);
          setTimeout(() => {
            setAppReady(true);
          }, 1200);
        }, 300);
      } catch (error) {
        console.error('SDK initialization failed:', error);
        setAppReady(true);
      }
    };

    initSDK();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {showExplosion && !appReady && splashImageUrl && (
        <div className="fixed inset-0 z-50 pointer-events-none bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-32 h-32 animate-explode-${i + 1} overflow-hidden rounded-lg shadow-2xl`}
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundImage: `url(${splashImageUrl})`,
                backgroundSize: '400px 400px',
                backgroundPosition: i === 0 ? '-60px -60px' : 
                                  i === 1 ? '-140px -60px' : 
                                  i === 2 ? '-60px -140px' : 
                                  i === 3 ? '-140px -140px' : 
                                  '-100px -100px',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glitch"></div>
            </div>
          ))}
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-32 bg-white animate-crack"
                style={{
                  transform: `rotate(${i * 45}deg)`,
                  transformOrigin: 'bottom center',
                }}
              ></div>
            ))}
          </div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-flash-center"></div>
        </div>
      )}

      <div className={`transition-opacity duration-1000 ${appReady ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full shadow-lg"></div>
          </div>
        ))}

        <div className="relative z-10 max-w-md mx-auto px-6 py-8">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-block p-4 mb-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Mini-Hub
              </h1>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Welcome to <span className="text-blue-300 font-semibold">Mini-Hub</span> — showcasing the 5 miniapps 
              I've built for Farcaster. Simple, fun, and ready to play! ✨
            </p>
          </div>

          <button
            onClick={() => sdk.actions.openUrl("https://farcaster.xyz/vinu07")}
            className="w-full mb-8 group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            <span className="relative flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
              Follow Me on Farcaster
            </span>
          </button>

          {user && (
            <div className="text-center mb-8 animate-slide-in">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                <p className="text-white/90 font-medium">
                  Hi, <span className="text-blue-300">{user.displayName}</span> 👋
                </p>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {miniapps.map((app, i) => (
              <div
                key={i}
                className="group relative animate-slide-up backdrop-blur-md bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 transform hover:scale-102 hover:-translate-y-1"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-pink-400/10 rounded-3xl transition-all duration-500"></div>
                
                <div className="relative flex items-start space-x-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl p-2 group-hover:bg-white/30 transition-all duration-300 shadow-lg">
                      <img
                        src={app.icon}
                        alt={`${app.name} icon`}
                        className="w-full h-full object-contain rounded-xl"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiM2MzY2RjEiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+CjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyek0xMyAxN2gtMnYtNmgydjZ6bTAtOGgtMlY3aDJ2MnoiLz4KPC9zdmc+Cjwvc3ZnPgo=';
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                      {app.name}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300">
                      {app.desc}
                    </p>
                    
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        sdk.actions.openUrl(app.url);
                      }}
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-purple-500/25 cursor-pointer relative z-10"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Launch App
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <div className="inline-block px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <p className="text-white/60 text-sm">
                Powered by <span className="text-blue-300 font-semibold">Farcaster</span> • Made with ❤️
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes fade-in-content {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes flash-center {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(100); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(200); opacity: 0; }
        }
        @keyframes crack {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.5); }
        }
        @keyframes glitch {
          0%, 100% { transform: translateX(0); opacity: 0.7; }
          25% { transform: translateX(-2px); opacity: 0.9; }
          50% { transform: translateX(2px); opacity: 0.5; }
          75% { transform: translateX(-1px); opacity: 0.8; }
        }
        @keyframes explode-1 {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
          100% { transform: translate(-300px, -300px) scale(0.2) rotate(360deg); opacity: 0; }
        }
        @keyframes explode-2 {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
          100% { transform: translate(300px, -300px) scale(0.2) rotate(-360deg); opacity: 0; }
        }
        @keyframes explode-3 {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
          100% { transform: translate(-350px, 250px) scale(0.15) rotate(540deg); opacity: 0; }
        }
        @keyframes explode-4 {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
          100% { transform: translate(350px, 250px) scale(0.15) rotate(-540deg); opacity: 0; }
        }
        @keyframes explode-5 {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
          100% { transform: translate(0px, 400px) scale(0.1) rotate(720deg); opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animate-fade-in-content {
          animation: fade-in-content 1s ease-out;
        }
        .animate-explode-1 {
          animation: explode-1 1s ease-out forwards;
        }
        .animate-explode-2 {
          animation: explode-2 1s ease-out forwards;
        }
        .animate-explode-3 {
          animation: explode-3 1s ease-out forwards;
        }
        .animate-explode-4 {
          animation: explode-4 1s ease-out forwards;
        }
        .animate-explode-5 {
          animation: explode-5 1s ease-out forwards;
        }
        .animate-flash-center {
          animation: flash-center 1s ease-out forwards;
        }
        .animate-crack {
          animation: crack 0.6s ease-out forwards;
        }
        .animate-glitch {
          animation: glitch 0.3s ease-in-out infinite;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}
