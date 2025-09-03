import { useState, useEffect } from "react";
import { X, Sparkles, Calendar, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentNotification, setCurrentNotification] = useState(0);

  const notifications = [
    {
      icon: Calendar,
      title: "2025 Applications Now Open!",
      message: "Join 5M+ youth in India's largest internship program",
      bgGradient: "from-green-500 to-emerald-600",
      action: "Apply Now"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Matching Live!",
      message: "99.2% success rate with our new smart matching system",
      bgGradient: "from-blue-500 to-purple-600",
      action: "Try AI Match"
    },
    {
      icon: Users,
      title: "50,000+ Companies Registered",
      message: "Top Indian companies are waiting for talented interns",
      bgGradient: "from-orange-500 to-red-600",
      action: "View Companies"
    },
    {
      icon: TrendingUp,
      title: "₹25,000 Average Stipend",
      message: "Higher stipends with skill-based matching in 2025",
      bgGradient: "from-purple-500 to-pink-600",
      action: "Check Salary"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [notifications.length]);

  if (!isVisible) return null;

  const notification = notifications[currentNotification];
  const IconComponent = notification.icon;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r ${notification.bgGradient} text-white shadow-lg z-50 transition-all duration-500`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)] animate-pulse"></div>
      </div>
      
      {/* Moving Dots Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-2 left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-4 left-32 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-3 right-20 w-1.5 h-1.5 bg-white/35 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-5 right-40 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4 flex-1">
            {/* Animated Icon */}
            <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full animate-pulse">
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <h3 className="font-bold text-sm sm:text-base truncate">
                  {notification.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm truncate">
                  {notification.message}
                </p>
              </div>
            </div>
            
            {/* Action Button */}
            <div className="hidden sm:block">
              <Button 
                variant="secondary" 
                size="sm" 
                className="border-white/30 text-white bg-transparent font-semibold transition-all duration-300 transform hover:scale-105 hover:border-white/60 hover:text-white"
              >
                {notification.action}
              </Button>
            </div>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex items-center space-x-2 mx-4">
            {notifications.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentNotification 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40'
                }`}
                onClick={() => setCurrentNotification(index)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
          
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="flex items-center justify-center w-8 h-8 bg-transparent rounded-full transition-colors duration-200 group ring-1 ring-white/20 hover:ring-white/40"
            aria-label="Close notification"
          >
            <X className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
        
        {/* Mobile Action Button */}
        <div className="sm:hidden pb-2">
          <Button 
            variant="secondary" 
            size="sm" 
            className="w-full border-white/30 text-white bg-transparent font-semibold hover:border-white/60 hover:text-white"
          >
            {notification.action}
          </Button>
        </div>
      </div>
      
      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </div>
  );
}