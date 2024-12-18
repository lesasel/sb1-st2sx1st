import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Jackpot() {
  const [jackpot, setJackpot] = useState(123456); // Временное значение
  const controls = useAnimation();

  // Анимация обновления джекпота
  useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.3 }
    });
  }, [jackpot]);

  return (
    <div className="bg-black rounded-lg p-4 text-white text-center">
      <motion.div animate={controls}>
        <div className="text-xs mb-1">ДЖЕКПОТ</div>
        <div className="text-3xl font-bold">
          ₽{jackpot.toLocaleString()}
        </div>
      </motion.div>
    </div>
  );
}