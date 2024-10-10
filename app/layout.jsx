import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Muzammil Hussain | Full Stack Developer & WordPress Expert",
  description:
    "Experienced full stack developer & WordPress expert specializing in custom themes, UI/UX design, SEO, and high-performance websites. Get scalable web solutions today.",

  // Additional metadata
  keywords: [
    "Muzammil Hussain",
    "Full Stack Developer",
    "WordPress Expert",
    "Web Developer",
    "Custom WordPress Themes",
    "UI/UX Design",
    "SEO",
    "Web Solutions",
    "React Developer",
    "PHP Expert",
    "Next.js Developer",
  ],

  // Open Graph metadata for social sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Muzammil Hussain | Full Stack Developer & WordPress Expert",
    description:
      "Experienced full stack developer & WordPress expert specializing in custom themes, UI/UX design, SEO, and high-performance websites. Get scalable web solutions today.",
    url: "https://muzammil.dev",
    site_name: "Muzammil Hussain Portfolio",
    images: [
      {
        url: "https://muzammil.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muzammil Hussain - Full Stack Developer & WordPress Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", // Optional: replace with your Twitter handle
    title: "Muzammil Hussain | Full Stack Developer & WordPress Expert",
    description:
      "Experienced full stack developer & WordPress expert specializing in custom themes, UI/UX design, SEO, and high-performance websites. Get scalable web solutions today.",
    image: "https://muzammil.dev/og-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
