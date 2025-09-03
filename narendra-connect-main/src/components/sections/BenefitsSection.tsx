import { Card } from "@/components/ui/card";
import { Gift, Briefcase, IndianRupee, Building, Target } from "lucide-react";

const benefits = [
  {
    title: "Real-Life Experience",
    description: "12 months real-life experience in India's top companies",
    icon: Briefcase,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Monthly Assistance",
    description: "Monthly assistance of ₹4500 by Government of India and ₹500 by Industry",
    icon: IndianRupee,
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "One-time Grant",
    description: "One-time Grant of ₹6000 for incidentals",
    icon: Gift,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    title: "Sector Selection",
    description: "Select from Various Sectors and from top Companies of India",
    icon: Building,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Core Benefits <span className="text-primary">for PM Internship Scheme</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive benefits designed to empower your professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 bg-gradient-card shadow-elegant hover:shadow-primary transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className={`flex items-center justify-center w-16 h-16 ${benefit.bgColor} rounded-full flex-shrink-0`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Financial Benefits Highlight */}
        <div className="bg-gradient-nav rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Total Financial Support</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">₹4,500</div>
              <div className="text-white/90">Monthly by Government</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-300 mb-2">₹500</div>
              <div className="text-white/90">Monthly by Industry</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-300 mb-2">₹6,000</div>
              <div className="text-white/90">One-time Grant</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">₹66,000</div>
            <div className="text-white/90 text-lg">Total Financial Support for 12 Months*</div>
            <div className="text-white/70 text-sm mt-2">*Includes monthly assistance and one-time grant</div>
          </div>
        </div>
      </div>
    </section>
  );
}