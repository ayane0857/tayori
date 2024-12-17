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
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4">
            <nav className="w-full px-4 py-6">
              <ul className="flex items-center justify-between text-lg md:text-2xl lg:text-3xl">
                <li><Link href="./topic" className="hover:text-primary transition-colors">トピック</Link></li>
                <li><Link href="./profile" className="hover:text-primary transition-colors">プロフィール</Link></li>
                <li><Link href="./game" className="hover:text-primary transition-colors">ゲーム</Link></li>
              </ul>
            </nav>
          </div>
        </main >
      </div >
    </>
  );
}
