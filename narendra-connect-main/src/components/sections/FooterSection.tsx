import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram,
  ExternalLink
} from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-gradient-nav text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">PM</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">PM Internship Scheme</h3>
                <p className="text-sm text-white/80">Government of India</p>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Empowering India's youth through skill development and professional 
              opportunities under the visionary leadership of Hon'ble PM Shri Narendra Modi.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
                <Button key={index} variant="nav" size="icon" className="w-8 h-8">
                  <Icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Apply Now",
                "Guidelines", 
                "Eligibility",
                "FAQs",
                "Support",
                "Gallery",
                "Success Stories"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Government Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "India.gov.in", external: true },
                { name: "Digital India", external: true },
                { name: "Skill India", external: true },
                { name: "MyGov.in", external: true },
                { name: "PM Office", external: true },
                { name: "NITI Aayog", external: true }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-0.5 text-white/80" />
                <div>
                  <p className="text-white">1800-XXX-XXXX</p>
                  <p className="text-white/80">Toll Free Helpline</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-0.5 text-white/80" />
                <div>
                  <p className="text-white">support@pminternship.gov.in</p>
                  <p className="text-white/80">Email Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-white/80" />
                <div>
                  <p className="text-white">New Delhi</p>
                  <p className="text-white/80">India - 110001</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="secondary" size="sm" className="w-full">
                Download Mobile App
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/80">
              © 2025 Government of India. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}