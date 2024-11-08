import "../globals.css";
export const runtime = 'edge';
import Image from 'next/image'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
export const metadata = {
  title: 'ゲーム',
  description: 'たよりさんのゲームリストサイト',
};
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="dark:bg-slate-800 dark:text-white">
        <Header />
        <GoogleAnalytics gaId="G-XD9P316J50" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
