import "../globals.css";
export const runtime = 'edge';
export function generateMetadata() {
  return {
    title: 'たよりさん10万人突破',
    description: 'たよりさんのYoutubeチャンネルが10万人を突破しました',
  };
}
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
