import "../globals.css";
export const runtime = 'edge';
import Image from 'next/image'
import Header from '../../components/header.js'
export const metadata = {
    title: 'プロフィール',
    description: 'たよりさんについてまとめてます',
};
function ProfileItem({ label, value }) {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</h3>
            <p className="mt-1 text-lg font-semibold">{value}</p>
        </div>
    );
}

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="main">
                <div className="ih">
                    <div className="main-title">
                        <Image src="/icon.png" height={180} width={180} alt="icon" className="icon" />
                        <h1 className="text-2xl lg:text-4xl">音(たより)</h1>
                    </div>
                    <br></br>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProfileItem label="概要" value="生声兼ゆっくり茶番ショート投稿者" />
                        <ProfileItem label="芸名" value="桜木音" />
                        <ProfileItem label="誕生日" value="10月20日" />
                        <ProfileItem label="性別" value="女性" />
                        <ProfileItem label="年齢" value="18" />
                        <ProfileItem label="血液型" value="O型" />
                        <ProfileItem label="よくやってるゲーム" value="プロセカ" />
                        <ProfileItem label="身長" value="164cm" />
                        <ProfileItem label="好きな季節" value="秋" />
                        <ProfileItem label="好きな色" value="水色" />
                        <ProfileItem label="猫犬" value="猫派" />
                        <ProfileItem label="ハッシュタグ" value="#風のお音" />
                        <ProfileItem label="文理" value="文系" />
                        <ProfileItem label="好きな食べ物" value="グミ" />
                        <ProfileItem label="派閥" value="きのこの山派" />
                        <ProfileItem label="黒歴史" value="YouTubeライブで長文指摘厨だった" />
                        <ProfileItem label="好きな東方キャラ" value="フラン" />
                    </div>
                </div>
            </div>
        </ >
    );
}
