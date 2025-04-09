import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "三分鐘呼吸空間 | Three-Minute Breathing Space",
  description: "活在當下，專注呼吸，讓心靈找到平靜 | Live in the present, focus on breathing, and find peace of mind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen bg-white text-gray-900">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
