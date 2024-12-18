import { useState } from 'react';
import { useAnimation } from 'framer-motion';
import { WHEEL_SEGMENTS, SPIN_SETTINGS } from '../constants';

export function useWheelSpin({ onSpinComplete }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const controls = useAnimation();

  const spin = async () => {
    setIsSpinning(true);
    const randomSegment = Math.floor(Math.random() * WHEEL_SEGMENTS.length);
    const segmentAngle = 360 / WHEEL_SEGMENTS.length;
    const finalAngle = SPIN_SETTINGS.ROTATIONS * 360 + randomSegment * segmentAngle;

    await controls.start({
      rotate: [0, finalAngle],
      transition: { 
        duration: SPIN_SETTINGS.DURATION,
        ease: "easeOut"
      }
    });

    setIsSpinning(false);
    onSpinComplete(WHEEL_SEGMENTS[randomSegment].value);
  };

  return {
    isSpinning,
    controls,
    spin
  };
}