import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed]">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
