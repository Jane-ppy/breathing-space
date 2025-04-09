import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "三分鐘呼吸空間 | Three-Minute Breathing Space",
  description: "A mindfulness meditation project for academic research",
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
        <div className="min-h-screen bg-white text-gray-900">
          {children}
        </div>
      </body>
    </html>
  );
}
