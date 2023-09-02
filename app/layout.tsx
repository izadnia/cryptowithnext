import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FixedTools from "./components/fixedtools/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ direction: "rtl" }}>
        <div className="w-[full] min-h-screen">
          <FixedTools>{children}</FixedTools>
        </div>
      </body>
    </html>
  );
}
