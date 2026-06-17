import type { Metadata } from "next";
import { Playfair_Display, Abril_Fatface, Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sandjar Kozubaev – Design, Futures, Digital Media",
  description: "Portfolio of Sandjar Kozubaev — exploring design, futures thinking, and digital media.",
  openGraph: {
    title: "Sandjar Kozubaev – Design, Futures, Digital Media",
    description: "Portfolio of Sandjar Kozubaev — exploring design, futures thinking, and digital media.",
    url: "https://sandjar.me",
    siteName: "Sandjar Kozubaev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandjar Kozubaev – Design, Futures, Digital Media",
    description: "Portfolio of Sandjar Kozubaev — exploring design, futures thinking, and digital media.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${playfair.variable} ${abrilFatface.variable} ${inter.variable} ${inconsolata.variable}`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-body antialiased">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
