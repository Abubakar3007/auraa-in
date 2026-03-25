import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=ulfTsyIA0kc",
    title: "Alicia Testimonial",
    description: "Embarking on a voyage that took Alicia from diverse corners of the world to the enchanting heart of India has been nothing short of a transformative journey. This land of rich cultures and traditions has not only embraced her but also become the canvas on which Alicia's modeling story has flourished."
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=zav5fKAt6zE",
    title: "Namita Testimonial",
    description: "Witness the captivating transformation of a young talent into a shining star! In this exclusive testimonial video, we proudly present the incredible journey of Namita, who embarked on her modeling odyssey with Auraa Talents. From the moment she joined us as a fresh face, her story unfolded like a fairytale."
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=uCHZJRpQsrI",
    title: "Rodrigo Testimonial",
    description: "Here we are again with the super charming Rodrigo on the hot seat this time, talking about his perspective on Auraa, his life journey so far and his work experience! We're glad to represent him with us."
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=I8v6msvmFzg",
    title: "Gabi Testimonial",
    description: "A tale of growth and discovery of true potential! Step into the world of Gabi's heartfelt testimonial about her journey in India with Auraa Talents. From celebrating festivals to visiting different cities for shoots."
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=pTUxt3UP-zo",
    title: "Tanvi Testimonial",
    description: "\"Modelling is just for pretty faces.\" \"No, it's not.\" \"It's all about potential and hard work,\" says Tanvi Bakshi, a dedicated and ambitious personality who shares her journey and experience at Auraa Talents."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="section-title text-center mb-12 md:mb-16">Testimonials</h2>
        
        <div className="space-y-16 md:space-y-24">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
