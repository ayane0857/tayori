import "./globals.css";
export const runtime = 'edge';
export const metadata = {
  title: 'ホーム',
  description: 'たよりさんのホームページのホーム',
};
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="dark:bg-slate-800 dark:text-white">
        <GoogleAnalytics gaId="G-XD9P316J50" />
        <script type="text/javascript" data-cmp-ab="1" src="https://cdn.consentmanager.net/delivery/autoblocking/5aa44bce21b5d.js" data-cmp-host="b.delivery.consentmanager.net" data-cmp-cdn="cdn.consentmanager.net" data-cmp-codesrc="16"></script>
        {children}
      </body>
    </html>
  );
}
