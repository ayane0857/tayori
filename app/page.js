"use client";

import Link from "next/link";
import "./globals.css";
export const runtime = 'edge';
import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function RootLayout() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="imgheader"></div>
        <br /><br />
        <ul className="flex justify-between text-center md:text-2xl lg:text-4xl">
          <li className="flex-1"><Link href="./topic">トピック</Link></li>
          <li className="shrink-0 w-64"><Link href="./profile">プロフィール</Link></li>
          <li className="flex-1"><Link href="./game">ゲーム</Link></li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
