'use client';
import React, { useState } from 'react';

const TitlePage = () => {
  const [isSaved, setIsSaved] = useState(false);

  // বইয়ের বিস্তারিত তথ্য
  const bookDetails = {
    title: "The Silent Cosmos",
    subtitle: "A Journey Through Deep Space & Time Exploration",
    author: "Dr. Elena Rostova",
    rating: 4.9,
    reviewsCount: 328,
    pages: 412,
    publishedYear: "2025",
    genre: "Sci-Fi / Astrophysics",
    language: "English",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    description: "An extraordinary narrative exploring the frontiers of outer space, quantum phenomena, and humanity's relentless quest to uncover the secrets of distant galaxies. Perfect for space enthusiasts and deep thinkers.",
    chapters: [
      { id: 1, number: "01", title: "Echoes of the Big Bang", duration: "25 min read" },
      { id: 2, number: "02", title: "Bridges across Dark Matter", duration: "32 min read" },
      { id: 3, number: "03", title: "Singularities and Time Warps", duration: "40 min read" },
      { id: 4, number: "04", title: "The Search for Extraterrestrial Signal", duration: "28 min read" },
      { id: 5, number: "05", title: "Beyond the Event Horizon", duration: "35 min read" },
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 lg:p-10 space-y-8">
      
      {/* 1. Main Showcase Hero Section */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          
          {/* Book Cover Showcase */}
          <div className="relative shrink-0 w-48 sm:w-64 aspect-[2/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
            <img 
              src={bookDetails.coverImage} 
              alt={bookDetails.title} 
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              Featured Title
            </span>
          </div>

          {/* Book Details */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <div>
              <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full mb-2">
                {bookDetails.genre}
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-800 leading-tight">
                {bookDetails.title}
              </h1>
              <p className="text-slate-500 font-medium text-sm sm:text-base mt-1">
                {bookDetails.subtitle}
              </p>
            </div>

            {/* Author & Rating */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
              <span className="font-semibold text-slate-700">By <strong className="text-slate-900">{bookDetails.author}</strong></span>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1 font-bold text-amber-500">
                ★ <span>{bookDetails.rating}</span>
                <span className="text-slate-400 font-normal">({bookDetails.reviewsCount} reviews)</span>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
              {bookDetails.description}
            </p>

            {/* Key Specs Bar */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl max-w-lg border border-slate-100 text-center">
              <div>
                <p className="text-xs text-slate-400 font-medium">Pages</p>
                <p className="text-sm font-bold text-slate-800">{bookDetails.pages}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Published</p>
                <p className="text-sm font-bold text-slate-800">{bookDetails.publishedYear}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Language</p>
                <p className="text-sm font-bold text-slate-800">{bookDetails.language}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer border-0">
                📖 Start Reading
              </button>
              <button 
                onClick={() => setIsSaved(!isSaved)}
                className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer border ${
                  isSaved 
                    ? 'bg-rose-50 text-rose-600 border-rose-200' 
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {isSaved ? '❤️ Saved to Library' : '🤍 Bookmark Title'}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Table of Contents / Chapters */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-lg font-bold text-slate-800">Table of Contents</h2>
              <span className="text-xs font-semibold text-slate-400">{bookDetails.chapters.length} Chapters</span>
            </div>

            <div className="divide-y divide-slate-100">
              {bookDetails.chapters.map((chapter) => (
                <div key={chapter.id} className="py-3.5 flex items-center justify-between hover:bg-slate-50/80 px-2 rounded-xl transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1.5 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {chapter.number}
                    </span>
                    <h3 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {chapter.title}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-slate-400 shrink-0">
                    {chapter.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Author Info & Reading Progress */}
        <div className="space-y-6">
          
          {/* Author Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">About the Author</h2>
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" 
                alt={bookDetails.author}
                className="w-14 h-14 rounded-full object-cover border border-slate-200"
              />
              <div>
                <h3 className="font-bold text-slate-800 text-sm">{bookDetails.author}</h3>
                <p className="text-xs text-slate-400">Astrophysicist & Author</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dr. Elena Rostova has spent over 15 years researching deep space anomalies and has published multiple bestseller science books worldwide.
            </p>
          </div>

          {/* Quick Reading Stats */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 border border-slate-800 rounded-2xl p-6 text-white space-y-3 shadow-sm">
            <h3 className="font-bold text-md">Current Community Interest</h3>
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Active Readers</span>
              <span className="font-bold text-emerald-400">1,420 reading now</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full rounded-full w-[68%]"></div>
            </div>
            <p className="text-xs text-slate-400">
              68% of readers completed this title in under a week.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default TitlePage;