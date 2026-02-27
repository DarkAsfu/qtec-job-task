export default function Footer() {
  return (
    <footer className="bg-[#232533] text-white pt-16 pb-8 px-31">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap justify-between gap-12 mb-12">
          {/* Logo and description */}
          <div className="min-w-[260px] max-w-[320px]">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="QuickHire Logo" width={32} height={32} className="h-8 w-8" />
              <span className="font-bold text-xl">QuickHire</span>
            </div>
            <p className="text-[#E5E7EB] text-base leading-relaxed">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>
          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-[#E5E7EB]">
              <li>Companies</li>
              <li>Pricing</li>
              <li>Terms</li>
              <li>Advice</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-[#E5E7EB]">
              <li>Help Docs</li>
              <li>Guide</li>
              <li>Updates</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* Get job notifications */}
          <div className="min-w-[320px] max-w-[400px]">
            <h4 className="font-semibold mb-4">Get job notifications</h4>
            <p className="text-[#E5E7EB] text-base mb-4">The latest job news, articles, sent to your inbox weekly.</p>
            <form className="flex gap-2 mb-0">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 rounded-md bg-[#292B38] text-white placeholder-[#B0B3C7] border-none outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-[#5B3DF6] text-white font-semibold hover:bg-[#6C63FF] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-[#35374A] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[#B0B3C7] text-sm">2021 @ QuickHire. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-[#292B38] flex items-center justify-center text-[#B0B3C7] hover:text-white hover:bg-[#4640DE] transition">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#292B38] flex items-center justify-center text-[#B0B3C7] hover:text-white hover:bg-[#4640DE] transition">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4" fill="#232533"/><circle cx="18.5" cy="5.5" r="1.5"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#292B38] flex items-center justify-center text-[#B0B3C7] hover:text-white hover:bg-[#4640DE] transition">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.93.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.23 0 4.64-2.8 5.67-5.47 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58 4.59-.87 8.19-4.52 8.19-8.93 0-5.5-4.46-9.96-9.96-9.96z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#292B38] flex items-center justify-center text-[#B0B3C7] hover:text-white hover:bg-[#4640DE] transition">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-7 19h-3v-8h3v8zm-1.5-9.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 9.27c0 1.1-.9 2-2 2h-14c-1.1 0-2-.9-2-2v-14c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14zm-5-2h-3v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-3v-8h3v1.5c.41-.59 1.09-1.5 2.5-1.5 1.93 0 3.5 1.57 3.5 3.5v4.5z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#292B38] flex items-center justify-center text-[#B0B3C7] hover:text-white hover:bg-[#4640DE] transition">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.91c0 .97-.79 1.76-1.76 1.76h-20.48c-.97 0-1.76-.79-1.76-1.76v-14.91c0-.97.79-1.76 1.76-1.76h20.48c.97 0 1.76.79 1.76 1.76zm-2.5 0c0-.41-.34-.75-.75-.75h-17.5c-.41 0-.75.34-.75.75v14.91c0 .41.34.75.75.75h17.5c.41 0 .75-.34.75-.75v-14.91z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
