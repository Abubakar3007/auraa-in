interface TestimonialCardProps {
  thumbnail: string;
  videoUrl: string;
  title: string;
  description: string;
}

const TestimonialCard = ({ thumbnail, videoUrl, title, description }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-video">
        <a 
          href={videoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full h-full relative group"
        >
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-foreground ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </a>
      </div>
      <div className="testimonial-content">
        <h3 className="testimonial-title">{title}</h3>
        <p className="testimonial-text">{description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
