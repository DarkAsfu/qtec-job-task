import Image from "next/image";

export default function Companies() {
  return (
    <section
      className="w-full bg-white flex flex-col items-start gap-8 self-stretch"
      style={{ padding: '48px 122px 48px 124px' }}
    >
      <div className="flex flex-col items-start gap-8 w-full">
        <span className="text-[#7C8493] text-[16px] font-epilogue mb-2">Companies we helped grow</span>
        <div className="flex flex-row justify-between items-center gap-16 w-full">
          <Image src="/company/vodafone.png" alt="Vodafone" width={153} height={48} className="object-contain grayscale" />
          <Image src="/company/intel-3.png" alt="Intel" width={82} height={48} className="object-contain grayscale" />
          <Image src="/company/tesla-9 1.png" alt="Tesla" width={182} height={48} className="object-contain grayscale" />
          <Image src="/company/amd-logo-1.png" alt="AMD" width={116} height={48} className="object-contain grayscale" />
          <Image src="/company/talkit 1.png" alt="Talkit" width={108} height={48} className="object-contain grayscale" />
        </div>
      </div>
    </section>
  );
}
