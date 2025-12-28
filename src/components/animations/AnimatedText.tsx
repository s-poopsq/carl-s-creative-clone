import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: 'words' | 'chars' | 'lines';
}

const AnimatedText = ({ 
  children, 
  className = '', 
  delay = 0,
  type = 'words'
}: AnimatedTextProps) => {
  const text = String(children);
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: type === 'chars' ? 0.02 : 0.08, 
        delayChildren: delay 
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  if (type === 'chars') {
    return (
      <motion.span
        className={`inline-block ${className}`}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (type === 'words') {
    return (
      <motion.span
        className={`inline-block ${className}`}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split('\n').map((line, index) => (
        <motion.div key={index} variants={child}>
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
