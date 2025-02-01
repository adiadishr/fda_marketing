import { Funnel_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LinksButton from "@/components/links-button";

const sansFont = Funnel_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Food Distribuors Australia",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${sansFont.variable} antialiased font-sans tracking-tighter`}>
        <Header />
        {children}
        <Footer />
        <LinksButton />
      </body>
    </html>
  );
}
