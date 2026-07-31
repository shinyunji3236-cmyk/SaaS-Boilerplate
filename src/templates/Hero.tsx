import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative w-full bg-gray-900 text-white">
      {/* 배경 이미지 및 오버레이 영역 */}
      <div className="absolute inset-0 z-0 opacity-60 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1600&q=80')" }}>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[500px] lg:items-center lg:px-8">
        <div className="max-w-2xl text-left">
          <span className="inline-block rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-black mb-4">
            정성과 정이 가득한 전통시장
          </span>
          <h1 className="text-3xl font-extrabold sm:text-5xl leading-tight drop-shadow-md">
            수원에서 만나는<br />
            <span className="text-amber-400">정겨운 전통시장 이야기</span>
          </h1>

          <p className="mt-4 max-w-lg text-lg sm:text-xl text-gray-200 drop-shadow">
            신선한 먹거리부터 다채로운 야시장 공연까지,<br />
            우리 시장의 모든 즐길 거리를 한눈에 확인해 보세요!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="#map"
              className="block w-full rounded bg-amber-500 px-6 py-3 text-sm font-bold text-black shadow hover:bg-amber-400 sm:w-auto transition-all"
            >
              🗺️ 오시는 길 & 지도
            </Link>
            <Link
              href="#stores"
              className="block w-full rounded bg-white/20 backdrop-blur-md px-6 py-3 text-sm font-bold text-white border border-white/30 hover:bg-white/30 sm:w-auto transition-all"
            >
              🏪 점포 둘러보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
