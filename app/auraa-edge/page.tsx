import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AuraaEdge = () => {
  return (
    <Layout>
      <main className="pt-32 md:pt-48 pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="section-title mb-6">AuraaEdge</h1>
            <p className="font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Discover the cutting-edge side of Auraa Talents. Our exclusive program
              designed to nurture and develop emerging talents in the fashion industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=750&fit=crop"
                alt="AuraaEdge program"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-2xl md:text-3xl mb-4 tracking-wide">What We Offer</h2>
              <ul className="space-y-4 font-body text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Professional portfolio development</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Runway and posing workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Industry networking opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Personal branding guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Exclusive casting opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary/50 p-8 md:p-12 text-center">
            <h3 className="font-display text-xl md:text-2xl mb-4 tracking-wide">Ready to take the edge?</h3>
            <p className="font-body text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
              Join our exclusive program and unlock your full potential in the modeling industry.
            </p>
            <Link href="/join">
              <Button variant="default" size="sm">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AuraaEdge;
