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
  title: "Premium Book Writer",
  description: "Book Writing Services Simplified For You!",
  icons: {
    icon: "/images/favicon.png",
  },
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