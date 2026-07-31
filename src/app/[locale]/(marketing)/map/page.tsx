export default function MapPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Directions & Map</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
            📍 오시는 길 & 추천 코스 지도
          </h1>
          <p className="text-gray-600 mt-2">전통시장으로 오시는 방법과 테마별 추천 탐방 코스를 소개합니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 bg-gray-200 rounded-3xl min-h-[450px] overflow-hidden relative shadow-inner border border-gray-300 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="text-5xl mb-3">🗺️</div>
              <p className="text-gray-800 font-bold text-xl">전통시장 대화형 카카오 지도 영역</p>
              <p className="text-gray-500 text-sm mt-2">대중교통 안내 및 주차장 위치 정보가 수록되는 지도 화면입니다.</p>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">코스 01</span>
              <h3 className="font-bold text-xl text-gray-900 mt-3">입이 즐거운 먹거리 탐방 코스</h3>
              <p className="text-sm text-gray-600 mt-2">유명 통닭거리 ➔ 수제 만두 ➔ 전통 꽈배기 ➔ 오미자 차</p>
              <p className="text-xs text-amber-600 font-medium mt-4">⏱️ 예상 소요시간: 1시간 30분</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">코스 02</span>
              <h3 className="font-bold text-xl text-gray-900 mt-3">알뜰장보기 & 볼거리 코스</h3>
              <p className="text-sm text-gray-600 mt-2">청과물 정육 코너 ➔ 방앗간 참기름 ➔ 전통 공예품 상점</p>
              <p className="text-xs text-amber-600 font-medium mt-4">⏱️ 예상 소요시간: 2시간</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
