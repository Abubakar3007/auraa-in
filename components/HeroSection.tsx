import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  backgroundImage: string;
  brandName: string;
  modelName: string;
  profileLink: string;
}

const HeroSection = ({ backgroundImage, brandName, modelName, profileLink }: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">{brandName}</h1>
        <p className="hero-subtitle">{modelName}</p>
        <Link href={profileLink} className="view-profile-btn">
          View Her Profile
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* YouTube Badge */}
      <div className="absolute bottom-8 left-8 flex items-center gap-2 text-white/70">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
