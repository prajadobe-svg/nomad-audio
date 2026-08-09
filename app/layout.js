import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Nomad Audio — Passive listening gear",
  description:
    "Headphones, speakers and turntables built to be used, not updated.",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <script src="https://assets.adobedtm.com/6a203c8a0ff8/aeb100c194c7/launch-cce179acef2d-development.min.js" async></script>
      <body className="font-body bg-ink text-paper antialiased">
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
