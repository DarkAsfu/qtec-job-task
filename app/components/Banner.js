"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Banner() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build query string
    const params = new URLSearchParams();
    if (search.trim()) params.append("search", search.trim());
    if (location.trim()) params.append("location", location.trim());
    router.push(`/job-listings${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <section className="relative w-full bg-[#F8F8FD] overflow-hidden pt-24 md:pt-16 pb-0 min-h-[500px] md:min-h-[700px] flex items-center -mt-20 md:-mt-20">
      {/* Pattern background */}
      <img src="/Pattern.png" alt="Pattern" width="860" height="794" className="absolute right-0 top-0 w-[860px] h-[794px] opacity-60 z-0 select-none pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-31 w-full">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-full md:max-w-[600px] z-10 text-center md:text-left">
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] leading-[1.1] font-semibold text-[#25324B] mb-6" style={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 600 }}>
            Discover <br className="hidden sm:block" /> more than <br className="hidden sm:block" />
            <span className="text-[#26A4FF] relative inline-block" style={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 600 }}>
              5000+ Jobs
            </span>
          </h1>
          
          {/* Search Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center bg-white rounded-[12px] mb-3 font-epilogue w-full max-w-full lg:max-w-[900px] xl:max-w-[1100px] mx-auto shadow-lg px-2 py-2 md:p-4"
            style={{
              boxShadow: `0 79px 128px 0 rgba(192,192,192,0.09), 0 28.836px 46.722px 0 rgba(192,192,192,0.06), 0 13.999px 22.683px 0 rgba(192,192,192,0.05), 0 6.863px 11.119px 0 rgba(192,192,192,0.04), 0 2.714px 4.397px 0 rgba(192,192,192,0.03)`
            }}
          >
            <div className="flex items-center flex-[2] gap-2 mb-2 sm:mb-0 min-w-0">
              <svg width="20" height="20" fill="none" stroke="#7C8493" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full min-w-[200px] md:min-w-[320px] lg:min-w-[400px] xl:min-w-[500px] bg-transparent outline-none text-[16px] font-epilogue text-[#25324B] placeholder-[#7C8493]"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex items-center flex-[1.2] gap-2 border-t sm:border-t-0 sm:border-l border-[#E0E0E0] pl-0 sm:pl-4 pt-2 sm:pt-0 min-w-0">
              <svg width="20" height="20" fill="none" stroke="#7C8493" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 10.5a8.38 8.38 0 01-1.9.8 4.48 4.48 0 00-7.6 0A8.38 8.38 0 013 10.5C3 6.36 7.03 3 12 3s9 3.36 9 7.5z"/>
                <circle cx="12" cy="10.5" r="2.5"/>
              </svg>
              <input
                type="text"
                placeholder="Florence, Italy"
                className="w-full min-w-[120px] md:min-w-[180px] lg:min-w-[220px] bg-transparent outline-none text-[16px] font-epilogue text-[#25324B] placeholder-[#7C8493]"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />
            </div>
            
            <button 
              type="submit" 
              className="flex-shrink-0 bg-[#5B3DF6] text-white font-epilogue font-bold text-[16px] rounded-[8px] px-7 py-3 mt-2 sm:mt-0 sm:ml-2 hover:bg-[#3d28b0] transition whitespace-nowrap"
            >
              Search my job
            </button>
          </form>
          
          <div className="text-[#7C8493] text-[14px] font-epilogue mt-2">
            Popular : <span className="font-medium">UI Designer, UX Researcher, Android, Admin</span>
          </div>
        </div>
        
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end items-end relative mt-8 md:mt-0 h-[280px] sm:h-[350px] md:h-[397px] lg:h-[707px] w-full">
          <Image 
            src="/849d976651c585cf41e864d6b53eba0a93aec63f.png" 
            alt="Banner Person" 
            width={501} 
            height={707} 
            className="w-[220px] sm:w-[300px] md:w-[400px] lg:w-[501px] h-[220px] sm:h-[350px] md:h-[397px] lg:h-[707px] object-bottom object-contain select-none pointer-events-none" 
            priority 
          />
        </div>
      </div>
    </section>
  );
}