import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quest Zone",
  description:
    "Compre jogos digitais com segurança e preço baixo na Quest Zone, sua loja de games online no Brasil. Títulos para Steam, Epic Games, GOG, PlayStation, Xbox e Nintendo com entrega imediata, promoções exclusivas e suporte especializado. Garanta seus games favoritos com praticidade e confiança!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-800`}
      >
        {children}
      </body>
    </html>
  );
}
