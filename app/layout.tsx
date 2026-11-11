import type { Metadata, Viewport } from "next"
import { Barlow, Barlow_Condensed, Geist_Mono } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow-condensed",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Besouro Drone — Imagens aéreas em Belo Horizonte",
  description:
    "Captação de imagens aéreas com drone para imobiliárias, construtoras, empresas, eventos e órgãos públicos em Belo Horizonte e região. Piloto certificado pela ANAC.",
  keywords: [
    "drone",
    "imagens aéreas",
    "filmagem com drone",
    "fotografia aérea",
    "Belo Horizonte",
    "BH",
    "imobiliárias",
    "construtoras",
    "acompanhamento de obras",
  ],
  openGraph: {
    title: "Besouro Drone — Vista de cima, outro nível",
    description:
      "Imagens aéreas para imóveis, obras, empresas, eventos e projetos institucionais em BH e região.",
    locale: "pt_BR",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0b0e0a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "dark antialiased",
        barlow.variable,
        barlowCondensed.variable,
        geistMono.variable
      )}
    >
      <body className="grain">{children}</body>
    </html>
  )
}
