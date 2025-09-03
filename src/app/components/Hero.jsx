// import React from "react";

// const Hero = () => {
//   return (
//     <div className="lg:px-[160px] px-4 md:px-[120px]">
//       <div className="flex flex-col xl:flex-row items-center justify-center pt-3">
//         {/* Left Section */}
//         <div className="flex flex-col gap-[16px] text-center lg:text-left">
//           <h1 className="font-satoshi font-bold text-[25px] md:text-[40px]  xl:text-[55px] leading-[100%] tracking-[0] text-[#141219] ">
//             Choose the Right{" "}
//           </h1>
//           <h1 className="font-satoshi font-bold text-[25px] md:text-[40px]   xl:text-[45px] leading-[100%] tracking-[0] text-[#141219] ">
//             Course for{" "}
//             <span className="relative inline-block">
//               Your Goal
//               <img
//                 src="Vector 2.png"
//                 alt="decoration"
//                 className="absolute left-0 -bottom-2 w-full"
//               />
//             </span>
//           </h1>

//           <p className="font-satoshi font-normal text-[16px] lg:text-[18px] leading-[150%] max-w-[633px] text-[#141219] mx-auto lg:mx-0 px-2.5 lg:px-0 ">
//             Develop essential skills with expert-led courses in AI, ML, data
//             science, and more. Learn at your own pace, anytime
//           </p>

//           {/* Buttons - always row + centered */}
//           <div className="flex flex-row gap-[10px] lg:gap-[20px] pt-[30px] justify-center   lg:justify-normal   pl-2 pr-2 lg:pr-0 ">
//             <div className="font-satoshi rounded-4xl font-semibold text-[18px] leading-[100%] text-[#FFFFFF] bg-[#335EF7] w-[182px] h-[56px] flex items-center justify-center">
//               Join us now
//             </div>

//             <div className="font-satoshi rounded-4xl font-semibold text-[18px] leading-[100%] text-[#335EF7] border border-[#335EF7] w-[182px] h-[56px] flex items-center justify-center">
//               Learn More
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="max-w-[702px] mt-10 lg:mt-0">
//           <img src="hero.png" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";

const Hero = () => {
  return (
    <div className="lg:px-[160px] px-4 md:px-[120px]">
      <div className="flex flex-col lg:flex-row items-center justify-center pt-3 gap-x-[80px]">
        {/* Left Section */}
        <div className="flex flex-col gap-[16px] text-center lg:text-left">
          <h1 className="font-satoshi font-bold text-[25px] md:text-[40px] xl:text-[55px] leading-[100%] tracking-[0] text-[#141219] whitespace-nowrap">
            Choose the Right
          </h1>
          <h1 className="font-satoshi font-bold text-[25px] md:text-[40px] xl:text-[55px] leading-[100%] tracking-[0] text-[#141219] whitespace-nowrap">
            Course for{" "}
            <span className="relative inline-block">
              Your Goal
              <img
                src="Vector 2.png"
                alt="decoration"
                className="absolute left-0 -bottom-2 w-full"
              />
            </span>
          </h1>

          <p className="font-satoshi font-normal text-[16px] lg:text-[18px] leading-[150%] max-w-[633px] text-[#141219] mx-auto lg:mx-0 px-2.5 lg:px-0">
            Develop essential skills with expert-led courses in AI, ML, data
            science, and more. Learn at your own pace, anytime
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-[10px] lg:gap-[20px] pt-[30px] justify-center lg:justify-normal pl-2 pr-2 lg:pr-0">
            <div className="font-satoshi rounded-4xl font-semibold text-[18px] leading-[100%] text-[#FFFFFF] bg-[#335EF7] w-[182px] h-[56px] flex items-center justify-center">
              Join us now
            </div>

            <div className="font-satoshi rounded-4xl font-semibold text-[18px] leading-[100%] text-[#335EF7] border border-[#335EF7] w-[182px] h-[56px] flex items-center justify-center">
              Learn More
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="max-w-[702px] mt-10 lg:mt-0">
          <img src="hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
