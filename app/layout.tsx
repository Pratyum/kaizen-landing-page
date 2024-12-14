import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kaisen Isshinryu Karate",
  description: "Kaisen Isshinryu Karate: Traditional Karate in Chennai - Founded by Haranadh",
  metadataBase: new URL('https://kaizenisshinryukarate.com'),
  openGraph:{
    title: "Kaisen Isshinryu Karate",
    description: "Kaisen Isshinryu Karate: Traditional Karate in Chennai - Founded by Haranadh",
    type: "website",
    url: "https://kaizenisshinryukarate.com",
  },
  keywords: [
    "karate",
    "martial arts",
    "Isshinryu",
    "Chennai",
    "traditional",
    "self-defense",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
