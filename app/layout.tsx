import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Expletus_Sans, Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const expletus = Expletus_Sans({
  variable: "--font-expletus",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HubSaber",
  description: "The collective hub for all of Beat Saber's custom maps",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${expletus.variable}`}>
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
