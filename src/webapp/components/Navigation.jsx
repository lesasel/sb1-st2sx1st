import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTickets } from '../hooks/useTickets';

export default function Navigation() {
  const { tickets } = useTickets();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <NavLink to="/" className="flex flex-col items-center">
          <span className="text-sm">SHANS</span>
        </NavLink>
        <NavLink to="/wheel" className="flex flex-col items-center">
          <span className="text-sm">Колесо</span>
        </NavLink>
        <NavLink to="/tasks" className="flex flex-col items-center">
          <div className="relative">
            <span className="text-sm">Задания</span>
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs rounded-full px-1">
              {tickets}
            </span>
          </div>
        </NavLink>
        <NavLink to="/wallet" className="flex flex-col items-center">
          <span className="text-sm">Кошелек</span>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center">
          <span className="text-sm">О нас</span>
        </NavLink>
      </div>
    </nav>
  );
}