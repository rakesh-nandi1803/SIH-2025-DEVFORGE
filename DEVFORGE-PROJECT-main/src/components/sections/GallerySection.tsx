import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon, Play } from "lucide-react";

const galleryItems = [
  {
    type: "video",
    title: "Empowering Young Generation: PM Modi",
    description: "Watch PM Modi speak about empowering youth through technology",
    url: "/videos/pm-speech.mp4",
    thumbnail: "/images/pm-speech-thumbnail.png",
  },
  {
    type: "image",
    title: "ONGC Internship",
    description: "PMIS interns gaining practical exposure at ONGC",
    thumbnail: "/images/pmis-interns-ongc.png",
  },
  {
    type: "image",
    title: "NSE Internship",
    description: "PMIS interns gaining hands-on experience in NSE",
    thumbnail: "/images/pm-interns-nse.png",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
            <ImageIcon className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the journey of PM Internship Scheme through inspiring
            moments, success stories, and glimpses of India's bright future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-gradient-card shadow-elegant hover:shadow-primary transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  {item.type === "video" ? (
                    <video
                      src={item.url}
                      controls
                      poster={item.thumbnail}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
