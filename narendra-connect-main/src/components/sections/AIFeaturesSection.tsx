import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, Sparkles, Bot, TrendingUp, Shield, Globe } from "lucide-react";

const aiFeatures = [
  {
    icon: Brain,
    title: "AI Career Advisor",
    description: "Get personalized career guidance powered by advanced machine learning algorithms",
    features: ["Skill gap analysis", "Career path recommendations", "Industry trend insights"],
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-600",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Smart Matching Engine",
    description: "Revolutionary AI system that matches candidates with perfect internship opportunities",
    features: ["99.2% accuracy rate", "Real-time matching", "Preference learning"],
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Skill Assessment 2025",
    description: "Next-generation skill evaluation using AI-powered adaptive testing",
    features: ["Adaptive questioning", "Real-time feedback", "Certification ready"],
    bgColor: "bg-green-500/10",
    iconColor: "text-green-600",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Bot,
    title: "24/7 AI Assistant",
    description: "Intelligent chatbot providing instant support in multiple Indian languages",
    features: ["Multi-language support", "Voice interaction", "Context awareness"],
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-600",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "AI-driven insights to predict internship success and career outcomes",
    features: ["Success prediction", "Market trends", "Salary forecasting"],
    bgColor: "bg-indigo-500/10",
    iconColor: "text-indigo-600",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Blockchain Verification",
    description: "Secure, tamper-proof credential verification using blockchain technology",
    features: ["Immutable records", "Instant verification", "Global recognition"],
    bgColor: "bg-teal-500/10",
    iconColor: "text-teal-600",
    gradient: "from-teal-500 to-green-500"
  }
];

export function AIFeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 shadow-2xl">
            <Sparkles className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            AI-Powered Features 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the future of internship programs with cutting-edge artificial intelligence, 
            machine learning, and blockchain technology - exclusively designed for India's digital transformation.
          </p>
          
          {/* New 2025 Badge */}
          <div className="mt-6 inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg animate-bounce">
            <Globe className="w-4 h-4" />
            <span>Powered by Digital India 2025</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiFeatures.map((feature, index) => (
            <Card key={index} className="group p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full border-2 hover:bg-gradient-to-r ${feature.gradient} hover:text-white hover:border-transparent transition-all duration-300`}
                >
                  Explore Feature
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">Ready for the AI Revolution?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join millions of young Indians in experiencing the most advanced internship platform 
                powered by artificial intelligence and built for the digital future of India.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Try AI Career Advisor
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Smart Matching
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">10M+</div>
                  <div className="text-sm text-white/80">AI Predictions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">99.2%</div>
                  <div className="text-sm text-white/80">Match Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-white/80">AI Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-sm text-white/80">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}