'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapPage() {
  // Statement 1: 지도 로딩 상태 및 에러 상태 관리 State 선언
  const [mapLoaded, setMapLoaded] = useState(false);

  // Statement 2: 카카오 지도 객체를 안전하게 DOM에 바인딩하는 함수 정의
  const renderKakaoMap = () => {
    if (typeof window === 'undefined') return;

    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        const container = document.getElementById('kakao-map-container');
        if (!container) return;

        // Statement 3: 영등포 전통시장 좌표 설정 (위도 37.5156, 경도 126.9073)
        const marketLatLng = new window.kakao.maps.LatLng(37.5156, 126.9073);
        const options = {
          center: marketLatLng,
          level: 3,
        };

        // Statement 4: 지도 인스턴스 및 마커 생성
        const map = new window.kakao.maps.Map(container, options);
        const marker = new window.kakao.maps.Marker({
          position: marketLatLng,
        });
        marker.setMap(map);
        
        // Statement 5: 지도 크기 재조정 이벤트 트리거 (백색 렌더링 방지)
        map.relayout();
        setMapLoaded(true);
      });
    }
  };

  // Statement 6: 스크립트 로드 타이밍 문제 방지를 위한 폴링(Polling) Effect
  useEffect(() => {
    // 이미 로드된 경우 즉시 렌더링
    if (window.kakao && window.kakao.maps) {
      renderKakaoMap();
      return;
    }

    // 100ms마다 window.kakao 객체가 생성되었는지 감시
    const timer = setInterval(() => {
      if (window.kakao && window.kakao.maps) {
        renderKakaoMap();
        clearInterval(timer);
      }
    }, 100);

    // 5초 후 타이머 클리어
    const timeout = setTimeout(() => {
      clearInterval(timer);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Statement 7: 카카오 SDK 스크립트 주입 */}
      <Script
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=4efb8c65236157929a6a6ce2ed634b77&autoload=false"
        strategy="afterInteractive"
        onLoad={renderKakaoMap}
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
          {/* Statement 8: 인라인 스타일로 높이 450px 강제 고정 및 로딩 스피너 레이어 추가 */}
          <div className="lg:col-span-2 rounded-3xl min-h-[450px] overflow-hidden relative shadow-inner border border-gray-300 bg-gray-100">
            {!mapLoaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-100 text-gray-500">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mb-2"></div>
                <p className="text-sm font-medium">카카오 지도를 불러오는 중입니다...</p>
              </div>
            )}
            <div
              id="kakao-map-container"
              style={{ width: '100%', height: '450px', minHeight: '450px' }}
            />
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
