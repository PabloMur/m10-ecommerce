"use client";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function CustomLayout({ children }: any) {
  return (
    <RecoilRoot>
      <Navbar />
      {children}
      <Footer />
    </RecoilRoot>
  );
}
