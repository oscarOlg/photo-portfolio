import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OscarOlg",
  description: "OscarOlg Photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-color.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
