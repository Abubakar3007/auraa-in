import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

// Fonts
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

// Metadata (SEO + Social Sharing)
export const metadata: Metadata = {
  title: "Auraa Talents | Premier Modeling Agency in India",
  description:
    "Auraa Talents is India's premier modeling agency, representing top male and female models for fashion, commercial, and editorial work.",
  authors: [{ name: "Auraa Talents" }],

  viewport: "width=device-width, initial-scale=1.0",

  openGraph: {
    title: "Auraa Talents | Premier Modeling Agency",
    description:
      "India's premier modeling agency representing top male and female models.",
    type: "website",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@auraatalents",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}