"use client";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = useSession();

  const btn = (
    <>
      {session?.user ? (
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* মোবাইলে শুধু নাম ডট-ডট (...) আকারে কেটে ছোট হবে যেন জায়গা বাঁচায় */}
          <span className="text-[11px] sm:text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-slate-200/80 truncate max-w-[75px] min-[400px]:max-w-[110px] sm:max-w-none">
            {session.user.name}
          </span>
          
          {/* Logout বাটন */}
          <button
            onClick={() => signOut()}
            className="text-[11px] sm:text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-colors cursor-pointer border-0 shrink-0"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/sign-in"
            className="text-[11px] sm:text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-100 sm:bg-transparent hover:bg-slate-200/70 sm:hover:bg-transparent px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-colors"
          >
            Login
          </Link>
          <Link href="/sign-up">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-[11px] sm:text-xs font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer border-0 shrink-0">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      {/* h-12 (48px) for mobile, sm:h-14 (56px) for tablet/desktop */}
      <header className="mx-auto flex h-12 sm:h-14 max-w-6xl items-center justify-between px-3 sm:px-4">
        
        {/* Left Side: Logo & Links */}
        <div className="flex items-center gap-3 sm:gap-6">
          <Link 
            href="/title" 
            className="text-base sm:text-lg font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent shrink-0"
          >
            JR
          </Link>

          <ul className="flex items-center gap-2.5 sm:gap-6 list-none m-0 p-0">
            <li>
              <Link
                href="/contest"
                className="text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                Contests
              </Link>
            </li>
            <li>
              <Link
                href="/deshbord"
                className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Dashboard
              </Link>
            </li>
            {session?.user && (
              <li>
                <Link
                  href="/profile"
                  className="text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Profile
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="flex items-center shrink-0">
          {btn}
        </div>

      </header>
    </nav>
  );
}