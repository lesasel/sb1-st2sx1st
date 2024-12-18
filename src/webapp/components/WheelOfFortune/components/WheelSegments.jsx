import React from 'react';
import { WHEEL_SEGMENTS } from '../constants';

export default function WheelSegments() {
  return (
    <>
      {WHEEL_SEGMENTS.map((segment, index) => (
        <div
          key={index}
          className="absolute w-full h-full flex items-center justify-center"
          style={{
            transform: `rotate(${index * (360/WHEEL_SEGMENTS.length)}deg)`
          }}
        >
          <span className="text-2xl font-bold text-black">
            {segment.text}
          </span>
        </div>
      ))}
    </>
  );
}