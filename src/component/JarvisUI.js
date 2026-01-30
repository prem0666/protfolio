import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { HolographicOrb } from './HolographicOrb';

const JarvisUI = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Systems online. How can I assist you, sir?' }
  ]);
  const [aiState, setAiState] = useState('idle'); // idle, listening, processing, speaking

  return (
    <div className="relative h-screen w-screen bg-[#0a0e27] overflow-hidden font-sans text-white">
      {/* Background Grid & Particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#00f3ff 1px, transparent 1px), linear-gradient(90deg, #00f3ff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* Status Bar */}
      <div className="absolute top-0 w-full p-6 flex justify-between items-center backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className={`h-2 w-2 rounded-full animate-pulse ${aiState === 'listening' ? 'bg-cyan-400' : 'bg-blue-600'}`} />
          <span className="uppercase tracking-[0.2em] text-xs font-bold text-cyan-400">{aiState}</span>
        </div>
        <div className="text-xs text-gray-400 uppercase tracking-widest">Mark VII OS // Advanced Neural Link</div>
      </div>

      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <HolographicOrb state={aiState} />
        </Canvas>
      </div>

      {/* Chat & Controls Container */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 pb-12 pointer-events-none">
        
        {/* Chat Window */}
        <div className="w-full max-w-2xl mx-auto h-[30vh] overflow-y-auto mb-8 pointer-events-auto no-scrollbar">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={i}
                className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`p-4 rounded-2xl backdrop-blur-md border ${
                  msg.role === 'user' 
                    ? 'bg-blue-600/20 border-blue-500/50 text-right' 
                    : 'bg-cyan-900/20 border-cyan-500/50 text-left'
                } max-w-[80%]`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div className="w-full max-w-xl mx-auto pointer-events-auto">
          <div className="relative flex items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-[0_0_20px_rgba(0,243,255,0.1)]">
            <input 
              type="text" 
              placeholder="Ask JARVIS..." 
              className="bg-transparent border-none outline-none flex-grow px-6 py-3 text-white placeholder:text-gray-500"
            />
            <button className="p-3 rounded-full hover:bg-cyan-500/20 transition-colors group">
              <div className="h-6 w-6 bg-cyan-400 rounded-full group-hover:scale-110 transition-transform shadow-[0_0_10px_#00f3ff]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JarvisUI;