"use client";

import Link from "next/link";
import "../globals.css";
import Header from '../../components/header.js';

export default function TopicsPage() {
    const articles = [
        { slug: 'tayoriquiz', title: 'たよりさんクイズに関すること' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="ih main max-w-xl mx-auto flex-grow">
                <h1 className="text-2xl font-light pb-3 border-b border-gray-200">Topics</h1>
                {articles.map((article) => (
                    <Link
                        href={`/topic/${article.slug}`}
                        key={article.slug}
                        className="block py-4 border-b border-gray-200 transition duration-300 hover:text-blue-500"
                    >
                        <h3 className="text-lg font-normal">{article.title}</h3>
                    </Link>
                ))}
            </main>
        </div>
    );
}