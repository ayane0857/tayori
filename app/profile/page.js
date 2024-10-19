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
            <div className="main2">
                <div className="ih">
                    <div className="main-title">
                        <Image src="/icon.png" height={180} width={180} alt="icon" className="icon" />
                        <h1 className="text-2xl lg:text-4xl">音(たより)</h1>
                    </div>
                    <br></br>
                    <ul className="text-lg lg:text-2xl">
                        <li>概要：生声兼ゆっくり茶番ショート投稿者</li>
                        <li>芸名：桜木音</li>
                        <li>誕生日：10月20日</li>
                        <li>性別：女性</li>
                        <li>年齢：18</li>
                        <li>血液型：O型</li>
                        <li>よくやってるゲーム：プロセカ</li>
                        <li>身長：164cm</li>
                        <li>好きな季節：秋</li>
                        <li>ハッシュタグ：#風のお音</li>
                        <li>文理：文系</li>
                        <li>好きな食べ物：グミ</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </ >
    );
}
