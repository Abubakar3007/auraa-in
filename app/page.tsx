import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import BrandLogos from "../components/BrandLogos";
import StylistSection from "../components/StylistSection";
import TestimonialsSection from "../components/TestimonialsSection";
import heroImage from "@/public/images/hero-model.jpg";
import stylist1 from "@/public/images/stylist-1.jpg";
import stylist2 from "@/public/images/stylist-2.jpg";
import stylist3 from "@/public/images/stylist-3.jpg";
import Layout from "@/components/Layout";

const brands = [
  { name: "Tinder", logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop", link: "#" },
  { name: "TRESemme", logo: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop", link: "#" },
  { name: "Philips", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop", link: "#" },
  { name: "VIVO", logo: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop", link: "#" },
  { name: "Coca Cola", logo: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200&h=200&fit=crop", link: "#" },
  { name: "Amante", logo: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=200&fit=crop", link: "#" },
  { name: "Gillette", logo: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=200&h=200&fit=crop", link: "#" },
  { name: "Nykaa", logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop", link: "#" },
  { name: "Kazowoman", logo: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=200&h=200&fit=crop", link: "#" },
  { name: "Mahindra", logo: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=200&fit=crop", link: "#" },
  { name: "Jaquar", logo: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&h=200&fit=crop", link: "#" },
  { name: "Fronx", logo: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&h=200&fit=crop", link: "#" },
];

const stylistImages = [stylist1, stylist2, stylist3];

const Index = () => {
  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <HeroSection 
          backgroundImage={heroImage.src}
          brandName="Forevermark"
          modelName="Angela Kumar"
          profileLink="/women/angela"
        />

        {/* Brand Logos */}
        <BrandLogos brands={brands} />

        {/* Stylist Section */}
        <StylistSection 
          name="ANGELA ISAAC"
          title="Creative consultant | Fashion Director | Stylist"
          images={stylistImages.map(image => image.src)}
          profileLink="/models/women/"
        />

        {/* Testimonials */}
        <TestimonialsSection />
      </main>
    </Layout>
  );
};

export default Index;