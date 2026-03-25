import Link from "next/link";
import { Instagram, Youtube, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/auraatalents/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/channel/UC6eOiUORerBJ_zmldQhkPSA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <button className="social-icon">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Logo */}
          <Link href="/" className="flex flex-col items-center">
            <span className="font-display text-2xl tracking-[0.3em] text-foreground">
              AURAA
            </span>
            <span className="font-body text-[8px] tracking-[0.4em] text-muted-foreground mt-1">
              TALENTS
            </span>
          </Link>

          {/* Credits */}
          <p className="text-xs text-muted-foreground tracking-wide">
            Made with love
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
