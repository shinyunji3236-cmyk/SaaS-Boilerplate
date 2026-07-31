import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 로고 영역 */}
        <Link href="/" className="flex items-center gap-2 text-xl font-black text-gray-900">
          <span className="text-amber-500">🏯</span> 영등포 전통시장
        </Link>

        {/* 상단 탭 내비게이션 메뉴 */}
        <nav className="flex items-center gap-6 text-sm font-bold text-gray-700">
          <Link href="#map" className="hover:text-amber-600 transition-colors">
            오시는 길
          </Link>
          <Link href="#stores" className="hover:text-amber-600 transition-colors">
            점포안내
          </Link>
          <Link href="#stories" className="hover:text-amber-600 transition-colors">
            시장이야기
          </Link>
          <Link href="#today" className="hover:text-amber-600 transition-colors">
            오늘의시장
          </Link>
        </nav>
      </div>
    </header>
  );
};
