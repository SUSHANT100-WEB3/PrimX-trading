import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "PrimX-AI powered crypto trade journal and prop firm",
  description: "PrimX-AI powered crypto trade journal and prop firm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
