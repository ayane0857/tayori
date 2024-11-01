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
            <div className="ih">
                <iframe src="./game.html" className="iframe69" frameborder="0" allowfullscreen />
                <h1 className="text-4xl md:text-2xl">よしよしゲーム</h1>
                <p>マウスや指をたよりさんの上で左右に動かすとよしよしできます</p>
            </div>
            <Footer />
        </ >
    );
}
