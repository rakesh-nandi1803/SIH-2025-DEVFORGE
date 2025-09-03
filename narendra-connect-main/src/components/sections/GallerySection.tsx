import { Card } from "@/components/ui/card";
import { ImageIcon, Play, Calendar, MapPin } from "lucide-react";

const galleryItems = [
  {
    type: "video",
    title: "PM Modi's Vision for Digital India",
    description: "Watch PM Modi speak about empowering youth through technology",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400",
            date: "March 2025"
  },
  {
    type: "image",
    title: "Internship Success Stories",
    description: "Young professionals making a difference",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
    location: "New Delhi"
  },
  {
    type: "image", 
    title: "Skill Development Programs",
    description: "Training sessions across India",
    thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400",
    location: "Mumbai"
  },
  {
    type: "video",
    title: "Technology Innovation Hub",
    description: "Students working on cutting-edge projects",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400",
            date: "February 2025"
  },
  {
    type: "image",
    title: "Certificate Distribution",
    description: "PM Modi felicitating successful interns",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    location: "Bengaluru"
  },
  {
    type: "image",
    title: "Digital Infrastructure",
    description: "Building tomorrow's India today",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
    location: "Hyderabad"
  }
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
            <ImageIcon className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the journey of PM Internship Scheme through inspiring moments, 
            success stories, and glimpses of India's bright future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden bg-gradient-card shadow-elegant hover:shadow-primary transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  {item.date && (
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                  )}
                  {item.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-nav rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Are you part of the PM Internship Scheme? Share your journey and inspire others 
              to join this transformative initiative.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors">
                Upload Photo
              </button>
              <button className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg hover:bg-secondary/90 transition-colors">
                Submit Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}