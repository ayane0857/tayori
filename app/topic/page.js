"use client";

import Link from "next/link";
import "../globals.css";
import { useState } from 'react';
export const runtime = 'edge';
import Image from 'next/image'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'

export default function RootLayout() {
    return (
        <>
            <Header />
            <div class="ih main max-w-xl mx-auto">
                <h1 class="text-2xl font-light pb-3 border-b border-gray-200">Topic</h1>
                <Link href="/topic/1" class="block py-4 border-b border-gray-200 transition duration-300 hover:text-blue-500">
                    <h3 class="text-lg font-normal">音さん10万人突破</h3>
                </Link>
            </div>
            <Footer />
        </ >
    );
}
