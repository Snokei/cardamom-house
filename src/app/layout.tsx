import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cardamom House — Lisbon brunch menu",
  description:
    "Slow brunch. Strong coffee. The public menu for Cardamom House, Rua da Boavista, Lisbon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${sourceSans.variable} bg-cream font-sans text-ink antialiased`}
      >
        <a className="skip-link" href="#menu">
          Skip to menu
        </a>
        {children}
      </body>
    </html>
  );
}
