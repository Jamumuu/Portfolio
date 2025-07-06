import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({
    weight: "400",
    subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Ti-jam.dev",
  description: "my tech garden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ptSerif} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
