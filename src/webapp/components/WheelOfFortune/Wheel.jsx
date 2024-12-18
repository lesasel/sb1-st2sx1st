import React from 'react';
import { motion } from 'framer-motion';
import { canUserGetReward } from '../../../utils/validationUtils';
import { CONFIG } from '../../../config/constants';
import { WHEEL_SEGMENTS } from './constants';
import { useWheelSpin } from './hooks/useWheelSpin';
import SpinButton from './components/SpinButton';
import WheelSegments from './components/WheelSegments';

export default function Wheel({ onSpinComplete, lastSpinTime }) {
  const canSpin = canUserGetReward(lastSpinTime, CONFIG.INTERVALS.WHEEL_SPIN);
  const { isSpinning, controls, spin } = useWheelSpin({ onSpinComplete });

  const handleSpin = () => {
    if (!canSpin || isSpinning) return;
    spin();
  };

  return (
    <div className="relative w-64 h-64 mx-auto">
      <motion.div 
        className="absolute w-full h-full rounded-full"
        animate={controls}
        style={{ 
          backgroundImage: `conic-gradient(
            ${WHEEL_SEGMENTS.map((segment, index) => 
              `${segment.color} ${index * (360/WHEEL_SEGMENTS.length)}deg ${(index + 1) * (360/WHEEL_SEGMENTS.length)}deg`
            ).join(', ')}
          )`
        }}
      >
        <WheelSegments />
      </motion.div>
      
      <SpinButton 
        onClick={handleSpin}
        disabled={!canSpin || isSpinning}
      />
    </div>
  );
}