import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquirySidebar from "@/components/EnquirySidebar";

export const metadata: Metadata = {
  title: "Sere Innovations | Smart Egg Incubators",
  description: "Helping farmers hatch their own future with affordable, smart egg incubators.",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="antialiased text-gray-800"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
      >
        <Navbar />
        {children}
        <Footer />
        <EnquirySidebar />
      </body>
    </html>
  );
}
