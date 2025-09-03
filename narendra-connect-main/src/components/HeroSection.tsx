import { Button } from "@/components/ui/button";
import { Target, ArrowRight, Users, Award, Trophy } from "lucide-react";
import pmModiImage from "@/assets/H20250623186163-scaled-e1750730068952.jpg";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Enhanced Background Pattern for 2025 */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)]"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* New 2025 Floating Notification */}
        <div className="absolute top-24 right-8 z-20">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl animate-float">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-white">
                <p className="text-sm font-semibold">2025 Applications Open!</p>
                <p className="text-xs text-white/80">AI-powered matching available</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-white/90">
                <Trophy className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-medium">Government of India Initiative</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                PM Internship 
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
                  Scheme 2025
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Empowering young minds through comprehensive internship opportunities in 2025. 
                Join millions in building a digital India under PM Modi's visionary leadership.
                Experience cutting-edge AI-powered matching and skill development programs.
              </p>
            </div>

            {/* Enhanced Stats for 2025 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">75L+</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">1.5L+</div>
                <div className="text-sm text-white/80">Companies</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2 mx-auto">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-sm text-white/80">States</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons for 2025 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Apply for 2025
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                AI Career Advisor
                <Target className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Skill Assessment
                <Award className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Enhanced Trust Indicators for 2025 */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Verified by Government</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm">AI-Powered Matching</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Blockchain Verified</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* PM Modi Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-2xl animate-float">
                <img 
                  src={pmModiImage} 
                  alt="Prime Minister Narendra Modi" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-white">Hon'ble Prime Minister</h3>
                  <p className="text-white/80">Shri Narendra Modi</p>
                  <div className="mt-3 bg-white/20 rounded-full px-4 py-2 inline-block">
                    <p className="text-sm text-white italic">"Viksit Bharat 2025"</p>
                  </div>
                  <div className="mt-2 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full px-3 py-1 inline-block">
                    <p className="text-xs text-white font-medium">AI & Innovation Focus</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Decorative Elements for 2025 */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
            
            {/* New 2025 Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
              NEW 2025
            </div>
            
            {/* AI Innovation Badge */}
            <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-90">
              AI-POWERED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}