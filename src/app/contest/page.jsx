'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@/lib/auth-client'; // আপনার auth client অনুযায়ী useSession ইমপোর্ট করুন

const BuildingMaterialsStore = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession(); // ইউজার লগইন আছে কিনা চেক করার জন্য

  const [activeCategory, setActiveCategory] = useState('all');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  // Order Form States
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  useEffect(() => {
    setShowWelcomePopup(true);
  }, []);

  const handleCloseWelcome = () => {
    setShowWelcomePopup(false);
  };

  const products = [
    {
      id: 1,
      title: "১ম নম্বর লাল ইট (Auto Bricks)",
      category: "brick",
      price: "৳১২,৫০- / হাজার",
      unitPrice: 12.5,
      unit: "Piece",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
      description: "পাকা ও টেকসই অটো ব্রিকস। ঘরবাড়ি ও বহুতল ভবনের জন্য সেরা।"
    },
    {
      id: 2,
      title: "সিলেট বালু (Coarse Sand)",
      category: "sand",
      price: "৳৫০ / CFT",
      unitPrice: 50,
      unit: "CFT",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
      description: "ঢালাইয়ের জন্য উপযোগী মোটা দানার ভালো মানের সিলেট বালু।"
    },
    {
      id: 3,
      title: "ভোলাগঞ্জ পাথর (৩/৪ ইঞ্চি)",
      category: "stone",
      price: "৳১২০ / CFT",
      unitPrice: 120,
      unit: "CFT",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600",
      description: "ছাদ ও পিলারের শক্তিশালী ঢালাইয়ের জন্য আদর্শ বড় সাইজের পাথর।"
    },
    {
      id: 4,
      title: "ছোট পাথর (১/২ ইঞ্চি)",
      category: "stone",
      price: "৳১১০ / CFT",
      unitPrice: 110,
      unit: "CFT",
      image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=600",
      description: "মেঝে ও হালকা কাস্টিং কাজের জন্য ছোট চিপস পাথর।"
    },
    {
      id: 5,
      title: "রেডিমেড কনক্রিট মিক্স",
      category: "concrete",
      price: "৳৪৫০ / Bag",
      unitPrice: 450,
      unit: "Bag",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=600",
      description: "দ্রুত ও মজবুত গাথুনির জন্য হাই-গ্রেড রেডিমেড কনক্রিট।"
    },
    {
      id: 6,
      title: "ভিটি বালু (Local Sand)",
      category: "sand",
      price: "৳২০ / CFT",
      unitPrice: 20,
      unit: "CFT",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600",
      description: "মাটি ভরাট ও ভিটি বা বেসমেন্ট তৈরির জন্য উপযোগী বালু।"
    }
  ];

  // 🔒 লগইন চেক লজিক সহ অর্ডার হ্যান্ডলার
  const handleOpenOrderModal = (product) => {
    // যদি ইউজার লগইন না করে থাকে তবে লগইন পেজে পাঠাবে
    if (!session) {
      router.push('/sign-in'); // আপনার লগইন পেজের রাউট অনুযায়ী দিন
      return;
    }

    // ইউজার লগইন করা থাকলে অর্ডার মডাল ওপেন হবে
    setSelectedProduct(product);
    setQuantity(1);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedProduct(null);
    setCustomerName('');
    setCustomerPhone('');
    setDeliveryAddress('');
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    alert(`ধন্যবাদ ${customerName}! আপনার ${selectedProduct?.title} অর্ডারটি গ্রহণ করা হয়েছে।`);
    handleCloseOrderModal();
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-amber-50/30 p-2 sm:p-4 lg:p-10 space-y-4 sm:space-y-8 relative font-sans">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-800 via-orange-800 to-stone-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
        <div className="space-y-2 sm:space-y-3 max-w-2xl">
          <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-[10px] sm:text-xs font-semibold backdrop-blur-md uppercase tracking-wider">
            🏗️ Builders Supplies Store
          </span>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            ইট, বালু, পাথর ও কনক্রিট <br className="hidden sm:block"/> সরাসরি সাইটে ডেলিভারি!
          </h1>
          <p className="text-amber-100/80 text-xs sm:text-sm leading-relaxed">
            গুণগত মানসম্পন্ন নির্মাণ সামগ্রী পাইকারি দামে কিনুন।
          </p>
        </div>

        <div className="w-full md:w-auto bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0 text-center space-y-0.5">
          <p className="text-[10px] sm:text-xs text-amber-200 uppercase font-bold">জরুরী প্রয়োজনে কল করুন</p>
          <p className="text-base sm:text-xl font-black text-amber-400">📞 +880 1700-000000</p>
        </div>
      </div>

      {/* Category Filters (Sticky for mobile touch) */}
      <div className="sticky top-0 z-30 bg-amber-50/90 backdrop-blur-md py-2 border-b border-stone-200/80 overflow-x-auto">
        <div className="flex gap-1.5 sm:gap-2 no-scrollbar">
          {[
            { id: 'all', label: 'সকল মালামাল' },
            { id: 'brick', label: '🧱 লাল ইট' },
            { id: 'stone', label: '🪨 পাথর' },
            { id: 'sand', label: '🏖️️ বালু' },
            { id: 'concrete', label: '🏗️ কনক্রিট' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all border-0 cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-amber-800 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product List Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white border border-stone-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Product Image */}
              <div className="relative h-28 sm:h-44 md:h-48 overflow-hidden bg-stone-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 bg-amber-900/80 backdrop-blur-md text-amber-200 text-[8px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-2.5 sm:p-4 space-y-1 sm:space-y-2">
                <h3 className="font-bold text-stone-800 text-xs sm:text-base line-clamp-1">{product.title}</h3>
                <p className="text-[10px] sm:text-xs text-stone-500 leading-tight line-clamp-2 hidden sm:block">
                  {product.description}
                </p>
                <div>
                  <span className="text-[9px] sm:text-xs text-stone-400 block sm:inline">বর্তমান দর:</span>
                  <p className="text-xs sm:text-lg font-black text-amber-800">{product.price}</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="p-2.5 pt-0 sm:p-4 sm:pt-0">
              <button 
                onClick={() => handleOpenOrderModal(product)} 
                className="w-full bg-stone-900 hover:bg-amber-800 active:bg-amber-900 text-white font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs transition-colors border-0 cursor-pointer flex items-center justify-center gap-1 sm:gap-2 shadow-sm"
              >
                🛒 <span className="hidden sm:inline">অর্ডার করুন</span><span className="sm:hidden">অর্ডার</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Welcome Popup */}
      {showWelcomePopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-5 sm:p-6 text-center space-y-3 sm:space-y-4 border border-stone-100 relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={handleCloseWelcome}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-stone-400 hover:text-stone-600 text-lg font-bold cursor-pointer bg-transparent border-0"
            >
              ✕
            </button>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-2xl sm:text-3xl mx-auto shadow-inner">
              🏗️
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-stone-800">স্বাগতম বিল্ডার্স হ্যাভেনে!</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                উন্নত মানের ইট, বালু, পাথর এবং কনক্রিট এখন পাচ্ছেন পাইকারি মূল্যে।
              </p>
            </div>
            <button
              onClick={handleCloseWelcome}
              className="w-full bg-amber-800 hover:bg-amber-900 text-white font-semibold py-2.5 rounded-xl text-xs shadow-md transition-all border-0 cursor-pointer"
            >
              প্রোডাক্ট দেখুন
            </button>
          </div>
        </div>
      )}

      {/* Order Modal */}
      {isOrderModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-md p-4 sm:p-6 space-y-4 relative max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-stone-100 pb-2 sm:pb-3">
              <h3 className="text-base sm:text-lg font-bold text-stone-800">অর্ডার কনফার্ম করুন</h3>
              <button 
                onClick={handleCloseOrderModal} 
                className="text-stone-400 hover:text-stone-600 font-bold border-0 bg-transparent text-xl cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleOrderSubmit} className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 bg-amber-50/50 p-2.5 sm:p-3 rounded-xl border border-amber-100">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title} 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-stone-800">{selectedProduct.title}</h4>
                  <p className="text-xs font-semibold text-amber-800 mt-0.5">{selectedProduct.price}</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  পরিমাণ ({selectedProduct.unit}):
                </label>
                <input 
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full text-xs font-bold bg-stone-50 border border-stone-200 rounded-xl p-2.5 sm:p-3 outline-none focus:ring-2 focus:ring-amber-800"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">আপনার নাম:</label>
                <input 
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2.5 sm:p-3 outline-none focus:ring-2 focus:ring-amber-800"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">মোবাইল নম্বর:</label>
                <input 
                  type="tel"
                  placeholder="017XXXXXXXX"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2.5 sm:p-3 outline-none focus:ring-2 focus:ring-amber-800"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">ডেলিভারি ঠিকানা:</label>
                <textarea 
                  rows="2"
                  placeholder="সাইটের বিস্তারিত ঠিকানা"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2.5 sm:p-3 outline-none focus:ring-2 focus:ring-amber-800"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCloseOrderModal}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 bg-stone-100 hover:bg-stone-200 border-0 cursor-pointer"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-amber-800 hover:bg-amber-900 border-0 cursor-pointer shadow-md"
                >
                  কনফার্ম অর্ডার
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default BuildingMaterialsStore;