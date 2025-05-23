
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import FormCard from "@/components/FormCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-16 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent leading-tight">
              Unify Your Feedback.
              <br />
              <span className="text-4xl md:text-6xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
                Instantly.
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Connect all your feedback forms in one unified dashboard. 
              <span className="text-cyan-400"> No more switching between platforms.</span>
            </p>
            
            {/* Form Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
              <FormCard 
                platform="Typeform"
                color="cyan"
                responses="247 responses"
                title="Customer Satisfaction"
              />
              <FormCard 
                platform="Google Forms"
                color="green"
                responses="89 responses"
                title="Product Feedback"
              />
              <FormCard 
                platform="SurveyMonkey"
                color="purple"
                responses="156 responses"
                title="User Research"
              />
            </div>
            
            {/* CTA Button */}
            <div className="mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-all duration-300 group"
              >
                Join the Beta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-gray-400 mt-4">
                Early access • No credit card required
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <Badge variant="outline" className="border-gray-700 text-gray-300 px-4 py-2 bg-black/20 backdrop-blur-sm">
                <Shield className="mr-2 h-4 w-4 text-green-400" />
                Secure by Design
              </Badge>
              <Badge variant="outline" className="border-gray-700 text-gray-300 px-4 py-2 bg-black/20 backdrop-blur-sm">
                <Zap className="mr-2 h-4 w-4 text-cyan-400" />
                Backed by Builders
              </Badge>
              <Badge variant="outline" className="border-gray-700 text-gray-300 px-4 py-2 bg-black/20 backdrop-blur-sm">
                <Users className="mr-2 h-4 w-4 text-purple-400" />
                Used by Early Teams
              </Badge>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
