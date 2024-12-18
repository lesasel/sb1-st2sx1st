import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavItem({ to, icon, label, badge }) {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => `
        flex flex-col items-center justify-center w-16 py-1
        ${isActive ? 'text-primary' : 'text-gray-600'}
      `}
    >
      {({ isActive }) => (
        <>
          <div className="relative">
            {icon}
            {badge !== undefined && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-primary text-black text-xs font-bold
                          rounded-full h-5 min-w-5 flex items-center justify-center px-1"
              >
                {badge}
              </motion.div>
            )}
          </div>
          <span className="text-xs mt-1">{label}</span>
        </>
      )}
    </NavLink>
  );
}