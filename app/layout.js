export const runtime = 'edge';
export const metadata = {
  title: 'ホーム',
  description: 'たよりさんのホームページ',
};
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="dark:bg-slate-800 dark:text-white">
        <GoogleAnalytics gaId="G-XD9P316J50" />
        {children}
      </body>
    </html>
  );
}
