import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wahyu's Portfolio",
  description: "A portfolio website for Wahyu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Light Mode Icons */}
        <link
          rel="icon"
          type="image/png"
          href="/icon_light/favicon-32x32.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="apple-touch-icon"
          href="/icon_light/apple-touch-icon.png"
          media="(prefers-color-scheme: light)"
        />

        {/* Dark Mode Icons */}
        <link
          rel="icon"
          type="image/png"
          href="/icon_dark/favicon-32x32.png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="apple-touch-icon"
          href="/icon_dark/apple-touch-icon.png"
          media="(prefers-color-scheme: dark)"
        />

        {/* Fallback Icon */}
        <link rel="icon" href="/icon_light/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
