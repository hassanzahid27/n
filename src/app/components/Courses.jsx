// import React from "react";
// import {
//   FaCode,
//   FaPaintBrush,
//   FaChartBar,
//   FaBullhorn,
//   FaBrain,
// } from "react-icons/fa";

// const CoursesSection = () => {
//   return (
//     <div className="px-[160px]">
//       <section className="text-center py-16 bg-[#FFFFFF]">
//         {/* Tag */}
//         <div className="flex items-center justify-center pb-[8px]">
//           <div className="font-satoshi rounded-4xl font-semibold text-[18px] leading-[100%] tracking-[0] bg-[#335EF71A] text-[#335EF7] max-w-[182px] h-[56px] px-[32px] py-[20px]">
//             Our Courses
//           </div>
//         </div>

//         {/* Heading */}
//         <h2 className="text-3xl text-[#141219] mb-[16px] font-satoshi font-bold text-[48px] leading-[100%] tracking-[0]">
//           Browse Popular Categories
//         </h2>

//         {/* Subtitle */}
//         <p className="text-[#141219] max-w-[605px] mx-auto mb-12 font-satoshi font-normal text-[18px] leading-[100%] tracking-[0] text-center">
//           Discover the perfect course from our top-loved selections, designed to
//           help you learn, grow, and succeed
//         </p>

//         {/* Cards */}
//         <div className="flex flex-wrap gap-4    px-2 md:px-4 ">
//           {/* Reusable Card */}
//           {[
//             {
//               icon: <FaPaintBrush size={24} />,
//               title: "UI/UX Designing",
//               courses: 20,
//             },
//             {
//               icon: <FaCode size={24} />,
//               title: "Web Development",
//               courses: 10,
//             },
//             {
//               icon: <FaChartBar size={24} />,
//               title: "Data Visualization",
//               courses: 12,
//             },
//             {
//               icon: <FaBullhorn size={24} />,
//               title: "Digital Marketing",
//               courses: 18,
//             },
//             { icon: <FaBrain size={24} />, title: "AI/ML", courses: 16 },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col items-center justify-between
//              bg-[#F7F7F7] rounded-2xl shadow-md p-6
//              w-[200px] sm:w-[220px] md:w-[220px] lg:w-[220px]
//              h-[260px] text-center"
//             >
//               <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2563EB] text-white mb-4">
//                 {item.icon}
//               </div>
//               <h3 className="font-satoshi font-bold text-lg text-[#141219]">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-gray-500 mb-3">
//                 {item.courses} courses
//               </p>
//               <a
//                 href="#"
//                 className="text-[#2563EB] font-bold text-sm pt-[30px]"
//               >
//                 Learn more
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <button className="mt-10 px-6 py-2 bg-[#2563EB] text-white font-medium rounded-full hover:bg-blue-600 transition">
//           View all
//         </button>
//       </section>
//     </div>
//   );
// };

// export default CoursesSection;

import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaChartBar,
  FaBullhorn,
  FaBrain,
} from "react-icons/fa";

const CoursesSection = () => {
  return (
    <div className="lg:px-[160px] px-4 md:px-[120px]">
      <section className="text-center py-16 bg-[#FFFFFF]">
        {/* Tag */}
        <div className="flex items-center justify-center pb-[8px]">
          <div className="font-satoshi rounded-4xl font-semibold text-[18px] leading-[100%] tracking-[0] bg-[#335EF71A] text-[#335EF7] max-w-[182px] h-[56px] px-[32px] py-[20px]">
            Our Courses
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl text-[#141219] mb-[16px] font-satoshi font-bold text-[48px] leading-[100%] tracking-[0]">
          Browse Popular Categories
        </h2>

        {/* Subtitle */}
        <p className="text-[#141219] max-w-[605px] mx-auto mb-12 font-satoshi font-normal text-[18px] leading-[100%] tracking-[0] text-center">
          Discover the perfect course from our top-loved selections, designed to
          help you learn, grow, and succeed
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {[
            {
              icon: <FaPaintBrush size={24} />,
              title: "UI/UX Designing",
              courses: 20,
            },
            {
              icon: <FaCode size={24} />,
              title: "Web Development",
              courses: 10,
            },
            {
              icon: <FaChartBar size={24} />,
              title: "Data Visualization",
              courses: 12,
            },
            {
              icon: <FaBullhorn size={24} />,
              title: "Digital Marketing",
              courses: 18,
            },
            { icon: <FaBrain size={24} />, title: "AI/ML", courses: 16 },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-between 
             bg-[#F7F7F7] rounded-2xl shadow-md p-6 
             w-full h-[260px] text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2563EB] text-white mb-4">
                {item.icon}
              </div>
              <h3 className="font-satoshi font-bold text-lg text-[#141219]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {item.courses} courses
              </p>
              <a
                href="#"
                className="text-[#2563EB] font-bold text-sm pt-[30px]"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-10 px-6 py-2 bg-[#2563EB] text-white font-medium rounded-full hover:bg-blue-600 transition">
          View all
        </button>
      </section>
    </div>
  );
};

export default CoursesSection;
