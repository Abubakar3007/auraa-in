"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <main className="pt-32 md:pt-48">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="section-title mb-6">Contact Us</h1>
            <p className="font-body text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Get in touch with us for bookings, collaborations, or any inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl mb-8 tracking-wide">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Email</p>
                    <a href="mailto:info@auraa.in" className="font-body text-sm hover:text-muted-foreground transition-colors">
                      info@auraa.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+911234567890" className="font-body text-sm hover:text-muted-foreground transition-colors">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Address</p>
                    <p className="font-body text-sm">
                      Mumbai, Maharashtra<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl mb-8 tracking-wide">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors resize-none"
                  />
                </div>

                <Button type="submit" size="lg">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        <section className="bg-black py-32 mt-20">
          <div className="container mx-auto px-4 text-center">
            <h5 className="font-body text-xs tracking-[0.15em] uppercase text-white/80 mb-2">Our Location</h5>
            <h2 className="font-display text-3xl md:text-5xl tracking-wide text-white">From India to the World</h2>
          </div>
        </section>

        <section className="bg-neutral-50 py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-5xl tracking-wide">Your Voice Matters to Us</h2>
            <p className="mt-4 font-body text-sm text-muted-foreground mb-8">At Auraa Talents, every detail counts. Share your experience with us so we can keep curating excellence for you.</p>
            <Button variant="default" size="lg">
              Share Your Experience
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
