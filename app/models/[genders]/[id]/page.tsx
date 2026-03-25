"use client";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// Sample model data - in production this would come from an API
const modelsData: Record<string, {
  name: string;
  stats: { height: string; bust: string; waist: string; hips: string; shoes: string; hair: string; eyes: string };
  images: string[];
  category: "women" | "men";
}> = {
  angela: {
    name: "Angela Kumar",
    stats: { height: "5'9\"", bust: "32\"", waist: "24\"", hips: "34\"", shoes: "8", hair: "Black", eyes: "Brown" },
    images: [
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop",
    ],
    category: "women"
  },
  ana: {
    name: "Ana",
    stats: { height: "5'10\"", bust: "33\"", waist: "25\"", hips: "35\"", shoes: "9", hair: "Brown", eyes: "Green" },
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1000&fit=crop",
    ],
    category: "women"
  },
  bhanuj: {
    name: "Bhanuj",
    stats: { height: "6'0\"", bust: "40\"", waist: "32\"", hips: "38\"", shoes: "10", hair: "Black", eyes: "Brown" },
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&h=1000&fit=crop",
    ],
    category: "men"
  },
};

const ModelProfile = () => {
  const params = useParams();
  const id = params.id as string;

  const [model, setModel] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModel = async () => {
      try {
        const res = await fetch(`/api/join/${id}`);
        const data = await res.json();

        console.log("data", data);

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch");
        }

        setModel(data.data);
      } catch (err) {
        console.error("❌ Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchModel();
  }, [id]);

  console.log("model", model);

  if (loading) return <p>Loading...</p>;

  if (!model) {
    return (
      <Layout>
        <main className="pt-32 md:pt-48 pb-16 text-center min-h-screen">
          <h1 className="section-title mb-4">Model Not Found</h1>
          <Link href="/women" className="nav-link">Back to Models</Link>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="pt-32 md:pt-40 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Back Link */}
          <Link
            href={model.category === "women" ? "/women" : "/men"}
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {model.category}
          </Link>

          <div className="flex gap-12 mb-20">
            {/* Model Info */}
            <div className="max-w-[40%] w-full">
              <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-8">{model.firstName} {model.lastName}</h1>
              <div>
                <h3 className="font-bold text-lg md:text-xl tracking-wide mb-5">Contact Information</h3>
                <ul className="mb-8 space-y-1 text-sm">
                  <li>Country: <span className="text-muted-foreground">{model.country}</span></li>
                  <li>City: <span className="text-muted-foreground">{model.city}</span></li>
                  <li>Email: <span className="text-muted-foreground"><a href={`mailto:${model.email}`} className="text-primary underline">{model.email}</a></span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl tracking-wide mb-5">Physical Attributes</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Age</span>
                    <span className="font-body text-sm">{model.age} years</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Height</span>
                    <span className="font-body text-sm">{model.height}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Bust</span>
                    <span className="font-body text-sm">{model.measurements?.bust}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Waist</span>
                    <span className="font-body text-sm">{model.measurements?.waist}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Hips</span>
                    <span className="font-body text-sm">{model.measurements?.hip}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Shoes</span>
                    <span className="font-body text-sm">{model.measurements?.shoes}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Hair</span>
                    <span className="font-body text-sm">{model.measurements?.hair}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">Eyes</span>
                    <span className="font-body text-sm">{model.measurements?.eyes}</span>
                  </div>
                </div>

                <Button size="lg" variant="default" className="mt-8">Book This Model</Button>
              </div>
            </div>

            <div className="max-w-[60%] w-full">
              <picture>
                <source srcSet={model.images[0].url} type="image/webp" />
                <img src={model.images[0].url} alt="Model" className="w-full h-auto" />
              </picture>
            </div>
          </div>

          {/* Gallery */}
          {
            model.images.length > 0 && (
              <section>
                <h2 className="font-bold text-2xl md:text-3xl tracking-wide mb-10">Model Images</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {model.images.map((image: any, index: number) => (
                    <div
                      key={index}
                    >
                      <img
                        src={image.url}
                        alt={`${model.name} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )
          }
        </div>
      </main>
    </Layout>
  );
};

export default ModelProfile;