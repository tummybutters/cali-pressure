import type { Metadata } from "next";
import { Inter, Barlow_Condensed, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "California Pressure Washing — San Diego's 5-Star Pressure Washing Pros",
    template: "%s · California Pressure Washing",
  },
  description:
    "Owner-operated pressure washing in San Diego. Concrete, roof wash, house wash, solar and window cleaning. 50+ five-star Google reviews.",
  metadataBase: new URL("https://californiapw.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlow.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-ink-950)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
