import type { Metadata } from "next";
import { Inter, Righteous, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Alan Mc Gee - Full Stack Developer",
  description: "Junior Full Stack Developer with 15+ years IT experience. Specializing in React, Python, Django, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Python", "Django", "Web Development", "JavaScript"],
  authors: [{ name: "Alan Mc Gee" }],
  openGraph: {
    title: "Alan Mc Gee - Full Stack Developer",
    description: "Junior Full Stack Developer with 15+ years IT experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${righteous.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
