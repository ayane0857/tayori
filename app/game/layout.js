import "../globals.css";
export const runtime = 'edge';
export function generateMetadata() {
  return {
    title: 'ゲーム',
    description: 'たよりさんのかわいいミニゲームができます',
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="dark:bg-slate-800 dark:text-white">
        {children}
      </body>
    </html>
  );
}
