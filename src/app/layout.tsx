import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import BackToTopButton from "./components/BackToTopButton";

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
  title: "My Webpage - Lezgin Alimoglu",
  description: "Created by Lezgin Alimoglu",
};

export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-slate-900 text-white p-4 flex justify-between items-center">
          <div className="ml-auto mr-20">
            <Navigation />
          </div>
        </header>

        {/* Main content of the page (children will be the dynamic content, like contact page) */}
        <main className="flex-grow">{children}</main>

        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
