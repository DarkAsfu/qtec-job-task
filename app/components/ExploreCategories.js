import Image from "next/image";

const categories = [
  { name: "Design", jobs: 235, icon: 'pencil' },
  { name: "Sales", jobs: 756, icon: 'pie' },
  { name: "Marketing", jobs: 140, icon: 'megaphone' },
  { name: "Finance", jobs: 325, icon: 'chart' },
  { name: "Technology", jobs: 436, icon: 'chip' },
  { name: "Engineering", jobs: 542, icon: 'settings' },
  { name: "Business", jobs: 211, icon: 'briefcase' },
  { name: "Human Resource", jobs: 346, icon: 'users' },
];

export default function ExploreCategories() {
  return (
    <section className="w-full bg-white">
      <div style={{ padding: '48px 122px 48px 124px' }}>
        <div className="flex items-center justify-between mb-10">
          <h2 className="flex items-center gap-2 font-clash-display text-5xl font-semibold">
            <span>Explore by</span>
            <span style={{ color: '#26A4FF' }}>category</span>
          </h2>
          <a href="#" className="text-[#4640DE] text-[16px] font-semibold font-epilogue flex items-center gap-2 hover:underline">
            Show all jobs <span className="inline-block">→</span>
          </a>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="relative group flex flex-col items-start gap-[32px] p-[32px] transition cursor-pointer bg-white border border-[#D6DDEB] hover:bg-[#4640DE] hover:border-[#4640DE]"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                {cat.icon === 'pencil' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <g clipPath="url(#clip0_4502_1009)">
                      <path d="M6 42.0001H14L40 16.0001C41.0609 14.9393 41.6569 13.5004 41.6569 12.0001C41.6569 10.4998 41.0609 9.06098 40 8.00012C38.9391 6.93925 37.5003 6.34326 36 6.34326C34.4997 6.34326 33.0609 6.93925 32 8.00012L6 34.0001V42.0001Z" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                      <path d="M29 11L37 19" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                      <path d="M24 16L14 6L6 14L16 24" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                      <path d="M14 16L11 19" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                      <path d="M32 24L42 34L34 42L24 32" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                      <path d="M32 34L29 37" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_4502_1009">
                        <rect width="48" height="48" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                )}
                {cat.icon === 'pie' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M14 22C18.4183 22 22 18.4183 22 14C22 9.58172 18.4183 6 14 6C9.58172 6 6 9.58172 6 14C6 18.4183 9.58172 22 14 22Z" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                    <path d="M14 6V14H22" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                    <path d="M18 34V42" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                    <path d="M34 28V42" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                    <path d="M26 26V42" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                    <path d="M42 24V42" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                  </svg>
                )}
                {cat.icon === 'megaphone' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M21.9999 11.764V38.48C21.9993 39.3089 21.7062 40.1111 21.1722 40.7451C20.6382 41.3791 19.8976 41.8043 19.0808 41.9458C18.2641 42.0873 17.4236 41.936 16.7074 41.5186C15.9912 41.1012 15.4453 40.4444 15.1659 39.664L10.8719 27.364M35.9999 26C37.5912 26 39.1174 25.3679 40.2426 24.2426C41.3678 23.1174 41.9999 21.5913 41.9999 20C41.9999 18.4087 41.3678 16.8826 40.2426 15.7574C39.1174 14.6321 37.5912 14 35.9999 14V26ZM10.8719 27.366C9.17437 26.6442 7.7783 25.3581 6.91999 23.7253C6.06168 22.0925 5.79385 20.2134 6.16181 18.4058C6.52976 16.5982 7.51092 14.9733 8.93924 13.806C10.3676 12.6387 12.1553 12.0007 13.9999 12H17.6639C25.8639 12 32.9139 9.532 35.9999 6V34C32.9139 30.468 25.8659 28 17.6639 28H13.9999C12.9252 28.0016 11.8612 27.7859 10.8719 27.366Z" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                  </svg>
                )}
                {cat.icon === 'chart' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M34 18V14C34 12.9391 33.5786 11.9217 32.8284 11.1716C32.0783 10.4214 31.0609 10 30 10H10C8.93913 10 7.92172 10.4214 7.17157 11.1716C6.42143 11.9217 6 12.9391 6 14V26C6 27.0609 6.42143 28.0783 7.17157 28.8284C7.92172 29.5786 8.93913 30 10 30H14M18 38H38C39.0609 38 40.0783 37.5786 40.8284 36.8284C41.5786 36.0783 42 35.0609 42 34V22C42 20.9391 41.5786 19.9217 40.8284 19.1716C40.0783 18.4214 39.0609 18 38 18H18C16.9391 18 15.9217 18.4214 15.1716 19.1716C14.4214 19.9217 14 20.9391 14 22V34C14 35.0609 14.4214 36.0783 15.1716 36.8284C15.9217 37.5786 16.9391 38 18 38ZM32 28C32 29.0609 31.5786 30.0783 30.8284 30.8284C30.0783 31.5786 29.0609 32 28 32C26.9391 32 25.9217 31.5786 25.1716 30.8284C24.4214 30.0783 24 29.0609 24 28C24 26.9391 24.4214 25.9217 25.1716 25.1716C25.9217 24.4214 26.9391 24 28 24C29.0609 24 30.0783 24.4214 30.8284 25.1716C31.5786 25.9217 32 26.9391 32 28Z" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                  </svg>
                )}
                {cat.icon === 'chip' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M17.5 33.5005L25.5 1.50049M33.5 9.50049L41.5 17.5005L33.5 25.5005M9.5 25.5005L1.5 17.5005L9.5 9.50049" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                  </svg>
                )}
                {cat.icon === 'settings' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M37.5005 24.01C31.7815 26.3225 25.6693 27.5075 19.5005 27.5C13.1345 27.5 7.06049 26.26 1.50049 24.01M19.5005 21.5H19.5205M27.5005 9.5V5.5C27.5005 4.43913 27.0791 3.42172 26.3289 2.67157C25.5788 1.92143 24.5614 1.5 23.5005 1.5H15.5005C14.4396 1.5 13.4222 1.92143 12.6721 2.67157C11.9219 3.42172 11.5005 4.43913 11.5005 5.5V9.5H27.5005ZM5.50049 37.5H33.5005C34.5614 37.5 35.5788 37.0786 36.3289 36.3284C37.0791 35.5783 37.5005 34.5609 37.5005 33.5V13.5C37.5005 12.4391 37.0791 11.4217 36.3289 10.6716C35.5788 9.92143 34.5614 9.5 33.5005 9.5H5.50049C4.43962 9.5 3.42221 9.92143 2.67206 10.6716C1.92192 11.4217 1.50049 12.4391 1.50049 13.5V33.5C1.50049 34.5609 1.92192 35.5783 2.67206 36.3284C3.42221 37.0786 4.43962 37.5 5.50049 37.5Z" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                  </svg>
                )}
                {cat.icon === 'briefcase' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M22 4C20.9391 4 19.9217 4.42143 19.1716 5.17157C18.4214 5.92172 18 6.93913 18 8C18 9.06087 18.4214 10.0783 19.1716 10.8284C19.9217 11.5786 20.9391 12 22 12C23.0609 12 24.0783 11.5786 24.8284 10.8284C25.5786 10.0783 26 9.06087 26 8C26 6.93913 25.5786 5.92172 24.8284 5.17157C24.0783 4.42143 23.0609 4 22 4ZM16.3431 2.34315C17.8434 0.842855 19.8783 0 22 0C24.1217 0 26.1566 0.842855 27.6569 2.34315C29.1571 3.84344 30 5.87827 30 8C30 10.1217 29.1571 12.1566 27.6569 13.6569C26.1566 15.1571 24.1217 16 22 16C19.8783 16 17.8434 15.1571 16.3431 13.6569C14.8429 12.1566 14 10.1217 14 8C14 5.87827 14.8429 3.84344 16.3431 2.34315ZM8 12C7.46957 12 6.96086 12.2107 6.58579 12.5858C6.21071 12.9609 6 13.4696 6 14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16C8.53043 16 9.03914 15.7893 9.41421 15.4142C9.78929 15.0391 10 14.5304 10 14C10 13.4696 9.78929 12.9609 9.41421 12.5858C9.03914 12.2107 8.53043 12 8 12ZM3.75736 9.75736C4.88258 8.63214 6.4087 8 8 8C9.5913 8 11.1174 8.63214 12.2426 9.75736C13.3679 10.8826 14 12.4087 14 14C14 15.5913 13.3679 17.1174 12.2426 18.2426C11.1174 19.3679 9.5913 20 8 20C6.4087 20 4.88258 19.3679 3.75736 18.2426C2.63214 17.1174 2 15.5913 2 14C2 12.4087 2.63214 10.8826 3.75736 9.75736ZM36 12C35.4696 12 34.9609 12.2107 34.5858 12.5858C34.2107 12.9609 34 13.4696 34 14C34 14.5304 34.2107 15.0391 34.5858 15.4142C34.9609 15.7893 35.4696 16 36 16C36.5304 16 37.0391 15.7893 37.4142 15.4142C37.7893 15.0391 38 14.5304 38 14C38 13.4696 37.7893 12.9609 37.4142 12.5858C37.0391 12.2107 36.5304 12 36 12ZM31.7574 9.75736C32.8826 8.63214 34.4087 8 36 8C37.5913 8 39.1174 8.63214 40.2426 9.75736C41.3679 10.8826 42 12.4087 42 14C42 15.5913 41.3679 17.1174 40.2426 18.2426C39.1174 19.3679 37.5913 20 36 20C34.4087 20 32.8826 19.3679 31.7574 18.2426C30.6321 17.1174 30 15.5913 30 14C30 12.4087 30.6321 10.8826 31.7574 9.75736ZM22 21.9986C20.4005 21.9986 18.8377 22.4778 17.5132 23.3745C16.2646 24.2197 15.2817 25.3993 14.6753 26.7757L14.1931 32H29.8069L29.3247 26.7757C28.7183 25.3993 27.7354 24.2197 26.4868 23.3745C25.1623 22.4778 23.5995 21.9986 22 21.9986ZM34 32H40V30.0001C40 30.0001 40 30.0002 40 30.0001C39.9999 29.1689 39.7409 28.3582 39.2589 27.681C38.7768 27.0037 38.0957 26.4935 37.3103 26.2211C36.5249 25.9488 35.6742 25.928 34.8763 26.1615C34.4028 26.3001 33.9619 26.5242 33.5741 26.82C33.8523 27.835 34 28.902 34 30V32ZM31.8595 23.1553C31.02 21.9464 29.9607 20.8958 28.7291 20.062C26.7427 18.7173 24.3988 17.9986 22 17.9986C19.6012 17.9986 17.2573 18.7173 15.2709 20.062C14.0393 20.8958 12.98 21.9464 12.1405 23.1553C11.5515 22.799 10.9156 22.5182 10.2473 22.3226C8.65167 21.8555 6.95017 21.8972 5.37933 22.4419C3.8085 22.9865 2.44637 24.007 1.4823 25.3615C0.518228 26.716 0.000121593 28.3373 0 29.9999V34C0 35.1046 0.89543 36 2 36H42C43.1046 36 44 35.1046 44 34V30C43.9999 28.3374 43.4818 26.716 42.5177 25.3615C41.5536 24.007 40.1915 22.9865 38.6207 22.4419C37.0498 21.8972 35.3483 21.8555 33.7527 22.3226C33.0844 22.5182 32.4485 22.799 31.8595 23.1553ZM10.4259 26.82C10.0381 26.5242 9.59718 26.3001 9.12365 26.1615C8.32584 25.928 7.47509 25.9488 6.68967 26.2211C5.90425 26.4935 5.22318 27.0037 4.74115 27.681C4.25914 28.3582 4.00009 29.1688 4 30C4 30 4 30 4 30V32H10V30C10 28.902 10.1477 27.835 10.4259 26.82Z" fill="#4640DE" className="group-hover:fill-white"/>
                  </svg>
                )}
                {cat.icon === 'users' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M19.5 34L18 40L16 42H32L30 40L28.5 34H19.5ZM6 26H42H6ZM10 34H38C39.0609 34 40.0783 33.5786 40.8284 32.8284C41.5786 32.0783 42 31.0609 42 30V10C42 8.93913 41.5783 7.92172 40.8284 7.17157C40.0783 6.42143 39.0609 6 38 6H10C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10V30C6 31.0609 6.42143 32.0783 7.17157 32.8284C7.92172 33.5786 8.93913 34 10 34Z" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"/>
                  </svg>
                )}
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-semibold font-clash-display text-[#25324B] group-hover:text-white">
                  {cat.name}
                </span>
                <span className="text-base font-epilogue text-[#7C8493] group-hover:text-white">
                  {cat.jobs} jobs available
                </span>
              </div>
              
              <div className="mt-auto text-[#5B3DF6] group-hover:text-white">
                <span className="text-xl">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}