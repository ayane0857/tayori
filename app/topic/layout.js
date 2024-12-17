import "../globals.css";
export const runtime = 'edge';
export function generateMetadata() {
  return {
    title: 'たよりさん10万人突破',
    description: 'たよりさんのYoutubeチャンネルが10万人を突破しました',
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
