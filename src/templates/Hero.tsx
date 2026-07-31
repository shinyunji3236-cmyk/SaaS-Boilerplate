export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900 text-white">
      {/* 메인 배경 이미지 영역 (추후 이미지 슬라이더로 교체할 부분) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-500" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1600&q=80')" 
        }}
      >
        {/* 가독성을 위한 어두운 오버레이 레이어 */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 비주얼 텍스트 콘텐츠 */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-6 py-28 sm:py-36 lg:px-8">
        <div className="max-w-2xl text-left">
          <span className="inline-block rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-black mb-3">
            정성과 정이 가득한 전통시장
          </span>
          <h1 className="text-3xl font-extrabold sm:text-5xl leading-tight drop-shadow-md">
            영등포에서 만나는<br />
            <span className="text-amber-400">정겨운 전통시장 이야기</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-200 drop-shadow">
            신선한 먹거리부터 다채로운 야시장 공연까지 한눈에 확인해 보세요!
          </p>
        </div>
      </div>
    </section>
  );
};
