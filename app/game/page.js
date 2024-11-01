"use client";

import Link from "next/link";
import "../globals.css";
import { useState } from 'react';
import Image from 'next/image'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'

export const metadata = {
    title: 'ゲーム',
    description: 'たよりさんのかわいいミニゲームができます'
};

export default function Game() {
    return (
        <>
            <Header />
            <div className="ih">
                <iframe src="./game.html" className="iframe69" frameBorder="0" allowFullScreen />
                <h1 className="text-4xl md:text-2xl">よしよしゲーム</h1>
                <p>マウスや指をたよりさんの上で左右に動かすとよしよしできます</p>
            </div>
            <Footer />
        </>
    );
}