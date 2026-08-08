'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// Statement 1: TypeScript 전역 Window 인터페이스에 kakao 속성을 선언하여 타입 에러를 방지
declare global {
  interface Window {
    kakao: any;
  }
}

export const Features = () => {
  // Statement 2: 컴포넌트 마운트 시점에 실행되는 Side-Effect 훅 선언
  useEffect(() => {
    const initMap = () => {
      // Statement 3:전역 window 객체에 kakao 및 maps 라이브러리가 로드되었는지 검사
      if (window.kakao && window.kakao.maps) {
        // Statement 4: 카카오 지도 모듈을 비동기로 실행
        window.kakao.maps.load(() => {
          // Statement 5: 지도가 출력될 DOM 컨테이너 탐색
          const container = document.getElementById('kakao-map-home');
          const options = {
            center: new window.kakao.maps.LatLng(37.5156, 126.9073),
            level: 3,
          };
          // Statement 6: 카카오 지도 인스턴스 생성 및 영등포 전통시장 좌표 마커 바인딩
          const map = new window.kakao.maps.Map(container, options);
          const markerPosition = new window.kakao.maps.LatLng(37.5156, 126.9073);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
        });
      }
    };

    if (window.kakao && window.kakao.maps) {
      initMap();
    }
  }, []);

  return (
    <div className="bg-slate-50 py-16 space-y-24">
      {/* Statement 7: 카카오 지도 SDK 스크립트를 비동기로 로드하는 Next.js Script 컴포넌트 */}
      <Script
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=4efb8c65236157929a6a6ce2ed634b77&autoload=false"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
              const container = document.getElementById('kakao-map-home');
              const options = {
                center: new window.kakao.maps.LatLng(37.5156, 126.9073),
                level: 3,
              };
              const map = new window.kakao.maps.Map(container, options);
              const marker = new window.kakao.maps.Marker({
                position: new window.kakao.maps.LatLng(37.5156, 126.9073),
              });
              marker.setMap(map);
            });
          }
        }}
      />

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 1. 오시는 길 & 지도 섹션 */}
        <section id="map" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Directions & Map</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                📍 오시는 길 & 추천 코스 지도
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Statement 8: 가짜 안내판을 제거하고 카카오 지도가 렌더링될 실제 DOM 컨테이너 지정 */}
            <div className="lg:col-span-2 rounded-3xl min-h-[350px] overflow-hidden relative shadow-inner border border-gray-300 bg-white">
              <div id="kakao-map-home" style={{ width: '100%', height: '350px' }} />
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">코스 01</span>
                <h3 className="font-bold text-lg text-gray-900 mt-2">입이 즐거운 먹거리 탐방 코스</h3>
                <p className="text-sm text-gray-600 mt-1">영등포 명물 순대골목 ➔ 수제 만두 ➔ 전통 꽈배기 ➔ 시장 핫바</p>
                <p className="text-xs text-amber-600 font-medium mt-3">⏱️ 예상 소요시간: 1시간 30분</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">코스 02</span>
                <h3 className="font-bold text-lg text-gray-900 mt-2">알뜰장보기 & 볼거리 코스</h3>
                <p className="text-sm text-gray-600 mt-1">신선 청과 코너 ➔ 건어물 상가 ➔ 전통 의류 도소매 거리</p>
                <p className="text-xs text-amber-600 font-medium mt-3">⏱️ 예상 소요시간: 2시간</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 대표 점포 안내 섹션 */}
        <section id="stores" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Store Directory</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                🏪 대표 점포 안내
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
              <div className="text-3xl mb-2">🍞</div>
              <h3 className="font-bold text-gray-900">떡 / 제과</h3>
              <p className="text-xs text-gray-500 mt-1">가마솥 할머니 떡집 외 12곳</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
              <div className="text-3xl mb-2">🥩</div>
              <h3 className="font-bold text-gray-900">정육 / 수산</h3>
              <p className="text-xs text-gray-500 mt-1">신선 축산 유통 외 8곳</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
              <div className="text-3xl mb-2">🍎</div>
              <h3 className="font-bold text-gray-900">청과 / 야채</h3>
              <p className="text-xs text-gray-500 mt-1">영등포 상회 외 15곳</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
              <div className="text-3xl mb-2">☕</div>
              <h3 className="font-bold text-gray-900">식당 / 카페</h3>
              <p className="text-xs text-gray-500 mt-1">옛 방앗간 카페 외 10곳</p>
            </div>
          </div>
        </section>

        {/* 3. 시장 이야기 섹션 */}
        <section id="stories" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Market Stories</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                📖 정성이 담긴 시장 이야기
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* 4. 오늘의 시장 섹션 */}
        <section id="today" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Events & News</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                🎉 오늘의 시장 (야시장 & 공연)
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
