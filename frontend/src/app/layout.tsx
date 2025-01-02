import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const oswald = Oswald({
  subsets: ['latin'],
  weight: '700',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
})


export const metadata: Metadata = {
  title: "ARENA",
  description: "Welcome to the Arena",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${oswald.className} ${openSans.className}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
