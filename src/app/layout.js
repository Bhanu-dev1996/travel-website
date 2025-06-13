import { Roboto } from "next/font/google"

import "./globals.css"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata = {
  title: "Wanderlust - Explore the World",
  description: "Discover amazing destinations and travel experiences around the world",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}