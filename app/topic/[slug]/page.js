import Link from 'next/link'
import Header from '../../../components/header.js';
import ReactMarkdown from 'react-markdown'

const articles = {
    'tayoriquiz': {
        title: "たよりさんクイズに関すること",
        content: `たよりさんクイズに関するお知らせ

・第一弾：本日をもちましてクイズへの参加受付を終了いたしました。今後はご利用いただけません。

・第二弾：今年（12月末）までご参加いただけますが、来年からは利用できなくなりますのでご了承ください。

なお、点数上位3位までに入賞された方には特別に賞状を発行いたします。点数や賞状に関するお問い合わせについては、下記メールアドレスまでご連絡ください。

お問い合わせ先：tayoripages @gmail.com

皆さまのご理解とご協力をよろしくお願いいたします。`
    },
}

export default function Article({ params }) {
    const article = articles[params.slug]

    if (!article) {
        return <div>Article not found</div>
    }

    return (
        <div>
            <article className="max-w-2xl mx-auto px-4 py-8">
                <Link
                    href="/"
                    className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition-colors"
                >
                    ← Back to Home
                </Link>
                <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
                <div className="prose max-w-none">
                    {article.content.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </article>
        </div>
    )
}

