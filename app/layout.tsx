import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agrivest",
  description: "Agrivest is a platform that connects farmers with investors to support sustainable agriculture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.className} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
