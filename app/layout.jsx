import { Bodoni_Moda, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-bodoni_moda" });

const merriweather = Merriweather({subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-merriweather"})

export const metadata = {
  title: "SipSpot Coffee Shop | CoDesign Studio",
  description: "Designed by CoDesign Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${merriweather.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
