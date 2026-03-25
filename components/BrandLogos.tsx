interface Brand {
  name: string;
  logo: string;
  link?: string;
}

interface BrandLogosProps {
  brands: Brand[];
}

const BrandLogos = ({ brands }: BrandLogosProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="section-title text-center mb-12 md:mb-16">LATEST</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {brands.map((brand, index) => (
            <a
              key={index}
              href={brand.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center aspect-square bg-secondary/30 hover:bg-secondary/50 transition-all duration-300"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
