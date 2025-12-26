import { useState, useEffect } from 'react';

interface DragHintProps {
  isVisible: boolean;
}

const DragHint = ({ isVisible }: DragHintProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [isVisible]);

  if (!show) return null;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-fade-in">
      <div className="bg-card border border-border px-6 py-4 shadow-card flex flex-col items-center gap-2">
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 text-muted-foreground"
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        >
          <path d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a6 6 0 0012 0v-6.5a1.5 1.5 0 00-3 0m-6 0V11a1.5 1.5 0 113 0v2.5" />
        </svg>
        <span className="font-mono text-xs text-muted-foreground">
          Hold & Drag to move.
        </span>
      </div>
    </div>
  );
};

export default DragHint;
