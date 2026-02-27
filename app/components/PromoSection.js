import Image from 'next/image'

export default function PromoSection () {
  return (
    <div className='px-31 bg-white pb-[72px]'>
      <section className='w-full flex items-center justify-center min-h-[414px] relative overflow-hidden'>
        {/* SVG Background */}
        <svg
          className="absolute left-0 top-0 w-full h-full z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1192 380"
          fill="none"
        >
          <path d="M0 63.5V414H999.712L1192 319.5V0H128.706L0 63.5Z" fill="#4640DE"/>
        </svg>
        {/* Left Side: Text Content */}
        <div className='flex flex-col justify-center pl-16 pr-8 py-16 w-1/2 z-10 relative'>
          <h2
            className="mb-4 text-white font-clash-display text-[48px] font-semibold leading-[110%]"
          >
            Start posting<br />jobs today
          </h2>
          <p
            className="mb-8 text-white font-epilogue text-[16px] font-medium leading-[160%]"
          >
            Start posting jobs for only $10.
          </p>
          <a
            href="#"
            className="max-w-max flex items-center justify-center gap-2.5 px-6 py-3 bg-white text-[#4640DE] text-center font-epilogue text-[16px] font-bold leading-[160%] rounded-md shadow transition hover:bg-gray-100"
          >
            Sign Up For Free
          </a>
        </div>
        {/* Right Side: Dashboard Image */}
        <div className='w-1/2 flex flex-col pr-8 relative z-10 h-full'>
          <div className="flex flex-grow items-end justify-end h-full w-full">
            <Image
              src='/dashboard.png'
              alt='Dashboard Preview'
              width={600}
              height={350}
              className='shadow-lg border border-white mt-11'
              style={{maxWidth: '100%', height: 'auto'}}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
