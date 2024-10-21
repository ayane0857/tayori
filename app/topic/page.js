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
            <div className="ih main">
                <h1 className="text-2xl font-semibold">Topic</h1>
                <Link
                    href="/post/1"
                    className="block transition duration-150 ease-in-out rounded-md p-4"
                >
                    <h3 className="text-xl mb-2">
                        音さん10万人突破
                    </h3>
                </Link>
            </div>
            <Footer />
        </ >
    );
}
