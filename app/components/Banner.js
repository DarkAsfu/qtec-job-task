import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full bg-[#F8F8FD] overflow-hidden pt-16 pb-0 min-h-[700px] flex items-center -mt-12 md:-mt-20">
      {/* Pattern background */}
      <img src="/Pattern.png" alt="Pattern" width="860" height="794" className="absolute right-0 top-0 w-[860px] h-[794px] opacity-60 z-0 select-none pointer-events-none" aria-hidden="true" />
      <div className="relative z-10  mx-auto flex flex-col md:flex-row items-center justify-between px-31 w-full">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-[600px] z-10">
          <h1 className="text-[56px] md:text-[72px] leading-[1.1] font-semibold text-[#25324B] mb-6" style={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 600 }}>
            Discover <br /> more than <br />
            <span className="text-[#26A4FF] relative inline-block" style={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 600 }}>
              5000+ Jobs
              <svg className="absolute left-0 -bottom-2 w-full h-4" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 15 C80 25, 220 0, 298 15" stroke="#26A4FF" strokeWidth="6" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="font-epilogue text-[#7C8493] text-[20px] leading-[1.6] mb-8">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>
          {/* Search Bar */}
          <form
            className="flex items-center justify-center bg-white rounded-[12px] mb-3 font-epilogue"
            style={{
              width: '852px',
              padding: '16px',
              boxShadow: `0 79px 128px 0 rgba(192,192,192,0.09), 0 28.836px 46.722px 0 rgba(192,192,192,0.06), 0 13.999px 22.683px 0 rgba(192,192,192,0.05), 0 6.863px 11.119px 0 rgba(192,192,192,0.04), 0 2.714px 4.397px 0 rgba(192,192,192,0.03)`
            }}
          >
            <div className="flex items-center flex-1 gap-2">
              <svg width="20" height="20" fill="none" stroke="#7C8493" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" placeholder="Job title or keyword" className="flex-1 bg-transparent outline-none text-[16px] font-epilogue text-[#25324B] placeholder-[#7C8493]" />
            </div>
            <div className="flex items-center flex-1 gap-2 border-l border-[#E0E0E0] pl-4">
              <svg width="20" height="20" fill="none" stroke="#7C8493" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 01-1.9.8 4.48 4.48 0 00-7.6 0A8.38 8.38 0 013 10.5C3 6.36 7.03 3 12 3s9 3.36 9 7.5z"/><circle cx="12" cy="10.5" r="2.5"/></svg>
              <input type="text" placeholder="Florence, Italy" className="flex-1 bg-transparent outline-none text-[16px] font-epilogue text-[#25324B] placeholder-[#7C8493]" />
            </div>
            <button type="submit" className="bg-[#5B3DF6] text-white font-epilogue font-bold text-[16px] rounded-[8px] px-7 py-3 ml-2 hover:bg-[#3d28b0] transition">Search my job</button>
          </form>
          <div className="text-[#7C8493] text-[14px] font-epilogue mt-2">
            Popular : <span className="font-medium">UI Designer, UX Researcher, Android, Admin</span>
          </div>
        </div>
        {/* Right: Banner Image */}
        <div className="flex-1 flex justify-end items-end relative mt-12 md:mt-0 h-[397px] md:h-[707px]">
          <Image src="/849d976651c585cf41e864d6b53eba0a93aec63f.png" alt="Banner Person" width={501} height={707} className="w-[400px] h-[397px] md:w-[501px] md:h-[707px] object-bottom object-contain select-none pointer-events-none" priority />
         
        </div>
      </div>
    </section>
  );
}