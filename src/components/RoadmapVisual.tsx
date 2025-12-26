import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Roadmap, RoadmapStep } from '@/data/roadmapsData';

const levelColors = {
  beginner: 'border-green-500/50 bg-green-500/10',
  intermediate: 'border-amber-500/50 bg-amber-500/10',
  advanced: 'border-red-500/50 bg-red-500/10',
};

const levelLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

const StepCard = ({ step, index }: { step: RoadmapStep; index: number }) => (
  <div className="relative">
    {index > 0 && (
      <div className="absolute -top-4 left-1/2 w-px h-4 bg-border" />
    )}
    <div className={`p-4 border rounded-sm ${levelColors[step.level]}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs text-muted-foreground">Step {index + 1}</span>
        <span className={`px-2 py-0.5 text-[10px] font-mono rounded-sm ${
          step.level === 'beginner' ? 'bg-green-500/20 text-green-600 dark:text-green-400' :
          step.level === 'intermediate' ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400' :
          'bg-red-500/20 text-red-600 dark:text-red-400'
        }`}>
          {levelLabels[step.level]}
        </span>
      </div>
      <h4 className="font-mono text-sm font-medium text-foreground mb-2">{step.title}</h4>
      <div className="flex flex-wrap gap-1">
        {step.items.map((item) => (
          <span key={item} className="px-2 py-0.5 bg-background/50 text-[11px] font-mono text-muted-foreground border border-border/50 rounded-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const RoadmapVisual = ({ roadmap }: { roadmap: Roadmap }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-border bg-card overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full p-5 flex items-center gap-4 text-left hover:bg-secondary/30 transition-colors bg-gradient-to-r ${roadmap.color} bg-opacity-20`}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-display text-lg font-medium text-foreground">
              {roadmap.title}
            </h3>
            {roadmap.isNew && (
              <span className="px-2 py-0.5 text-[10px] font-mono bg-primary/20 text-primary rounded-sm">New</span>
            )}
          </div>
          <p className="font-mono text-xs text-muted-foreground">{roadmap.subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground hidden sm:block">
            {roadmap.steps.length} steps
          </span>
          {isExpanded ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
        </div>
      </button>

      {isExpanded && (
        <div className="p-6 border-t border-border bg-secondary/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {roadmap.steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
