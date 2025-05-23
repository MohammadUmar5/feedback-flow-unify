
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Users, Zap, Globe, Brain, Lock } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-24 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Main Headline */}
            <h1 className="font-inter text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Unify Your Feedback.
              </span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Instantly.
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="font-inter text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Aggregate insights from <span className="text-cyan-400 font-semibold">Reddit, Twitter, in-app, surveys, and support</span> — all in one place.
            </p>
            
            {/* CTA Button */}
            <div className="mb-16">
              <Button 
                size="lg" 
                className="font-inter bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-[0_0_30px_rgba(0,188,212,0.3)] hover:shadow-[0_0_50px_rgba(0,188,212,0.6)] transition-all duration-300 group"
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

        {/* Value Proposition Section */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-6">
                Why Teams Choose Our Platform
              </h2>
              <p className="font-inter text-gray-300 text-lg max-w-2xl mx-auto">
                Everything you need to turn scattered feedback into actionable insights
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="
                  bg-black/40 backdrop-blur-lg border border-gray-700/50 
                  rounded-2xl p-8 hover:border-cyan-400/30 
                  hover:shadow-[0_0_25px_rgba(0,188,212,0.2)]
                  transition-all duration-300 hover:scale-105
                ">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-6">
                    <Globe className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="font-inter text-xl font-semibold text-white mb-4">
                    Comprehensive Aggregation
                  </h3>
                  <p className="font-inter text-gray-300 leading-relaxed">
                    Pull feedback from Reddit, Twitter, in-app, and popular survey tools like Typeform, SurveyMonkey, and Google Forms — no more fragmented insights.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="
                  bg-black/40 backdrop-blur-lg border border-gray-700/50 
                  rounded-2xl p-8 hover:border-purple-400/30 
                  hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]
                  transition-all duration-300 hover:scale-105
                ">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-full mb-6">
                    <Brain className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="font-inter text-xl font-semibold text-white mb-4">
                    Actionable Insights
                  </h3>
                  <p className="font-inter text-gray-300 leading-relaxed">
                    Cluster and prioritize feedback efficiently to accelerate product decisions and customer satisfaction.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="
                  bg-black/40 backdrop-blur-lg border border-gray-700/50 
                  rounded-2xl p-8 hover:border-green-400/30 
                  hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]
                  transition-all duration-300 hover:scale-105
                ">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-6">
                    <Lock className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="font-inter text-xl font-semibold text-white mb-4">
                    Privacy & Security
                  </h3>
                  <p className="font-inter text-gray-300 leading-relaxed">
                    Your data stays protected with industry-leading security standards and compliance.
                  </p>
                </div>
              </div>
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
            <h2 className="font-inter text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transform</span> Your Feedback?
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
              <Button className="font-inter bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-[0_0_20px_rgba(0,188,212,0.3)] hover:shadow-[0_0_30px_rgba(0,188,212,0.5)] transition-all duration-300">
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
