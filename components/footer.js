"use client";

import Link from "next/link";
import "../app/globals.css";
import { useState } from 'react';
export const runtime = 'edge';

export default function RootLayout() {

    return (
        <footer className="py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">
                            © @tayori8739 2024
                        </p>
                        <p className="text-xs mt-1">
                            Art by @omaedareyenen_h
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
