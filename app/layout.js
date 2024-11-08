import "./globals.css";
export const runtime = 'edge';
export const metadata = {
  title: 'ホーム',
  description: 'たよりさんのホームページのホーム',
};
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <GoogleAnalytics gaId="G-XD9P316J50" />
      <body className="dark:bg-slate-800 dark:text-white">
        {children}
      </body>
    </html>
  );
}
