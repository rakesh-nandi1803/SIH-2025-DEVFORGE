import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, CheckCircle } from "lucide-react";

const guidelines = [
  {
    title: "Eligibility Criteria",
    description: "Check if you meet the basic requirements for PM Internship Scheme",
    steps: ["Age: 18-25 years", "Education: Graduate/Diploma", "Indian Citizen", "No previous government internship"]
  },
  {
    title: "Application Process",
    description: "Step-by-step guide to complete your application successfully",
    steps: ["Register on portal", "Fill application form", "Upload documents", "Smart matching process"]
  },
  {
    title: "Required Documents",
    description: "Essential documents needed for your application",
    steps: ["Educational certificates", "Aadhaar card", "Passport size photo", "Bank details"]
  },
  {
    title: "Selection Process",
    description: "Understand how our advanced selection system works",
    steps: ["Profile analysis", "Skill assessment", "Company matching", "Final selection"]
  }
];

export function GuidelinesSection() {
  return (
    <section id="guidelines" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Application Guidelines</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these comprehensive guidelines to ensure a smooth application process 
            for the PM Internship Scheme with advanced technology support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {guidelines.map((guideline, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-elegant hover:shadow-primary transition-all duration-300 animate-slide-up">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                  <span className="text-primary font-bold text-lg">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{guideline.title}</h3>
                  <p className="text-muted-foreground mb-4">{guideline.description}</p>
                  <ul className="space-y-2">
                    {guideline.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Download Section */}
        <div className="bg-gradient-nav rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Download Complete Guidelines</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get the detailed PDF guide with all requirements, forms, and step-by-step instructions 
            for the PM Internship Scheme application process.
          </p>
          <div className="flex justify-center space-x-4">
          <Button variant="secondary" size="lg">
               <Download className="w-5 h-5 mr-2" />
           Download PDF Guide
              </Button>
            <Button variant="secondary" size="lg">
               <Eye className="w-5 h-5 mr-2" />
              View Online
              </Button>
           </div>
        </div>
      </div>
    </section>
  );
}