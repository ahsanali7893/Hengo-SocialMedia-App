import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import LeftSideBar from "@/Components/shared/LeftSideBar";
import Navbar from "@/Components/shared/Navbar";
import RightSideBar from "@/Components/shared/RightSideBar";
import Footer from "@/Components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hengo",
  description: "A nextjs meta hengo Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <main>
            <LeftSideBar />
            <section className="container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar />
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
