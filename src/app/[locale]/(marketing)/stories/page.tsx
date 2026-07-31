export default function StoriesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Market Stories</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
            📖 시장 이야기 (점포 스토리)
          </h1>
          <p className="text-gray-600 mt-2">전통시장 상인분들의 정성 가득한 이야기와 스토리를 들려드립니다.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80')" }} />
            <div className="p-6">
              <span className="text-xs font-bold text-amber-600">30년 전통 · 맛집</span>
              <h3 className="font-bold text-xl text-gray-900 mt-2">매일 아침 직접 뽑는 가마솥 할머니 떡집</h3>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                새벽 4시부터 고소한 떡 냄새로 시장을 깨우는 할머니의 정성 어린 수제 떡 이야기.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80')" }} />
            <div className="p-6">
              <span className="text-xs font-bold text-amber-600">청년상인 · 카페</span>
              <h3 className="font-bold text-xl text-gray-900 mt-2">옛 방앗간의 변신, 감성 레트로 카페</h3>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                아버지의 기름집을 개조해 전통 곡물 로스팅 음료를 선보이는 젊은 상인의 도전.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer">
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80')" }} />
            <div className="p-6">
              <span className="text-xs font-bold text-amber-600">신선정육 · 상점</span>
              <h3 className="font-bold text-xl text-gray-900 mt-2">신선함으로 승부하는 2대째 축산 상점</h3>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                좋은 고기만 고집하는 고집스러운 사장님의 정직한 상인 철학.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
