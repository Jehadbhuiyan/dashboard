'use client';
import React, { useState } from 'react';

const SalesReportDashboard = () => {
  // সেলস ফিল্টার স্টেট
  const [timeRange, setTimeRange] = useState('This Month');

  // বিল্ডিং ম্যাটেরিয়ালস ভিত্তিক সাম্প্রতিক সেলস ডাটা (বাংলা প্রোডাক্ট নেম সহ)
  const recentSales = [
    { id: "INV-2001", customer: "আব্দুল কারিম", product: "১ম নম্বর লাল ইট (অটো ব্রিকস)", category: "ইট", date: "Oct 24, 2026", amount: "৳১২,৫০০", status: "Completed" },
    { id: "INV-2002", customer: "মেসার্স রফিক কনস্ট্রাকশন", product: "সিলেট মোটা বালু", category: "বালু", date: "Oct 24, 2026", amount: "৳৫,০০০", status: "Processing" },
    { id: "INV-2003", customer: "ইঞ্জিনিয়ার তানভীর", product: "ভোলাগঞ্জ পাথর (৩/৪ ইঞ্চি)", category: "পাথর", date: "Oct 23, 2026", amount: "৳২৪,০০০", status: "Completed" },
    { id: "INV-2004", customer: "সাদেকুল ইসলাম", product: "রেডিমেড কনক্রিট মিক্স", category: "কনক্রিট", date: "Oct 22, 2026", amount: "৳৪,৫০০", status: "Completed" },
    { id: "INV-2005", customer: "হাসান মাহমুদ", product: "লোকাল ভিটি বালু", category: "বালু", date: "Oct 21, 2026", amount: "৳৩,০০০", status: "Cancelled" },
  ];

  return (
    <div className="min-h-screen bg-amber-50/40 p-3 sm:p-6 lg:p-10 space-y-4 sm:space-y-8 font-sans">
      
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-amber-800 via-orange-900 to-stone-900 rounded-2xl p-4 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1 sm:space-y-2">
          <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-md inline-block">
            🏗️ বিল্ডার্স অ্যানালিটিক্স
          </span>
          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">সেলস রিপোর্ট ড্যাশবোর্ড</h1>
          <p className="text-amber-100/80 text-xs sm:text-sm">ইট, বালু, পাথর ও কনক্রিট বিক্রয়ের সামগ্রিক হিসাব ও রিপোর্ট।</p>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="flex-1 md:flex-none bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl px-3 py-2 text-xs sm:text-sm outline-none cursor-pointer hover:bg-white/20 transition-all"
          >
            <option value="Today" className="text-slate-800">আজকে</option>
            <option value="This Week" className="text-slate-800">এই সপ্তাহে</option>
            <option value="This Month" className="text-slate-800">এই মাসে</option>
            <option value="This Year" className="text-slate-800">এই বছরে</option>
          </select>
          <button className="flex-1 md:flex-none bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-4 py-2 sm:py-2.5 shadow-md transition-all rounded-xl text-xs sm:text-sm border-0 cursor-pointer text-center whitespace-nowrap">
            📥 এক্সপোর্ট
          </button>
        </div>
      </div>

      {/* 2. Quick Overview Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        
        {/* Total Revenue */}
        <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider">মোট বিক্রয় (রেভিনিউ)</p>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-sm sm:text-lg">
              💰
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-2xl font-black text-stone-800">৳৪,৯০,০০০</h3>
            <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-1 inline-block">
              ↑ +১৫.৪%
            </span>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider">মোট অর্ডার</p>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center text-sm sm:text-lg">
              🚚
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-2xl font-black text-stone-800">১২৮ টি</h3>
            <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-1 inline-block">
              ↑ +৬.২%
            </span>
          </div>
        </div>

        {/* Average Order Value */}
        <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider">গড় অর্ডার মূল্য</p>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center text-sm sm:text-lg">
              📊
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-2xl font-black text-stone-800">৳৩,৮২৮</h3>
            <span className="text-[10px] sm:text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full mt-1 inline-block">
              → স্বাভাবিক
            </span>
          </div>
        </div>

        {/* Materials Delivered */}
        <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider">মোট সরবরাহ</p>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm sm:text-lg">
              🧱
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-2xl font-black text-stone-800">৩২,৫০০ CFT/পিস</h3>
            <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-1 inline-block">
              ↑ +১৮%
            </span>
          </div>
        </div>

      </div>

      {/* 3. Main Content: Recent Sales & Side Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
        
        {/* Table / Cards Section */}
        <div className="lg:col-span-2 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-stone-800">সাম্প্রতিক ট্রানজেকশনসমূহ</h2>
            <a href="#" className="text-xs sm:text-sm font-bold text-amber-800 hover:underline">সবগুলো দেখুন</a>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block bg-white border border-stone-200 shadow-sm rounded-2xl overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-xs font-bold text-stone-500 uppercase">
                  <th className="p-4">গ্রাহক</th>
                  <th className="p-4">মালামালের বিবরণ</th>
                  <th className="p-4">তারিখ</th>
                  <th className="p-4">মূল্য</th>
                  <th className="p-4">স্ট্যাটাস</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-sm">
                {recentSales.map((sale) => (
                  <tr key={sale.id} className="hover:bg-amber-50/30 transition-colors">
                    <td className="p-4">
                      <p className="font-semibold text-stone-800">{sale.customer}</p>
                      <p className="text-xs text-stone-400">{sale.id}</p>
                    </td>
                    <td className="p-4">
                      <p className="font-medium text-stone-700">{sale.product}</p>
                      <span className="text-[10px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md font-semibold">
                        {sale.category}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-stone-500">{sale.date}</td>
                    <td className="p-4 font-bold text-stone-800">{sale.amount}</td>
                    <td className="p-4">
                      <span className={`inline-block px-2.5 py-1 text-xs font-bold rounded-full ${
                        sale.status === "Completed" ? "bg-emerald-100 text-emerald-700" :
                        sale.status === "Processing" ? "bg-amber-100 text-amber-700" :
                        "bg-rose-100 text-rose-700"
                      }`}>
                        {sale.status === "Completed" ? "ডেলিভার্ড" : sale.status === "Processing" ? "প্রসেসিং" : "বাতিল"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="block md:hidden space-y-3">
            {recentSales.map((sale) => (
              <div key={sale.id} className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm space-y-2.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-stone-800 text-sm">{sale.customer}</h3>
                    <p className="text-[11px] text-stone-400">{sale.id} • {sale.date}</p>
                  </div>
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                    sale.status === "Completed" ? "bg-emerald-100 text-emerald-700" :
                    sale.status === "Processing" ? "bg-amber-100 text-amber-700" :
                    "bg-rose-100 text-rose-700"
                  }`}>
                    {sale.status === "Completed" ? "ডেলিভার্ড" : sale.status === "Processing" ? "প্রসেসিং" : "বাতিল"}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                  <div>
                    <p className="text-xs font-semibold text-stone-700">{sale.product}</p>
                    <span className="text-[10px] text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded font-medium">
                      {sale.category}
                    </span>
                  </div>
                  <p className="font-extrabold text-stone-800 text-sm">{sale.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Goal & Stock Alert */}
        <div className="space-y-4 sm:space-y-6">
          
          {/* Monthly Target Box */}
          <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
            <h3 className="font-bold text-stone-800 text-sm sm:text-base">মাসিক বিক্রয়ের লক্ষ্যমাত্রা</h3>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-stone-500">৳৪,৯০,০০০ / ৳৬,০০,০০০</span>
              <span className="font-extrabold text-amber-800">81.6%</span>
            </div>
            
            <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 to-orange-700 h-full rounded-full w-[81.6%]"></div>
            </div>
            
            <p className="text-[11px] sm:text-xs text-stone-500 leading-normal">
              অক্টোবর মাসের টার্গেট পূরণে আর মাত্র ৳১,১০,০০০ বিক্রয় প্রয়োজন! 🚀
            </p>
          </div>

          {/* Promo or Action Card */}
          <div className="bg-stone-900 text-white shadow-sm rounded-2xl p-4 sm:p-6 space-y-3">
            <h3 className="font-bold text-sm sm:text-base">ইনভেন্টরি অ্যালার্ট 🧱</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              ৩/৪ ইঞ্চি ভোলাগঞ্জ পাথর এবং সিলেট বালুর স্টক প্রায় শেষ। নতুন অর্ডারের আগে স্টক রিফিল করুন।
            </p>
            <button className="w-full bg-amber-700 hover:bg-amber-600 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm transition-colors border-0 cursor-pointer">
              স্টক ম্যানেজ করুন
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SalesReportDashboard;