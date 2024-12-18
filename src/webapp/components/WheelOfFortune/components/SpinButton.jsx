import React from 'react';

export default function SpinButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                 w-16 h-16 rounded-full bg-primary text-black font-bold
                 ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
    >
      КРУТИ
    </button>
  );
}