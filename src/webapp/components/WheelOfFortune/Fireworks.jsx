// Компонент анимации фейерверков
import React from 'react';
import { motion } from 'framer-motion';

export default function Fireworks({ isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full"
          initial={{ 
            x: '50vw',
            y: '50vh'
          }}
          animate={{ 
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: [1, 0],
            opacity: [1, 0]
          }}
          transition={{ 
            duration: 1,
            delay: Math.random() * 0.5,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}