
import { Card } from "@/components/ui/card";

interface FeedbackItem {
  user: string;
  platform: 'Reddit' | 'Twitter' | 'Support' | 'In-app';
  message: string;
  emotion?: string;
}

interface FeedbackCardProps {
  title: string;
  feedbackCount: number;
  emotionCounts: {
    angry: number;
    comment: number;
    thread: number;
  };
  feedbacks: FeedbackItem[];
  color: 'cyan' | 'pink' | 'purple';
  delay?: number;
}

const FeedbackCard = ({ 
  title, 
  feedbackCount, 
  emotionCounts, 
  feedbacks, 
  color,
  delay = 0 
}: FeedbackCardProps) => {
  const colorClasses = {
    cyan: {
      glow: 'shadow-[0_0_30px_rgba(0,255,255,0.3)]',
      border: 'border-cyan-400/30',
      accent: 'text-cyan-400',
      bg: 'bg-cyan-500/5',
      neon: 'shadow-[0_0_15px_rgba(0,255,255,0.5)]',
    },
    pink: {
      glow: 'shadow-[0_0_30px_rgba(255,105,180,0.3)]',
      border: 'border-pink-400/30',
      accent: 'text-pink-400',
      bg: 'bg-pink-500/5',
      neon: 'shadow-[0_0_15px_rgba(255,105,180,0.5)]',
    },
    purple: {
      glow: 'shadow-[0_0_30px_rgba(139,92,246,0.3)]',
      border: 'border-purple-400/30',
      accent: 'text-purple-400',
      bg: 'bg-purple-500/5',
      neon: 'shadow-[0_0_15px_rgba(139,92,246,0.5)]',
    },
  };

  const platformIcons = {
    Reddit: '🟠',
    Twitter: '🐦',
    Support: '🎧',
    'In-app': '📱'
  };

  const styles = colorClasses[color];

  return (
    <Card 
      className={`
        ${styles.glow} ${styles.border} ${styles.bg}
        bg-black/60 backdrop-blur-lg border p-6 
        hover:scale-105 transition-all duration-500 
        hover:${styles.neon}
        group cursor-pointer animate-float
        relative overflow-hidden max-w-sm
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h3 className={`font-inter font-semibold text-white text-sm leading-tight`}>
            {title} 📌
          </h3>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-3 text-xs text-gray-300">
          <span>Feedbacks: {feedbackCount}</span>
          <span>😠 {emotionCounts.angry}</span>
          <span>💬 {emotionCounts.comment}</span>
          <span>🧵 {emotionCounts.thread}</span>
        </div>

        {/* Feedback Items */}
        <div className="space-y-3">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs">{platformIcons[feedback.platform]}</span>
                <span className={`text-xs font-medium ${styles.accent}`}>
                  {feedback.user} ({feedback.platform})
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed pl-4">
                "{feedback.message}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-4 right-4 w-1 h-1 ${styles.accent.replace('text-', 'bg-')} rounded-full animate-pulse`} />
        <div className={`absolute bottom-6 left-6 w-1 h-1 ${styles.accent.replace('text-', 'bg-')} rounded-full animate-pulse`} style={{ animationDelay: '1s' }} />
      </div>
    </Card>
  );
};

export default FeedbackCard;
