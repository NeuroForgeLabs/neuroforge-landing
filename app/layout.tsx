import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "NeuroForgeLabs — AI Infrastructure & Developer Tools",
  description:
    "Open-source tools for AI engineers building RAG systems, LLM pipelines, and secure blockchain applications.",
  keywords: [
    "AI infrastructure",
    "RAG pipelines",
    "LLM debugging",
    "smart contract security",
    "developer tools",
    "open source",
  ],
  authors: [{ name: "Anvar Baltakhojayev" }],
  icons: {
    icon: "/neuroforgelogo.png",
    shortcut: "/neuroforgelogo.png",
    apple: "/neuroforgelogo.png",
  },
  openGraph: {
    title: "NeuroForgeLabs — AI Infrastructure & Developer Tools",
    description:
      "Open-source tools for AI engineers building RAG systems, LLM pipelines, and secure blockchain applications.",
    url: "https://neuroforgelabs.dev",
    siteName: "NeuroForgeLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroForgeLabs — AI Infrastructure & Developer Tools",
    description:
      "Open-source tools for AI engineers building RAG systems, LLM pipelines, and secure blockchain applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
