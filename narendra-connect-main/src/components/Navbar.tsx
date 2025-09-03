import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  FileText, 
  ImageIcon, 
  Smartphone, 
  CheckCircle, 
  HelpCircle, 
  BookOpen,
  LogIn,
  UserPlus,
  Menu,
  X
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Guidelines", href: "#guidelines", icon: FileText },
  { name: "Gallery", href: "#gallery", icon: ImageIcon },
  { name: "Mobile", href: "#mobile", icon: Smartphone },
  { name: "App Eligibility", href: "#eligibility", icon: CheckCircle },
  { name: "AI Tools", href: "#ai-tools", icon: Smartphone },
  { name: "Support", href: "#support", icon: HelpCircle },
  { name: "Compendium", href: "#compendium", icon: BookOpen },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-indigo-600 shadow-lg backdrop-blur-sm relative overflow-hidden">
      {/* Enhanced background glow effects */}
  <div className="absolute inset-0 bg-indigo-600/30 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-pulse"></div>
      
      {/* Floating particles for 2025 theme */}
      <div className="absolute top-4 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute top-6 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-8 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Floating 2025 Innovation Badge */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg animate-bounce">
          🚀 INNOVATION 2025 • AI-POWERED INTERNSHIPS
        </div>
      </div>
      
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo for 2025 */}
          <div className="flex items-center space-x-4">
            <div className="absolute left-2 top-2 z-30">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-xl">PM</span>
              </div>
              {/* Animated ring around logo */}
              <div className="absolute inset-0 w-12 h-12 border-2 border-white/30 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-12 h-12 border-2 border-transparent border-t-white/60 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '3s'}}></div>
            </div>
            <div className="text-white relative pl-14">
              <h1 className="font-bold text-base bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
                PM Internship Scheme
              </h1>
              <div className="flex items-center space-x-2">
                <p className="text-[9px] leading-tight text-white/90 font-medium">Empowering Future</p>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                  2025
                </div>
              </div>
              <div className="flex items-center space-x-1 mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-white/70">AI-Powered • Blockchain Verified</span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-6 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Button
                  key={item.name}
                  variant="nav"
                  size="sm"
                  className="flex items-center space-x-2"
                  onClick={() => document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.name}</span>
                </Button>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="secondary" size="sm">
              <UserPlus className="w-4 h-4 mr-2" />
              Register
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="nav"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 rounded-lg mt-2 mb-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Button
                    key={item.name}
                    variant="nav"
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => {
                      document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                      setIsOpen(false);
                    }}
                  >
                    <IconComponent className="w-4 h-4 mr-3" />
                    {item.name}
                  </Button>
                );
              })}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button variant="secondary" size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
