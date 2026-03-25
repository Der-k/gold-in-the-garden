import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Gold in the Garden",
  description: "Gold in the Garden - Premier Kenyan Music Events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-body bg-background text-foreground antialiased">
        {/* Global UI */}
        <Header />

        {/* Page content */}
        <main className="flex-1">{children}</main>

        <Footer />
        <Toaster />
      </body>
    </html>
  );
}