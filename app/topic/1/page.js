"use client";

import Link from "next/link";
import "../../globals.css";
import { useState } from 'react';
export const runtime = 'edge';
import Image from 'next/image'
import Header from '../../../components/header.js'
import Footer from '../../../components/footer.js'

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
            <Header />
            <main className="flex-grow">
                <div className="ih main max-w-xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6 animate-pulse">
                        🎉 たよりさん10万人突破 🎉
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 mb-8">
                        たよりさんのYoutubeチャンネルが<br />
                        <span className="font-semibold text-pink-600">10万人</span>を突破しました！
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}