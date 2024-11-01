import "./globals.css";
export const runtime = 'edge';
export const metadata = {
  title: 'ホーム',
  description: 'たよりさんのホームページのホーム',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="dark:bg-slate-800 dark:text-white">
        {children}
      </body>
    </html>
  );
}
