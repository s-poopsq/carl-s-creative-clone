import { useState, useRef, useEffect } from 'react';

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle?: string;
  date?: string;
  image: string;
  description?: string;
  index: number;
  initialPosition?: { x: number; y: number };
  rotation?: number;
  isScattered: boolean;
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

const ProjectCard = ({
  id,
  title,
  subtitle,
  date,
  image,
  description,
  index,
  initialPosition,
  rotation = 0,
  isScattered,
  onDragStart,
  onDragEnd,
}: ProjectCardProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isScattered && initialPosition) {
      setPosition(initialPosition);
    } else {
      setPosition({ x: 0, y: 0 });
    }
  }, [isScattered, initialPosition]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isScattered) return;
    
    setIsDragging(true);
    onDragStart?.();
    
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !cardRef.current) return;
    
    const parent = cardRef.current.parentElement;
    if (!parent) return;
    
    const parentRect = parent.getBoundingClientRect();
    const newX = e.clientX - parentRect.left - dragOffset.x;
    const newY = e.clientY - parentRect.top - dragOffset.y;
    
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    onDragEnd?.();
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const gridStyles = !isScattered ? {
    position: 'relative' as const,
    transform: 'none',
  } : {
    position: 'absolute' as const,
    left: position.x,
    top: position.y,
    transform: `rotate(${rotation}deg)`,
    zIndex: isDragging ? 100 : 10 + index,
  };

  return (
    <div
      ref={cardRef}
      onMouseDown={handleMouseDown}
      className={`
        group bg-card shadow-card hover:shadow-card-hover 
        transition-all duration-300 overflow-hidden
        ${isScattered ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}
        ${isDragging ? 'scale-105' : ''}
      `}
      style={{
        ...gridStyles,
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Index number - positioned outside card */}
      <div className="absolute -top-6 right-0 font-mono text-xs text-muted-foreground">
        -{index + 1}-
      </div>

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {date && (
          <div className="font-mono text-xs text-muted-foreground mb-2">
            [{date}]
          </div>
        )}
        
        <h3 className="font-display text-2xl font-normal mb-1 tracking-tight">
          {title}
        </h3>
        
        {subtitle && (
          <p className="font-mono text-xs text-muted-foreground">
            {subtitle}
          </p>
        )}
        
        {description && (
          <p className="font-mono text-xs text-muted-foreground mt-3 leading-relaxed">
            {description}
          </p>
        )}

        <div className="mt-4 flex items-center gap-2 font-mono text-xs group-hover:gap-3 transition-all duration-300">
          <span>Read more</span>
          <span className="text-muted-foreground">…</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
