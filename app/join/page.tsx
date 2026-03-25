"use client";
import { useState } from "react";
import { Loader2, Send, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Join = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    measurements: {
      bust: "",
      waist: "",
      hip: "",
      shoes: "",
      hair: "",
      eyes: "",
    },
    age: "",
    height: "",
    gender: "",
    country: "",
    city: "",
    experience: "",
    instagram: "",
    about: "",
    images: [] as File[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();

      // text fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "images" && key !== "measurements") {
          data.append(key, value as string);
        }
      });

      // measurements
      Object.entries(formData.measurements).forEach(([key, value]) => {
        data.append(`measurements.${key}`, value as string);
      });

      // images
      formData.images.forEach((file) => {
        data.append("images", file);
      });

      const response = await fetch("/api/join", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to submit join form");
      }

      toast({
        title: "Join form submitted successfully",
        description: "We will get back to you soon.",
      });

      // reset
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        measurements: {
          bust: "",
          waist: "",
          hip: "",
          shoes: "",
          hair: "",
          eyes: "",
        },
        age: "",
        height: "",
        gender: "",
        country: "",
        city: "",
        experience: "",
        instagram: "",
        about: "",
        images: [],
      });

    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to submit join form",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name.startsWith("measurements.")) {
      const key = name.split(".")[1];

      setFormData((prev) => ({
        ...prev,
        measurements: {
          ...prev.measurements,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const filesArray = Array.from(files);

      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...filesArray],
      }));
    } else {
      toast({
        title: "No files selected",
        description: "Please select at least one file.",
        variant: "destructive",
      });
    }
  };

  const countries = [
    { label: "India", value: "india" },
    { label: "United States", value: "usa" },
    { label: "United Kingdom", value: "uk" },
    { label: "Canada", value: "canada" },
    { label: "Australia", value: "australia" },
    { label: "Germany", value: "germany" },
    { label: "France", value: "france" },
    { label: "Italy", value: "italy" },
    { label: "Spain", value: "spain" },
    { label: "Netherlands", value: "netherlands" },
    { label: "Brazil", value: "brazil" },
    { label: "Mexico", value: "mexico" },
    { label: "Japan", value: "japan" },
    { label: "South Korea", value: "south_korea" },
    { label: "China", value: "china" },
    { label: "Singapore", value: "singapore" },
    { label: "UAE", value: "uae" },
    { label: "Saudi Arabia", value: "saudi_arabia" },
    { label: "South Africa", value: "south_africa" },
  ];

  return (
    <Layout>
      <main className="pt-32 md:pt-48 pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="section-title mb-6">Join Us</h1>
            <p className="font-body text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Begin your modeling journey with Auraa Talents. Fill out the form below and our team will get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-6">
                Measurements
              </label>
              <div className="flex flex-wrap gap-4">
                <input placeholder="Bust" value={formData.measurements.bust} onChange={handleChange} name="measurements.bust" className="bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors w-20" />
                <input placeholder="Waist" value={formData.measurements.waist} onChange={handleChange} name="measurements.waist" className="bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors w-20" />
                <input placeholder="Hip" value={formData.measurements.hip} onChange={handleChange} name="measurements.hip" className="bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors w-20" />
                <input placeholder="Shoes" value={formData.measurements.shoes} onChange={handleChange} name="measurements.shoes" className="bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors w-20" />
                <input placeholder="Hair" value={formData.measurements.hair} onChange={handleChange} name="measurements.hair" className="bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors w-[136px]" />
                <input placeholder="Eyes" value={formData.measurements.eyes} onChange={handleChange} name="measurements.eyes" className="bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors w-[136px]" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="16"
                  max="50"
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors cursor-pointer"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors cursor-pointer"
                >
                  <option value="">Select</option>
                  {
                    countries.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))
                  }
                </select>
              </div>

              <div>
                <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Experience Level
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors cursor-pointer"
                >
                  <option value="">Select</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="professional">Professional</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="@username"
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Tell us about yourself
              </label>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 font-body text-sm transition-colors resize-none"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
                Upload Photos
              </label>
              <label htmlFor="upload" className="border-2 block border-dashed border-border hover:border-muted-foreground transition-colors p-8 text-center cursor-pointer">
                <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-3" />
                <p className="font-body text-sm text-muted-foreground">
                  Drag and drop your photos here, or click to browse
                </p>
                <p className="font-body text-xs text-muted-foreground mt-2">
                  (Full length, headshot, and casual photos preferred)
                </p>

                <input onChange={handlePhotoUpload} type="file" id="upload" className="hidden" multiple />
              </label>
            </div>

            {
              formData.images.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {formData.images.map((file, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      className="w-20 h-20 object-cover"
                    />
                  ))}
                </div>
              )
            }

            <div className="text-center pt-4">
              <Button variant="default" size="lg" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-1" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default Join;