import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

const nunito = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uttar Rana Magar Film Maker",
  description: "Best film maker, director and editor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WM2XQWKV" />
      <body className={`${nunito.className} w-full bg-black`}>
        <Navbar />
        <main className="-mt-[64px] md:-mt-[68px] z-[20] h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
