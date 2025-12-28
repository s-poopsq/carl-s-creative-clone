import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MicroInteractionProps {
  children: ReactNode;
  className?: string;
  type?: 'hover-lift' | 'hover-glow' | 'tap-shrink' | 'hover-tilt' | 'magnetic';
}

const MicroInteraction = ({ 
  children, 
  className = '', 
  type = 'hover-lift' 
}: MicroInteractionProps) => {
  const hoverLift = {
    whileHover: { y: -8, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)' },
    whileTap: { y: -4, scale: 0.98 },
    transition: { duration: 0.3 }
  };

  const hoverGlow = {
    whileHover: { boxShadow: '0 0 30px rgba(0,0,0,0.1)' },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.3 }
  };

  const tapShrink = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 }
  };

  const hoverTilt = {
    whileHover: { rotateX: -5, rotateY: 5 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.3 },
    style: { transformPerspective: 1000 }
  };

  const magnetic = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 }
  };

  const animations = {
    'hover-lift': hoverLift,
    'hover-glow': hoverGlow,
    'tap-shrink': tapShrink,
    'hover-tilt': hoverTilt,
    'magnetic': magnetic
  };

  const props = animations[type] || hoverLift;

  return (
    <motion.div 
      className={className} 
      whileHover={props.whileHover}
      whileTap={props.whileTap}
      transition={props.transition}
      style={'style' in props ? props.style : undefined}
    >
      {children}
    </motion.div>
  );
};

export default MicroInteraction;
