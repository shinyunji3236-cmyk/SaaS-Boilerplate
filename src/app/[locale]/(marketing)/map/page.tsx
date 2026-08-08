'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// TypeScript 전역 Window 인터페이스에 kakao 속성 추가 선언
declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapPage() {
  useEffect(() => {
    const initMap = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = document.getElementById('kakao-map');
          const options = {
            center: new window.kakao.maps.LatLng(37.5156, 126.9073),
            level: 3,
          };
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
    <div className="bg-slate-50 min-h-screen py-12">
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
