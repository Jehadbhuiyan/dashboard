'use client';
import React, { useState } from 'react';
import { useSession } from '@/lib/auth-client'; // সেশন হুক ইমপোর্ট করা হয়েছে


const Profile = () => {

  const {data: session} = useSession(); // ইউজারের সেশন ডেটা
  // ড্যাশবোর্ডের ডাটা অনুযায়ী ব্যবহারকারীর প্রোফাইল State
  const [user, setUser] = useState({
    name: "মেসার্স রফিক কনস্ট্রাকশন",
    role: "মালিক ও প্রধান ব্যবস্থাপক",
    username: "@rafiq_builders",
    email: "rafiq.construction@example.com",
    phone: "+880 1712-345678",
    bio: "বিল্ডিং ম্যাটেরিয়ালস সরবরাহকারী এবং কনস্ট্রাকশন মেটেরিয়ালসের নির্ভরযোগ্য বিশ্বস্ত প্রতিষ্ঠান। ইট, বালু, পাথর ও কনক্রিট পাইকারি ও খুচরা বিক্রয় করা হয়।",
    location: "ঢাকা, বাংলাদেশ",
    joinedDate: "জানুয়ারি ২০২৪",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser({ ...formData });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-amber-50/40 p-3 sm:p-6 lg:p-10 space-y-4 sm:space-y-8 font-sans">
      
      {/* 1. Profile Header / Banner Card */}
      <div className="bg-white border border-stone-200/80 rounded-2xl shadow-sm overflow-hidden">
        {/* Top Cover Banner */}
        <div className="h-28 sm:h-44 md:h-52 bg-gradient-to-r from-amber-800 via-orange-900 to-stone-900 relative"></div>

        {/* Profile Details Container */}
        <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-0 relative flex flex-col sm:flex-row items-center sm:items-end justify-between gap-3 sm:gap-4 -mt-14 sm:-mt-16 md:-mt-20">
          
          {/* Avatar and Basic Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3 sm:gap-5 text-center sm:text-left w-full sm:w-auto">
            <div className="relative">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-white shadow-md object-cover bg-white shrink-0"
              />
            </div>
            <div className="sm:mb-2 space-y-0.5">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-800 tracking-tight">{user.name}</h1>
              <p className="text-xs sm:text-sm font-semibold text-amber-800">{user.role} • {session?.user ? session.user.email : formData.email} </p>
            </div>
          </div>

          {/* Action Button */}
        
          <div className="w-full sm:w-auto sm:mb-2 pt-1 sm:pt-0">
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="w-full sm:w-auto bg-amber-800 hover:bg-amber-900 active:bg-stone-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer border-0 flex items-center justify-center gap-2"
            >
              <span>{isEditing ? '✕ বাতিল করুন' : '✏️ প্রোফাইল এডিট করুন'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        
        {/* Left Column: Personal Information & Details */}
        <div className="lg:col-span-1 space-y-4 sm:space-y-6">
          <div className="bg-white border border-stone-200/80 rounded-2xl p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-stone-800 border-b border-stone-100 pb-2.5">প্রতিষ্ঠান ও বায়ো</h2>
            
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {user.bio}
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-stone-600">
              <div className="flex items-center gap-2.5">
                <span className="text-stone-400 text-base">📧</span>
                <span className="font-medium text-stone-700 truncate">{session?.user ? session.user.email : formData.email} </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-stone-400 text-base">📞</span>
                <span className="font-medium text-stone-700">{user.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-stone-400 text-base">📍</span>
                <span className="font-medium text-stone-700">{user.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-stone-400 text-base">📅</span>
                <span className="font-medium text-stone-700">যুক্ত হয়েছেন: {user.joinedDate}</span>
              </div>
            </div>
          </div>

          {/* Business Categories / Material Types */}
          <div className="bg-white border border-stone-200/80 rounded-2xl p-4 sm:p-6 shadow-sm space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-stone-800 border-b border-stone-100 pb-2.5">সরবরাহকৃত পণ্যসমূহ</h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {["লাল ইট (অটো ব্রিকস)", "সিলেট বালু", "ভোলাগঞ্জ পাথর", "রেডিমেড কনক্রিট", "ভিটি বালু"].map((item, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 bg-amber-100/70 text-amber-900 rounded-lg text-[11px] sm:text-xs font-semibold hover:bg-amber-200 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Activity Stats & Edit Profile Form */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          
          {/* Dashboard Stats Linked Overview */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div className="bg-white border border-stone-200/80 rounded-2xl p-3 sm:p-5 text-center shadow-sm">
              <p className="text-lg sm:text-2xl font-black text-amber-800">৳৪,৯০,০০০</p>
              <p className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider mt-0.5 sm:mt-1">মোট বিক্রয়</p>
            </div>
            <div className="bg-white border border-stone-200/80 rounded-2xl p-3 sm:p-5 text-center shadow-sm">
              <p className="text-lg sm:text-2xl font-black text-orange-700">১২৮ টি</p>
              <p className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider mt-0.5 sm:mt-1">মোট অর্ডার</p>
            </div>
            <div className="bg-white border border-stone-200/80 rounded-2xl p-3 sm:p-5 text-center shadow-sm">
              <p className="text-lg sm:text-2xl font-black text-emerald-600">81.6%</p>
              <p className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider mt-0.5 sm:mt-1">টার্গেট পূরণ</p>
            </div>
          </div>

          {/* Account Settings Form View */}
          <div className="bg-white border border-stone-200/80 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-5">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="text-base sm:text-lg font-bold text-stone-800">অ্যাকাউন্ট ও প্রতিষ্ঠানের বিবরণ</h2>
              <span className="text-[10px] sm:text-xs bg-amber-50 text-amber-800 font-semibold px-2 py-1 rounded-md">
                {isEditing ? 'এডিটিং মোড' : 'দেখা হচ্ছে'}
              </span>
            </div>
            
            <form className="space-y-3 sm:space-y-4" onSubmit={handleSave}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-stone-600 uppercase mb-1">নাম / প্রতিষ্ঠানের নাম</label>
                  <input 
                    type="text" 
                    name="name"
                    disabled={!isEditing}
                    value={formData.name} 
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 sm:py-2.5 bg-stone-50 disabled:bg-stone-100/70 border border-stone-200 rounded-xl text-xs sm:text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all disabled:text-stone-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-stone-600 uppercase mb-1">ইউজারনেম</label>
                  <input
                    type="text" 
                    name="username"
                    disabled={!isEditing}
                    value={session?.user ? session.user.name : formData.username} 
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 sm:py-2.5 bg-stone-50 disabled:bg-stone-100/70 border border-stone-200 rounded-xl text-xs sm:text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all disabled:text-stone-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-stone-600 uppercase mb-1">ইমেইল এড্রেস</label>
                  <input 
                    type="email" 
                    name="email"
                    disabled={!isEditing}
                    value={session?.user ? session.user.email : formData.email} 
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 sm:py-2.5 bg-stone-50 disabled:bg-stone-100/70 border border-stone-200 rounded-xl text-xs sm:text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all disabled:text-stone-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-stone-600 uppercase mb-1">মোবাইল নম্বর</label>
                  <input 
                    type="text" 
                    name="phone"
                    disabled={!isEditing}
                    value={formData.phone} 
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 sm:py-2.5 bg-stone-50 disabled:bg-stone-100/70 border border-stone-200 rounded-xl text-xs sm:text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all disabled:text-stone-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-stone-600 uppercase mb-1">বায়ো / বিবরণ</label>
                <textarea 
                  rows={3} 
                  name="bio"
                  disabled={!isEditing}
                  value={formData.bio} 
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2 sm:py-2.5 bg-stone-50 disabled:bg-stone-100/70 border border-stone-200 rounded-xl text-xs sm:text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all disabled:text-stone-500 resize-none"
                />
              </div>

              {isEditing && (
                <div className="flex justify-end pt-2">
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-sm transition-colors cursor-pointer border-0"
                  >
                    পরিবর্তন সংরক্ষণ করুন
                  </button>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;