"use client";

import Link from "next/link";
import "./globals.css";
export const runtime = 'edge';
import Header from '../components/header.js'

export default function RootLayout() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="imgheader"></div>
        <br /><br />
        <ul className="flex items-center justify-between w-full px-4 text-lg md:text-2xl lg:text-4xl whitespace-nowrap">
          <li className="flex-shrink-0"><Link href="./topic">トピック</Link></li>
          <li className="flex-shrink-0"><Link href="./profile">プロフィール</Link></li>
          <li className="flex-shrink-0"><Link href="./game">ゲーム</Link></li>
        </ul>
      </div>
    </>
  );
}
