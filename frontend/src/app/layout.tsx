import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${oswald.className} ${openSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
