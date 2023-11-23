import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elang and Wiwit Wedding Invitation",
  description: "Elang and Wiwit Wedding Invitation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
