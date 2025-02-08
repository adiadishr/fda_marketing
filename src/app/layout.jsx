import { Funnel_Sans } from "next/font/google";
import "./globals.css";

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
      <body className={`${sansFont.variable} antialiased font-sans tracking-tight bg-white`}>
        {children}
      </body>
    </html>
  );
}
