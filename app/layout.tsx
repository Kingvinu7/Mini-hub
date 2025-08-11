import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mini-Hub",
  description: "Showcasing the 5 miniapps I've built for Farcaster. Simple, fun, and ready to play!",
  openGraph: {
    title: "Mini-Hub",
    description: "Showcasing the 5 miniapps I've built for Farcaster. Simple, fun, and ready to play!",
    url: "https://mini-hub-six.vercel.app",
    images: [
      {
        url: "https://mini-hub-six.vercel.app/splash-image.png", // Use your splash image as preview
        width: 1200,
        height: 630,
        alt: "Mini-Hub - 5 Farcaster Miniapps"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini-Hub",
    description: "Showcasing the 5 miniapps I've built for Farcaster. Simple, fun, and ready to play!",
    images: ["https://mini-hub-six.vercel.app/splash-image.png"],
  },
  icons: {
    icon: "https://mini-hub-six.vercel.app/favicon.ico",
  },
  other: {
    "farcaster:miniapp": "true",
    "farcaster:author": "vinu07",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
