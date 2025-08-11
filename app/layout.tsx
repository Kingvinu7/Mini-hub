import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mini-Hub",
  description: "A simple hub to access all my Farcaster miniapps",
  url: "https://mini-hub-six.vercel.app", // replace with your deployed URL
  image: "https://mini-hub-six.vercel.app/icon.png", // your Mini-Hub icon or OG image
  author: "vinu07",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Farcaster specific */}
        <meta name="farcaster:miniapp" content="true" />
        <meta name="farcaster:author" content={metadata.author} />

        {/* Basic */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metadata.url} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        {/* Favicon */}
        <link
          rel="icon"
          href={metadata.image}
          type="image/png"
        />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
