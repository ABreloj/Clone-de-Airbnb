import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";
import LoginModal from "./components/modals/LoginModal";
import SignUpModal from "./components/modals/SignUpModal";
import AddPropertyModal from "./components/modals/AddPropertyModal";

export const metadata: Metadata = {
  title: "DjangoBnb",
  description: "Generated by create next app",
};

const inter = Inter ({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="pt-32">
          {children}
        </div>

        <LoginModal />
        <SignUpModal />
        <AddPropertyModal/>
      </body>
    </html>
  );
}
