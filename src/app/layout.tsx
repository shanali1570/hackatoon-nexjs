import { Poppins } from '@next/font/google';
import type { Metadata } from "next";
import "./globals.css";

// Load Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '400', '600', '700', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Hacktoon Next Js App",
  description: "Generated by Syed Muhammad Shan -e-Ali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}