// Анимация получения награды
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RewardAnimation({ isVisible, reward, onComplete }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={onComplete}
        >
          <motion.div
            className="bg-white rounded-lg p-8 text-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Поздравляем!</h2>
            <p className="text-lg mb-4">Вы получили</p>
            <motion.div
              className="text-4xl font-bold text-primary mb-4"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: 2 }}
            >
              +{reward} билетов
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}