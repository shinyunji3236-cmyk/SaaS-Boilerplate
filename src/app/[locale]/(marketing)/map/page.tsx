'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function MapPage() {
  // Statement 1: 브라우저에 화면이 그려진 직후 실행할 지도 초기화 Side-Effect 선언
  useEffect(() => {
    const initMap = () => {
      // Statement 2: 카카오 지도 SDK 객체가 전역 window에 불러와졌는지 조건문으로 검사
      if (window.kakao && window.kakao.maps) {
        // Statement 3: 카카오 지도 API 모듈을 비동기로 실행
        window.kakao.maps.load(() => {
          // Statement 4: 지도가 렌더링될 DOM 엘리먼트('kakao-map') 탐색
          const container = document.getElementById('kakao-map');

          // Statement 5: 지도 중심 좌표(영등포 전통시장 위도 37.5156, 경도 126.9073) 및 줌 레벨 설정 객체 생성
          const options = {
            center: new window.kakao.maps.LatLng(37.5156, 126.9073),
            level: 3,
          };

          // Statement 6: 탐색한 DOM 컨테이너에 카카오 지도 인스턴스 생성
          const map = new window.kakao.maps.Map(container, options);

          // Statement 7: 시장 위치를 나타낼 좌표 객체 생성
          const markerPosition = new window.kakao.maps.LatLng(37.5156, 126.9073);

          // Statement 8: 지도 위에 꽂을 마커 객체 생성
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });

          // Statement 9: 생성된 마커를 지도 위에 레이어로 바인딩하여 바깥으로 출력
          marker.setMap(map);
        });
      }
    };

    // Statement 10: 스크립트가 이미 로드된 상태라면 지도 초기화 함수 즉시 실행
    if (window.kakao && window.kakao.maps) {
      initMap();
    }
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Statement 11: 40번 줄의 구문 오류를 삭제하고 Script 태그의 appkey 파라미터 위치에 API 키 직접 주입 */}
      <Script
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=4efb8c65236157929a6a6ce2ed634b77&autoload=false"
        strategy="afterInteractive"
        onLoad={() => {
          // Statement 12: 외부 스크립트 로드 완료 시 콜백 내부에서 지도 객체 초기화 수행
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

      {/* Statement 13: 메인 안내 레이아웃 트리를 화면에 반환 */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Directions & Map</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
            📍 영등포 전통시장 오시는 길 & 추천 코스 지도
          </h1>
          <p className="text-gray-600 mt-2">영등포 전통시장으로 오시는 길과 실시간 위치, 테마별 추천 탐방 코스를 확인하세요.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Statement 14: 카카오 지도 객체가 그려지는 id="kakao-map" 영역 정의 */}
          <div className="lg:col-span-2 rounded-3xl min-h-[450px] overflow-hidden relative shadow-inner border border-gray-300 bg-white">
            <div id="kakao-map" style={{ width: '100%', height: '450px' }} />
          </div>

          {/* Statement 15: 추천 코스 정보를 보여주는 우측 카드 레이아웃 정의 */}
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
