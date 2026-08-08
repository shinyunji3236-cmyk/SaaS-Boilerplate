export default function MapPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Directions & Map</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
            📍 영등포 전통시장 오시는 길 & 추천 코스 지도
          </h1>
          <p className="text-gray-600 mt-2">영등포 전통시장으로 오시는 길과 실시간 위치, 테마별 추천 탐방 코스를 확인하세요.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* 실제 지도 연동 영역 (Google Maps Embed API 활용) */}
          <div className="lg:col-span-2 rounded-3xl min-h-[450px] overflow-hidden relative shadow-inner border border-gray-300 bg-white">
            <iframe
              title="영등포 전통시장 위치 지도"
              src="https://maps.google.com/maps?q=영등포전통시장&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen={false}
              tabIndex={0}
              loading="lazy"
            />
          </div>

          {/* 추천 코스 카드 영역 */}
          <div className="flex flex-col justify-between space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">코스 01</span>
              <h3 className="font-bold text-xl text-gray-900 mt-3">입이 즐거운 먹거리 탐방 코스</h3>
              <p className="text-sm text-gray-600 mt-2">영등포 명물 순대골목 ➔ 수제 만두 ➔ 전통 꽈배기 ➔ 시장 핫바</p>
              <p className="text-xs text-amber-600 font-medium mt-4">⏱️ 예상 소요시간: 1시간 30분</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">코스 02</span>
              <h3 className="font-bold text-xl text-gray-900 mt-3">알뜰장보기 & 볼거리 코스</h3>
              <p className="text-sm text-gray-600 mt-2">신선 청과 코너 ➔ 건어물 상가 ➔ 전통 의류 도소매 거리</p>
              <p className="text-xs text-amber-600 font-medium mt-4">⏱️ 예상 소요시간: 2시간</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
