import "../globals.css";
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'

export const metadata = {
    title: 'ゲーム',
    description: 'たよりさんのかわいいミニゲームができます'
};
import { GoogleAnalytics } from '@next/third-parties/google'

export default function GameLayout({ children }) {
    return (
        <>
            <Header />
            <GoogleAnalytics gaId="G-XD9P316J50" />
            <div className="ih">
                <iframe src="./game.html" className="iframe69" frameBorder="0" allowFullScreen />
                <h1 className="text-4xl md:text-2xl">よしよしゲーム</h1>
                <p>マウスや指をたよりさんの上で左右に動かすとよしよしできます</p>
                {children}
            </div>
            <Footer />
        </>
    );
}