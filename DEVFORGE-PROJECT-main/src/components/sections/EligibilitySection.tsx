import { Card } from "@/components/ui/card";
import { CheckCircle, Calendar, Briefcase, GraduationCap, Users } from "lucide-react";

const eligibilityCriteria = [
  {
    title: "Age",
    value: "21-24 Years",
    icon: Calendar,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    title: "Job Status", 
    value: "Not Employed Full Time",
    icon: Briefcase,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Education",
    value: "Not Enrolled Full Time",
    icon: GraduationCap,
    bgColor: "bg-green-100", 
    iconColor: "text-green-600"
  },
  {
    title: "Family (Self/Spouse/Parents)",
    value: "No one is Earning more than ₹8 Lakhs PA",
    subtitle: "No Member has a Govt. Job",
    icon: Users,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  }
];

export function EligibilitySection() {
  return (
    <section id="eligibility" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Are you <span className="text-primary">Eligible?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Check if you meet the eligibility criteria for the PM Internship Scheme
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eligibilityCriteria.map((criteria, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card shadow-elegant hover:shadow-primary transition-all duration-300 transform hover:scale-105">
              <div className={`flex items-center justify-center w-16 h-16 ${criteria.bgColor} rounded-full mx-auto mb-4`}>
                <criteria.icon className={`w-8 h-8 ${criteria.iconColor}`} />
              </div>
              
              <h3 className="text-lg font-semibold text-primary mb-2">{criteria.title}</h3>
              <p className="text-foreground font-medium mb-2">{criteria.value}</p>
              {criteria.subtitle && (
                <p className="text-sm text-muted-foreground">{criteria.subtitle}</p>
              )}
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-nav rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              If you meet all the eligibility criteria above, you can proceed with your application 
              for the PM Internship Scheme and start your journey towards professional excellence.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Check Eligibility
              </button>
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Start Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}