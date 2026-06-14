import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JOHN STATE CO — Premium Luxury Real Estate",
  description:
    "Discover premium homes, investment opportunities, and luxury real estate curated by John State Co. Your trusted partner for world-class property acquisitions.",
  keywords: [
    "luxury real estate",
    "premium properties",
    "luxury homes",
    "property investment",
    "John State Co",
    "million dollar homes",
    "real estate agency",
  ],
  openGraph: {
    title: "JOHN STATE CO — Premium Luxury Real Estate",
    description:
      "Discover premium homes, investment opportunities, and luxury real estate curated by John State Co.",
    type: "website",
    siteName: "JOHN STATE CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
