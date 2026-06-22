import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import LiveChat from "@/components/LiveChat";

const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-titillium",
});

export const metadata: Metadata = {
  title: "Brand Publishers — Premium Book Writing Services",
  description: "Book Publishing Services Simplified For You!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titillium.variable} font-titillium antialiased`}>
        {children} <LiveChat />
      </body>
    </html>
  );
}