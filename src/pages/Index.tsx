
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import FeedbackCard from "@/components/FeedbackCard";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  const feedbackData = [
    {
      title: "Users can't find filters on dashboard",
      feedbackCount: 3,
      emotionCounts: { angry: 1, comment: 1, thread: 1 },
      feedbacks: [
        { user: "user123", platform: "Reddit" as const, message: "Can't find the filters anywhere on the main page..." },
        { user: "jane_doe", platform: "Twitter" as const, message: "Too hidden under menus, very frustrating" },
        { user: "frustrated_user", platform: "Support" as const, message: "Spent 10 mins looking for basic filters" }
      ],
      color: "cyan" as const,
      delay: 0
    },
    {
      title: "App crashes on multiple image upload",
      feedbackCount: 5,
      emotionCounts: { angry: 3, comment: 1, thread: 1 },
      feedbacks: [
        { user: "photographer_pro", platform: "Reddit" as const, message: "Crashes every time I try to upload more than 3 images" },
        { user: "designer_mike", platform: "In-app" as const, message: "Super annoying bug, loses all my work" },
        { user: "sarah_uploads", platform: "Support" as const, message: "Consistently crashes with batch uploads" }
      ],
      color: "pink" as const,
      delay: 0.5
    },
    {
      title: "Positive feedback on new landing page",
      feedbackCount: 8,
      emotionCounts: { angry: 0, comment: 4, thread: 4 },
      feedbacks: [
        { user: "happy_user", platform: "Twitter" as const, message: "Love the new design! So much cleaner and modern" },
        { user: "ux_reviewer", platform: "Reddit" as const, message: "Finally a landing page that actually explains the product" },
        { user: "beta_tester", platform: "In-app" as const, message: "The new onboarding flow is incredible" }
      ],
      color: "purple" as const,
      delay: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-16 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Main Headline */}
            <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-glow">
                Unify Your Feedback.
              </span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
                Instantly.
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="font-inter text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Aggregate insights from <span className="text-cyan-400 font-semibold">Reddit, Twitter, in-app, surveys, and support</span> — all in one place.
            </p>
            
            {/* Feedback Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
              {feedbackData.map((card, index) => (
                <FeedbackCard key={index} {...card} />
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="mb-16">
              <Button 
                size="lg" 
                className="font-inter bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_50px_rgba(0,212,255,0.6)] transition-all duration-300 group"
              >
                Join the Beta
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="font-inter text-sm text-gray-400 mt-4">
                Early access • No credit card required
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <Badge variant="outline" className="border-gray-700 text-gray-300 px-6 py-3 bg-black/20 backdrop-blur-sm hover:border-green-400/30 transition-colors">
                <Shield className="mr-2 h-4 w-4 text-green-400" />
                Secure by Design
              </Badge>
              <Badge variant="outline" className="border-gray-700 text-gray-300 px-6 py-3 bg-black/20 backdrop-blur-sm hover:border-cyan-400/30 transition-colors">
                <Zap className="mr-2 h-4 w-4 text-cyan-400" />
                Backed by Builders
              </Badge>
              <Badge variant="outline" className="border-gray-700 text-gray-300 px-6 py-3 bg-black/20 backdrop-blur-sm hover:border-purple-400/30 transition-colors">
                <Users className="mr-2 h-4 w-4 text-purple-400" />
                Used by Early Teams
              </Badge>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Integrations Section */}
        <Integrations />

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Footer */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Transform</span> Your Feedback?
            </h2>
            <p className="font-inter text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of teams already making better product decisions with unified feedback insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="font-inter flex-1 px-6 py-4 bg-black/40 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 backdrop-blur-lg"
              />
              <Button className="font-inter bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300">
                Join Beta
              </Button>
            </div>
            
            <p className="font-inter text-sm text-gray-400 mt-6">
              Free during beta • Cancel anytime • Join 500+ early users
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
