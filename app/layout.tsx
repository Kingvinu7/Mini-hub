import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mini Hub",
  description: "A simple hub to access all my Farcaster miniapps",
  openGraph: {
    title: "Minihub",
    description: "Explore my miniapps in the mini hub of my miniapps",
    url: "https://mini-hub-six.vercel.app",
    images: [
      {
        url: "https://mini-hub-six.vercel.app/prevue.png",
        width: 1200,
        height: 630,
        alt: "Mini Hub - Farcaster Miniapps Preview"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minihub",
    description: "Explore my miniapps in the mini hub of my miniapps",
    images: ["https://mini-hub-six.vercel.app/prevue.png"],
  },
  icons: {
    icon: "https://mini-hub-six.vercel.app/favicon.ico",
  },
  other: {
    "farcaster:miniapp": "true",
    "farcaster:name": "Mini Hub",
    "farcaster:version": "1",
    "farcaster:icon": "https://mini-hub-six.vercel.app/icon.png",
    "farcaster:home-url": "https://mini-hub-six.vercel.app",
    "farcaster:image-url": "https://mini-hub-six.vercel.app/prevue.png",
    "farcaster:button-title": "Explore miniapps",
    "farcaster:splash-image-url": "https://mini-hub-six.vercel.app/splash-image.png",
    "farcaster:splash-background-color": "#1a0b2e",
    "farcaster:subtitle": "Showcasing my miniapps",
    "farcaster:description": "A simple hub to access all my Farcaster miniapps",
    "farcaster:primary-category": "social",
    "farcaster:tags": "miniapps,trending,base,farcaster,minihub",
    "farcaster:tagline": "check my created miniapps",
    "farcaster:og-title": "Minihub",
    "farcaster:og-description": "explore my miniapps in the mini hub of my miniapps",
    "farcaster:og-image-url": "https://mini-hub-six.vercel.app/prevue.png",
    "farcaster:cast-share-url": "https://mini-hub-six.vercel.app",
    "farcaster:account-header": "eyJmaWQiOjI1MDg2OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDQwZUY3Qzc1YjRlRDBkQjY3N0MzN2VjODkxODM0QjI1MDk1ODI1ZDYifQ",
    "farcaster:account-payload": "eyJkb21haW4iOiJtaW5pLWh1Yi1zaXgudmVyY2VsLmFwcCJ9",
    "farcaster:account-signature": "MHg5ZWY4MWFiZWM2YTJjZjkyMzExOGM4ZDUwMzcyYjIxOTVkYjRhOWYxYzkxZDMxYzVjZGFlMWM0MWI5OGExYWE2MjUzNDM5ZmQxNDNkMmU4MmMyYmM5MDYyODNhNDBjMjU1OTBkOWRjMmU1MzM5OGQ1NjgwNGU4MjdlZGM5ODhhZjFi"
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
