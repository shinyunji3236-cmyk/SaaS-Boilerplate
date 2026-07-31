import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-slate-800">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-xl font-bold text-white">🏯 수원 전통시장 공식 안내</h2>
          <p className="text-sm text-gray-400 mt-1">
            정성과 정이 가득한 전통시장에서 신선한 먹거리와 즐거운 이벤트를 만나보세요.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link href="/map" className="hover:text-amber-400 transition-colors">
            오시는 길
          </Link>
          <Link href="/stores" className="hover:text-amber-400 transition-colors">
            점포안내
          </Link>
          <Link href="/stories" className="hover:text-amber-400 transition-colors">
            시장이야기
          </Link>
          <Link href="/today" className="hover:text-amber-400 transition-colors">
            오늘의시장
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} 전통시장 공식 홈페이지. All rights reserved.
      </div>
    </footer>
  );
};
