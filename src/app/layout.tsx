import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AcreLink - Smart Technology for Large Properties",
  description: "Professional installation and consulting for distributed WiFi systems, security cameras, and smart home systems on estates and rural homesteads in North Central Texas.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/acrelink logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/acrelink logo.png",
  },
  openGraph: {
    title: "AcreLink - Smart Technology for Large Properties",
    description: "Professional installation and consulting for distributed WiFi systems, security cameras, and smart home systems on estates and rural homesteads in North Central Texas.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AcreLink - Smart Technology for Large Properties",
    description: "Professional installation and consulting for distributed WiFi systems, security cameras, and smart home systems on estates and rural homesteads in North Central Texas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
          nonce=""
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
