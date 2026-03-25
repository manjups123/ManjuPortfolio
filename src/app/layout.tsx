import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manju P S | Application Engineer & Business App Developer",
  description: "Manju P S — Application Engineer in Karnataka, India. Building custom business applications, automation systems, and data management solutions using Java, C#, .NET, and MySQL.",
  keywords: "Manju P S, Application Engineer, .NET Developer, Java Developer, Karnataka, Business Applications, Web Development",
  alternates: {
    canonical: "https://manjups.vercel.app"
  },
  openGraph: {
    title: "Manju P S | Application Engineer",
    description: "Custom web applications for business automation and data management."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${outfit.variable} antialiased relative`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
