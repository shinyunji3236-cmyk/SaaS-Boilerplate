import Link from 'next/link';

export const Features = () => {
  return (
    <div className="bg-slate-50 py-16 space-y-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

        {/* ==========================================
            1. 지도 & 추천 코스 섹션
           ========================================== */}
        <section id="map" className="scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Course Guide</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                🗺️ 한눈에 보는 시장 지도 & 코스 추천
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* 카카오/네이버 지도 들어갈 카카오 맵 대치 영역 */}
            <div className="lg:col-span-2 bg-gray-200 rounded-3xl min-h-[350px] overflow-hidden relative shadow-inner border border-gray-300 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-4xl mb-2">📍</div>
                <p className="text-gray-700 font-bold text-lg">전통시장 대화형 지도 영역</p>
                <p className="text-gray-500 text-sm mt-1">추후 Kakao Map API 또는 Google Maps가 연동될 위치입니다.</p>
              </div>
            </div>

            {/* 추천 코스 카드 리스트 */}
            <div className="flex flex-col justify-between space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">코스 01</span>
                <h3 className="font-bold text-lg text-gray-900 mt-2">입이 즐거운 먹거리 탐방 코스</h3>
                <p className="text-sm text-gray-600 mt-1">유명 통닭거리 ➔ 수제 만두 ➔ 전통 꽈배기 ➔ 오미자 차</p>
                <p className="text-xs text-amber-600 font-medium mt-3">⏱️ 예상 소요시간: 1시간 30분</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">코스 02</span>
                <h3 className="font-bold text-lg text-gray-900 mt-2">알뜰장보기 & 볼거리 코스</h3>
                <p className="text-sm text-gray-600 mt-1">청과물 정육 코너 ➔ 방앗간 참기름 ➔ 전통 공예품 상점</p>
                <p className="text-xs text-amber-600 font-medium mt-3">⏱️ 예상 소요시간: 2시간</p>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            2. 시장 이야기 (점포 스토리) 섹션
           ========================================== */}
        <section id="stories" className="scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Market Stories</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                📖 정성이 담긴 시장 이야기
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 카드 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all group cursor-pointer">
              <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80')" }} />
              <div className="p-6">
                <span className="text-xs font-bold text-amber-600">30년 전통 · 맛집</span>
                <h3 className="font-bold text-xl text-gray-900 mt-1">매일 아침 직접 뽑는 가마솥 할머니 떡집</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  새벽 4시부터 고소한 떡 냄새로 시장을 깨우는 할머니의 정성 어린 수제 떡 이야기.
                </p>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all group cursor-pointer">
              <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80')" }} />
              <div className="p-6">
                <span className="text-xs font-bold text-amber-600">청년상인 · 카페</span>
                <h3 className="font-bold text-xl text-gray-900 mt-1">옛 방앗간의 변신, 감성 레트로 카페</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  아버지의 기름집을 개조해 전통 곡물 로스팅 음료를 선보이는 젊은 상인의 도전.
                </p>
              </div>
            </div>

            {/* 카드 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all group cursor-pointer">
              <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80')" }} />
              <div className="p-6">
                <span className="text-xs font-bold text-amber-600">신선정육 · 상점</span>
                <h3 className="font-bold text-xl text-gray-900 mt-1">신선함으로 승부하는 2대째 축산 상점</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  좋은 고기만 고집하는 고집스러운 사장님의 정직한 상인 철학.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            3. 오늘의 시장 (야시장/행사 정보) 섹션
           ========================================== */}
        <section id="today" className="scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Events & News</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                🎉 오늘의 시장 (야시장 & 공연)
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 이벤트 카드 1 */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-6 text-white shadow-md flex flex-col justify-between">
              <div>
                <span className="bg-black/30 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                  LIVE 진행중
                </span>
                <h3 className="text-2xl font-extrabold mt-4">금요 달빛 야시장 & 버스킹 공연</h3>
                <p className="mt-2 text-amber-100 text-sm">
                  매주 금요일 밤! 다양한 길거리 푸드트럭과 버스킹 뮤지션들의 신나는 공연이 펼쳐집니다.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20 flex justify-between items-center text-xs text-amber-100">
                <span>📍 장소: 시장 중앙 광장</span>
                <span>⏰ 시간: 18:00 ~ 22:00</span>
              </div>
            </div>

            {/* 이벤트 카드 2 */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-md flex flex-col justify-between">
              <div>
                <span className="bg-emerald-500/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                  이번 주 주말
                </span>
                <h3 className="text-2xl font-extrabold mt-4">온누리상품권 환급 이벤트</h3>
                <p className="mt-2 text-gray-300 text-sm">
                  전통시장에서 5만 원 이상 구매 시 온누리상품권 1만 원권을 현장에서 즉시 환급해 드립니다.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20 flex justify-between items-center text-xs text-gray-400">
                <span>📍 장소: 고객지원센터 1층</span>
                <span>⏰ 기간: ~ 예산 소진 시까지</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
