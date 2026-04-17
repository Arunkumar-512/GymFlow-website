import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔹 Enhanced SEO Metadata
export const metadata: Metadata = {
  title: "GYMFLOW | Elite Fitness & Performance",
  description: "Transform your limits with professional coaching, custom nutrition plans, and world-class gym facilities.",
  keywords: ["Gym", "Fitness", "Workout", "Personal Trainer", "Bodybuilding"],
};

// 🔹 Prevents browser UI color clashing on mobile
export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#050505] text-white selection:bg-[#FF6A00]/30 selection:text-white flex flex-col">
        {/* Main content wrapper */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Optional: Add a Global Footer here if needed */}
      </body>
    </html>
  );
}