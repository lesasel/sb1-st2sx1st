// Основная страница заданий
import React, { useState } from 'react';
import { CONFIG } from '../../../config/constants';
import { canUserGetReward } from '../../../utils/validationUtils';
import TaskCard from './components/TaskCard';
import RewardAnimation from './components/RewardAnimation';
import AdBanner from '../../components/AdBanner';

export default function TasksPage() {
  const [lastAdWatch, setLastAdWatch] = useState(null);
  const [showReward, setShowReward] = useState(false);
  const [currentReward, setCurrentReward] = useState(0);

  const handleTaskComplete = (reward) => {
    setCurrentReward(reward);
    setShowReward(true);
    // TODO: Отправить на сервер информацию о выполнении задания
  };

  const handleAdWatch = () => {
    if (!canUserGetReward(lastAdWatch, CONFIG.INTERVALS.AD_WATCH)) return;
    
    setLastAdWatch(Date.now());
    handleTaskComplete(CONFIG.REWARDS.AD_WATCH);
  };

  const handleInviteFriend = () => {
    // TODO: Реализовать механизм приглашения друзей
    handleTaskComplete(CONFIG.REWARDS.INVITE_FRIEND);
  };

  return (
    <div className="py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">Задания</h1>
      
      <TaskCard
        title="Посмотреть рекламу"
        description="Доступно 2 раза каждые 6 часов"
        reward={CONFIG.REWARDS.AD_WATCH}
        icon={<span>📺</span>}
        onComplete={handleAdWatch}
        isDisabled={!canUserGetReward(lastAdWatch, CONFIG.INTERVALS.AD_WATCH)}
      />

      <TaskCard
        title="Дай SHANS другу"
        description="Пригласи друга и получи билеты"
        reward={CONFIG.REWARDS.INVITE_FRIEND}
        icon={<span>🤝</span>}
        onComplete={handleInviteFriend}
      />

      <AdBanner />

      <RewardAnimation
        isVisible={showReward}
        reward={currentReward}
        onComplete={() => setShowReward(false)}
      />
    </div>
  );
}