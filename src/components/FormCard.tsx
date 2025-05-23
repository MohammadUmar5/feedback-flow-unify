
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FormCardProps {
  platform: string;
  color: 'cyan' | 'green' | 'purple';
  responses: string;
  title: string;
}

const FormCard = ({ platform, color, responses, title }: FormCardProps) => {
  const colorClasses = {
    cyan: {
      glow: 'shadow-[0_0_20px_rgba(0,212,255,0.2)]',
      border: 'border-cyan-500/30',
      accent: 'text-cyan-400',
      bg: 'bg-cyan-500/5',
      badge: 'bg-cyan-500/20 text-cyan-300',
    },
    green: {
      glow: 'shadow-[0_0_20px_rgba(0,255,136,0.2)]',
      border: 'border-green-500/30',
      accent: 'text-green-400',
      bg: 'bg-green-500/5',
      badge: 'bg-green-500/20 text-green-300',
    },
    purple: {
      glow: 'shadow-[0_0_20px_rgba(139,92,246,0.2)]',
      border: 'border-purple-500/30',
      accent: 'text-purple-400',
      bg: 'bg-purple-500/5',
      badge: 'bg-purple-500/20 text-purple-300',
    },
  };

  const styles = colorClasses[color];

  return (
    <Card className={`
      ${styles.glow} ${styles.border} ${styles.bg}
      bg-black/40 backdrop-blur-lg border p-6 
      hover:scale-105 transition-all duration-300 
      hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]
      group cursor-pointer
    `}>
      <div className="space-y-4">
        {/* Platform Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-lg ${styles.bg} flex items-center justify-center`}>
              <div className={`w-4 h-4 rounded ${styles.accent.replace('text-', 'bg-')}`} />
            </div>
            <span className="font-semibold text-white">{platform}</span>
          </div>
          <Badge className={`${styles.badge} border-0`}>
            {responses}
          </Badge>
        </div>

        {/* Form Preview */}
        <div className="space-y-3">
          <h3 className={`font-medium ${styles.accent}`}>{title}</h3>
          
          {/* Mock form elements */}
          <div className="space-y-2">
            <div className="h-2 bg-gray-700 rounded-full w-3/4" />
            <div className="h-2 bg-gray-700 rounded-full w-1/2" />
            <div className="h-6 bg-gray-800 rounded border border-gray-600 opacity-50" />
          </div>

          {/* Mock responses */}
          <div className="flex items-center space-x-2 pt-2">
            <div className="flex -space-x-1">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className={`w-6 h-6 rounded-full ${styles.bg} border-2 border-gray-800`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-400">Latest responses</span>
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    </Card>
  );
};

export default FormCard;
