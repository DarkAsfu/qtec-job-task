import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-transparent z-30 relative h-[78px] flex items-center">
      <div className="mx-auto flex items-center justify-between px-31 w-full h-full">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="QuickHire Logo" width={32} height={32} className="h-8 w-8" />
            <span
              className="font-[ClashDisplay-Semibold] text-[20px] text-[#25324B] tracking-tight"
              style={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 600 }}
            >
              QuickHire
            </span>
          </div>
          <nav className="flex gap-8">
            <Link
              href="#"
              className="transition text-[#515B6F] font-[Epilogue] text-[16px] font-medium leading-[160%] hover:text-[#4640DE]"
              style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 500 }}
            >
              Find Jobs
            </Link>
            <Link
              href="#"
              className="transition text-[#515B6F] font-[Epilogue] text-[16px] font-medium leading-[160%] hover:text-[#4640DE]"
              style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 500 }}
            >
              Browse Companies
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-0 ml-8">
          <Link
            href="#"
            className="px-0 py-0 text-[#4640DE] font-bold font-[Epilogue] text-[16px] mr-8 hover:underline"
            style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 700 }}
          >
            Login
          </Link>
          <div className="h-8 w-px bg-[#E0E0E0] mx-2" />
          <Link
            href="#"
            className="px-7 py-3 bg-[#5B3DF6] text-white font-bold font-[Epilogue] text-[18px] rounded-[4px] shadow hover:bg-[#3d28b0] transition border border-[#5B3DF6]"
            style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 700 }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
