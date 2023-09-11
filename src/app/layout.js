import "./globals.css";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import { cx } from "@/src/utils";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  title: "Opiniando",
  description: "Um local onde todos podem opinar,sobre tudo! Opinião! Participação!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(inter.variable, manrope.variable, "font-mr bg-light")}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
