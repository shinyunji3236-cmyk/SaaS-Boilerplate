export default function StoresPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Store Directory</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
            🏪 점포별 영업 정보
          </h1>
          <p className="text-gray-600 mt-2">시장 내 위치한 카테고리별 상점 정보를 쉽게 확인해 보세요.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-all cursor-pointer">
            <div className="text-4xl mb-3">🍞</div>
            <h3 className="font-bold text-xl text-gray-900">떡 / 제과</h3>
            <p className="text-xs text-gray-500 mt-2">가마솥 할머니 떡집 외 12곳</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-all cursor-pointer">
            <div className="text-4xl mb-3">🥩</div>
            <h3 className="font-bold text-xl text-gray-900">정육 / 수산</h3>
            <p className="text-xs text-gray-500 mt-2">신선 축산 유통 외 8곳</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-all cursor-pointer">
            <div className="text-4xl mb-3">🍎</div>
            <h3 className="font-bold text-xl text-gray-900">청과 / 야채</h3>
            <p className="text-xs text-gray-500 mt-2">수원 상회 외 15곳</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-all cursor-pointer">
            <div className="text-4xl mb-3">☕</div>
            <h3 className="font-bold text-xl text-gray-900">식당 / 카페</h3>
            <p className="text-xs text-gray-500 mt-2">옛 방앗간 카페 외 10곳</p>
          </div>
        </div>
      </div>
    </div>
  );
}
