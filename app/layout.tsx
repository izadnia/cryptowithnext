import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FixedTools from "./components/fixedtools/page";
import Footer from "./components/footer/page";

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
      <body
        suppressHydrationWarning={true}
        className={inter.className}
        style={{ direction: "ltr" }}
      >
        <div className="w-[full] min-h-screen">
          <FixedTools>
            <div className="max-w-4xl m-auto">{children}</div> 
            <Footer />
          </FixedTools>
        </div>
      </body>
    </html>
  );
}
