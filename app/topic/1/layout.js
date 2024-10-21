import "../../globals.css";
export const runtime = 'edge';
export function generateMetadata() {
  return {
    title: 'トピック',
    description: '最近の話題',
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
