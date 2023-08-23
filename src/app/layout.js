import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Notifications from "@/components/Notifications";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Website",
  description: "Website for me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notifications />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
