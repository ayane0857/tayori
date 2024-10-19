"use client";

import Link from "next/link";
import "../globals.css";
import { useState } from 'react';
export const runtime = 'edge';
import Image from 'next/image'
import Header from '../../components/header.js'
import Footer from '../components/footer.js'

export default function RootLayout() {
    return (
        <>
            <Header />
            <div className="main">Now maintenance</div>
            <Footer />
        </ >
    );
}
