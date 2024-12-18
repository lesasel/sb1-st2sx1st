// Страница "О приложении"
import React from 'react';
import { motion } from 'framer-motion';
import AdBanner from '../../components/AdBanner';

export default function AboutPage() {
  return (
    <div className="py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-center mb-8">О Приложении</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-lg leading-relaxed mb-4">
            Всем доброго! Этот розыгрыш рекламных денег - уникальная возможность испытать свой SHANS!
          </p>
          
          <p className="text-lg leading-relaxed mb-4">
            80% денег полученных от рекламы помещается в общий банк! Задача пользователя получить как можно больше билетов до начала розыгрыша!
          </p>
          
          <p className="text-lg leading-relaxed mb-4">
            Билеты можно получить:
          </p>
          
          <ul className="list-disc list-inside mb-4 ml-4">
            <li className="mb-2">Выполнив вход в игру (один раз в сутки)</li>
            <li className="mb-2">Выиграть прокрутив колесо удачи (один раз каждые восемь часов)</li>
            <li className="mb-2">Выполняя задания</li>
          </ul>
          
          <p className="text-lg leading-relaxed mb-4">
            Чем больше билетов тем больше SHANS на победу.
          </p>
          
          <p className="text-lg leading-relaxed mb-4">
            Розыгрыш начинается каждое воскресенье в 20:00 (UTC +04:00).
          </p>
          
          <p className="text-xl font-bold text-center text-primary mt-8">
            Всем Удачи, не упусти свой SHANS!
          </p>
        </div>
        
        <AdBanner />
      </motion.div>
    </div>
  );
}