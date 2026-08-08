'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function MapPage() {
  // Statement 1: 컴포넌트 마운트 시 카카오맵 초기화 로직을 수행하는 Side-Effect 훅 선언
  useEffect(() => {
    const initMap = () => {
      // Statement 2: window 객체에 kakao SDK가 정상 로드되었는지 조건문 검사
      if (window.kakao && window.kakao.maps) {
        // Statement 3: 카카오맵 API 객체를 비동기로 로딩
        window.kakao.maps.load(() => {
          // Statement 4: 지도가 들어갈 DOM 엘리먼트 가져오기
          const container = document.getElementById('kakao-map');

          // Statement 5: 영등포 전통시장 좌표(위도, 경도) 및 확대 레벨 옵션 설정
          const options = {
            center: new window.kakao.maps.LatLng(37.5156, 126.9073),
            level: 3,
          };

          // Statement 6: 지도를 컨테이너에 생성 및 인스턴스화
          const map = new window.kakao.maps.Map(container, options);

          // Statement 7: 시장 위치를 가리키는 마커 생성 및 지도에 핀 꽂기
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
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Statement 8: Next.js Script 컴포넌트를 통해 카카오 SDK 비동기 호출 (appkey 구문에 API 키 적용) */}
      <Script
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=4efb8c65236157929a6a6ce2ed634b77&autoload=false"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
              const container = document.getElementById('kakao-map');
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

      {/* Statement 9: 화면 레이아웃 및 카카오맵 지도가 렌더링될 DOM 영역 정의 */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Directions & Map</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
            📍 영등포 전통시장 오시는 길 & 추천 코스 지도
          </h1>
          <p className="text-gray-600 mt-2">영등포 전통시장으로 오시는 길과 실시간 위치, 테마별 추천 탐방 코스를 확인하세요.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 rounded-3xl min-h-[450px] overflow-hidden relative shadow-inner border border-gray-300 bg-white">
            <div id="kakao-map" style={{ width: '100%', height: '450px' }} />
          </div>

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
