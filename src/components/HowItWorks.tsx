
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Connect",
      description: "Link your Typeform, SurveyMonkey, and Google Forms accounts in seconds",
      icon: "🔗",
      color: "cyan"
    },
    {
      number: "2", 
      title: "Aggregate",
      description: "AI automatically collects and organizes feedback from all your forms in one dashboard",
      icon: "📊",
      color: "pink"
    },
    {
      number: "3",
      title: "Analyze", 
      description: "Get instant insights and prioritized action items to improve your product",
      icon: "🎯",
      color: "purple"
    }
  ];

  const colorClasses = {
    cyan: {
      accent: 'text-cyan-400',
      glow: 'shadow-[0_0_20px_rgba(0,188,212,0.3)]',
      border: 'border-cyan-400/30',
      bg: 'bg-cyan-500/10'
    },
    pink: {
      accent: 'text-pink-400', 
      glow: 'shadow-[0_0_20px_rgba(255,105,180,0.3)]',
      border: 'border-pink-400/30',
      bg: 'bg-pink-500/10'
    },
    purple: {
      accent: 'text-purple-400',
      glow: 'shadow-[0_0_20px_rgba(139,92,246,0.3)]',
      border: 'border-purple-400/30', 
      bg: 'bg-purple-500/10'
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-inter text-4xl md:text-5xl font-bold text-white mb-6">
            How It <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto">
            Start aggregating feedback in minutes with our simple three-step process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center">
              {/* Step Card */}
              <div className={`
                ${colorClasses[step.color as keyof typeof colorClasses].glow}
                ${colorClasses[step.color as keyof typeof colorClasses].border}
                ${colorClasses[step.color as keyof typeof colorClasses].bg}
                bg-black/40 backdrop-blur-lg border rounded-2xl p-8 
                hover:scale-105 transition-all duration-300 w-full max-w-sm
                relative group
              `}>
                {/* Step Icon */}
                <div className="text-6xl mb-4">
                  {step.icon}
                </div>
                
                <div className={`
                  text-2xl font-inter font-bold mb-2
                  ${colorClasses[step.color as keyof typeof colorClasses].accent}
                `}>
                  {step.number}. {step.title}
                </div>
                
                <p className="font-inter text-gray-300 text-center leading-relaxed">
                  {step.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>

              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="text-gray-500 w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
