"use client";

import Link from "next/link";
import "../app/globals.css";
import { useState } from 'react';
export const runtime = 'edge';
import Image from 'next/image'

function Fia({ url, icon, alt }) {
    return (
        <a href={url}>
            <div className="relative w-14 h-14 rounded-lg p-1.5 bg-white dark:bg-slate-200">
                <div className="absolute inset-0 border border-black rounded-lg"></div>
                <Image
                    src={icon}
                    width={490}
                    height={490}
                    alt={alt}
                />
            </div>
        </a>
    )
}

export default function RootLayout() {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="dark:text-white">
            <div className={`${isActive ? 'han bg-white dark:bg-slate-800' : ''}allhan`}>
                <div className="flex justify-end items-start">
                    <div className="p-4">
                        <div
                            className={`btn-trigger ${isActive ? 'active' : ''}`}
                            id="btn01"
                            onClick={toggleActive}
                        >
                            <span className="bg-black dark:bg-slate-200"></span>
                            <span className="bg-black dark:bg-slate-200"></span>
                            <span className="bg-black dark:bg-slate-200"></span>
                        </div>
                    </div>
                </div>
                <div className={`${isActive ? 'han-memu' : 'unactive'} flex justify-center grid justify-items-stretch items-center`}>
                    <ul>
                        <li><Link href="/">ホーム</Link></li>
                        <li><Link href="/profile">プロフィール</Link></li>
                        <li><Link href="/game">ゲーム</Link></li>
                    </ul>
                </div>
            </div>
            <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
                <Fia url="https://www.youtube.com/channel/UCO-M9EilpZtUr-44QuUxI2w" icon="/youtube.png" alt="音さんのYoutubeアカウント" />
                <Fia url="https://x.com/Tayori8739" icon="/twitter.png" alt="音さんのXアカウント" />
                <Fia url="https://x.com/Tayorisabu" icon="/twitter.png" alt="音さんのXアカウント(サブ)" />
                <Fia url="https://twitcasting.tv/tayori8739" icon="/twitcasting.webp" alt="音さんのツイキャスアカウント" />
                <Fia url="https://marshmallow-qa.com/tayori8739" icon="/marsmallow.png" alt="音さんのマシュマロ" />
            </div>
        </div>
    );
}
