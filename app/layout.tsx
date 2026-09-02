import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pabna Online - Internet Service Provider in Pabna",
  description:
    "Pabna Online is the leading Optical Fiber Broadband Internet Service Provider in Pabna town. Fast BDIX speed, bufferless 4K streaming, 10+ FTP movie servers, and 24/7 dedicated support.",
  keywords: [
    "Pabna Online",
    "Internet Service Provider Pabna",
    "ISP Pabna",
    "Broadband Internet Pabna",
    "Optical Fiber Pabna",
    "FTP Server Pabna",
  ],
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <head>
        <link rel="icon" href="/fav.png" type="image/png" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
