import Link from "next/link";
import { MoveUpRight } from "lucide-react";
interface StylistSectionProps {
  name: string;
  title: string;
  images: string[];
  profileLink: string;
}

const StylistSection = ({ name, title, images, profileLink }: StylistSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="section-title mb-2">{name}</h2>
          <p className="font-body text-sm tracking-wide text-muted-foreground">{title}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-6 mx-auto mb-8">
          {images.map((image, index) => (
            <div key={index} className="aspect-[3/4] overflow-hidden">
              <img 
                src={image} 
                alt={`${name} work ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href={profileLink}
            className="font-body text-xs tracking-[0.2em] uppercase w-fit mx-auto text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground hover:border-foreground pb-1 flex items-center gap-2"
          >
            <span>View Profile</span>
             <MoveUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StylistSection;
