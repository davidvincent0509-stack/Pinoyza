import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PINOYZA — PEOPLE. OPPORTUNITIES. GROWTH.",
    template: "%s | PINOYZA",
  },
  description:
    "PINOYZA is a workforce consulting firm connecting talent with employers. Staffing solutions, verified opportunities, and trusted hiring partnerships.",
  keywords: [
    "workforce consulting",
    "staffing solutions",
    "talent acquisition",
    "PINOYZA",
    "employment services",
  ],
  openGraph: {
    title: "PINOYZA — PEOPLE. OPPORTUNITIES. GROWTH.",
    description:
      "A trusted workforce consulting firm connecting professionals with leading employers worldwide.",
    url: "https://pinoyza.com",
    siteName: "PINOYZA",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
