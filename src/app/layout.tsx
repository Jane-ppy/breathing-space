import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '@/contexts/LanguageContext'

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "三分鐘呼吸空間 | Three-Minute Breathing Space",
  description: "活在當下，專注呼吸，讓心靈找到平靜 | Live in the present, focus on breathing, find peace in your mind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${notoSans.variable} font-sans antialiased`}>
<<<<<<< HEAD
        <LanguageProvider>
          <div className="min-h-screen bg-white text-gray-900">
            {children}
          </div>
        </LanguageProvider>
=======
        <div className="min-h-screen bg-white text-gray-900">
          {children}
        </div>
>>>>>>> fb1afd1
      </body>
    </html>
  );
}
