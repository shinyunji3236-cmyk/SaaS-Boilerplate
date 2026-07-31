export default function TodayPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Events & News</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
            🎉 오늘의 시장 (야시장 & 공연 정보)
          </h1>
          <p className="text-gray-600 mt-2">오늘 시장에서 펼쳐지는 생생한 야시장과 문화 공연 소식을 전합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 text-white shadow-md flex flex-col justify-between">
            <div>
              <span className="bg-black/30 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                LIVE 진행중
              </span>
              <h3 className="text-3xl font-extrabold mt-6">금요 달빛 야시장 & 버스킹 공연</h3>
              <p className="mt-3 text-amber-100 text-base leading-relaxed">
                매주 금요일 밤! 다양한 길거리 푸드트럭과 버스킹 뮤지션들의 신나는 공연이 펼쳐집니다. 가족, 연인과 함께 정겨운 밤 산책을 즐겨보세요!
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/20 flex justify-between items-center text-sm text-amber-100 font-medium">
              <span>📍 장소: 시장 중앙 광장</span>
              <span>⏰ 시간: 18:00 ~ 22:00</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-md flex flex-col justify-between">
            <div>
              <span className="bg-emerald-500/80 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                이번 주 주말
              </span>
              <h3 className="text-3xl font-extrabold mt-6">온누리상품권 환급 이벤트</h3>
              <p className="mt-3 text-gray-300 text-base leading-relaxed">
                전통시장에서 5만 원 이상 구매 시 온누리상품권 1만 원권을 현장에서 즉시 환급해 드립니다. 알뜰하고 즐거운 전통시장 쇼핑을 경험하세요.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/20 flex justify-between items-center text-sm text-gray-400 font-medium">
              <span>📍 장소: 고객지원센터 1층</span>
              <span>⏰ 기간: ~ 예산 소진 시까지</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
