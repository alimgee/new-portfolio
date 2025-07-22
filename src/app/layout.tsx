import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
