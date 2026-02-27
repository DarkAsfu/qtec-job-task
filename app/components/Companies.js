import Image from "next/image";


export default function Companies() {
  return (
    <section
      className="w-full bg-white flex flex-col items-start gap-8 self-stretch px-4 sm:px-8 md:px-20 lg:px-[124px] py-8 md:py-12 lg:py-[48px]"
    >
      <div className="flex flex-col items-start gap-8 w-full">
        <span className="text-[#7C8493] text-[16px] font-epilogue mb-2">Companies we helped grow</span>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-12 lg:gap-16 w-full">
          <Image src="/company/vodafone.png" alt="Vodafone" width={153} height={48} className="object-contain grayscale max-w-[120px] sm:max-w-[153px]" />
          <Image src="/company/intel-3.png" alt="Intel" width={82} height={48} className="object-contain grayscale max-w-[60px] sm:max-w-[82px]" />
          <Image src="/company/tesla-9 1.png" alt="Tesla" width={182} height={48} className="object-contain grayscale max-w-[100px] sm:max-w-[182px]" />
          <Image src="/company/amd-logo-1.png" alt="AMD" width={116} height={48} className="object-contain grayscale max-w-[80px] sm:max-w-[116px]" />
          <Image src="/company/talkit 1.png" alt="Talkit" width={108} height={48} className="object-contain grayscale max-w-[70px] sm:max-w-[108px]" />
        </div>
      </div>
    </section>
  );
}
