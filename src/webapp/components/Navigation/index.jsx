import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTickets } from '../../hooks/useTickets';
import NavItem from './NavItem';
import { 
  HomeIcon, 
  WheelIcon, 
  TicketIcon, 
  WalletIcon, 
  InfoIcon 
} from './icons';

export default function Navigation() {
  const { tickets } = useTickets();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        <NavItem to="/" icon={<HomeIcon />} label="SHANS" />
        <NavItem to="/wheel" icon={<WheelIcon />} label="Колесо" />
        <NavItem 
          to="/tasks" 
          icon={<TicketIcon />} 
          label="Задания"
          badge={tickets} 
        />
        <NavItem to="/wallet" icon={<WalletIcon />} label="Кошелек" />
        <NavItem to="/about" icon={<InfoIcon />} label="О нас" />
      </div>
    </nav>
  );
}