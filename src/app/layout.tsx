import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomLayout from "@/components/CustomLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce - Modulo 10 - APX",
  description:
    "Proyecto realizado por Pablo Murillo para la carrera de desarrollo web de APX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
