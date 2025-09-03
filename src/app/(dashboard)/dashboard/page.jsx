// "use client";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight, Clock, Play } from "lucide-react";

// const coursesContinue = [
//   {
//     id: 1,
//     title: "Website Dev Zero to Hero",
//     subtitle: "General English",
//     desc: "Grammar, Vocabulary And Fluency",
//     time: "1 Hour",
//     img: "card1.png",
//     progress: "w-1/2",
//   },
//   {
//     id: 2,
//     title: "Learn Programming in 30 Days",
//     subtitle: "General English",
//     desc: "Grammar, Vocabulary And Fluency",
//     time: "2 Hours",
//     img: "card2.png",
//     progress: "w-1/3",
//   },
//   {
//     id: 3,
//     title: "Learn Programming in 30 Days",
//     subtitle: "General English",
//     desc: "Grammar, Vocabulary And Fluency",
//     time: "2 Hours",
//     img: "card3.png",
//     progress: "w-1/3",
//   },
// ];

// const coursesLatest = [
//   {
//     id: 1,
//     title: "IOS 13 Swift 5 iOS Development",
//     subtitle: "General English",
//     desc: "Grammar, Vocabulary And Fluency",
//     img: "card4.png",
//     count: 90,
//   },
//   {
//     id: 2,
//     title: "Stunning CSS Design",
//     subtitle: "General English",
//     desc: "Grammar, Vocabulary And Fluency",
//     img: " card5.jpg",
//     count: 50,
//   },
//   {
//     id: 3,
//     title: "Learn Programming in 30 Days",
//     subtitle: "General English",
//     desc: "Grammar, Vocabulary And Fluency",
//     img: " card6.jpg",
//     count: 30,
//   },
//   {
//     id: 4,
//     title: "Modern JavaScript",
//     subtitle: "General English",
//     desc: "Grammar, Vocabulary And Fluency",
//     img: " card7.png",
//     count: 10,
//   },
//   {
//     id: 5,
//     title: "Work From Home Setup",
//     subtitle: "General English",
//     desc: "Grammar, Vocabulary And Fluency",
//     img: " card8.png",
//     count: 10,
//   },
//   {
//     id: 6,
//     title: "Creative Writing",
//     subtitle: "General English",
//     desc: "Grammar, Vocabulary And Fluency",
//     img: " card9.png",
//     count: 10,
//   },
//   {
//     id: 7,
//     title: "Stunning CSS Design",
//     subtitle: "General English",
//     desc: "Grammar, Vocabulary And Fluency",
//     img: " card5.jpg",
//     count: 50,
//   },

//   {
//     id: 8,
//     title: "Learn Programming in 30 Days",
//     subtitle: "General English",
//     desc: "Grammar, Vocabulary And Fluency",
//     time: "2 Hours",
//     img: "card2.png",
//     count: 50,
//   },
// ];

// export default function Dashboard() {
//   return (
//     <div className="px-[32px] space-y-10 bg-gray-50 pb-6">
//       {/* Continue Watching */}
//       <div>
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold text-[#202020]">
//             Continue Watching
//           </h2>
//           <div className="flex gap-2">
//             <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40">
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40">
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Carousel */}
//         <div className="overflow-hidden relative">
//           <div className="flex transition-transform duration-500 gap-4">
//             {coursesContinue.map((course) => (
//               <div
//                 key={course.id}
//                 className="flex w-[500px] bg-white shadow rounded-lg overflow-hidden"
//               >
//                 {/* Image */}
//                 <img
//                   src={course.img}
//                   alt={course.title}
//                   className="w-[240px] h-full object-cover p-[12px] rounded-3xl"
//                 />

//                 {/* Text Content */}
//                 <div className="p-4 flex flex-col justify-between w-full">
//                   <div>
//                     <span className="text-xs rounded-3xl bg-blue-100 text-blue-700 px-2 py-1 ">
//                       GRAMMAR
//                     </span>
//                     <h3 className="text-black font-inter font-medium text-[16px] leading-[100%] tracking-[-0.01em] capitalize mt-4 mb-2">
//                       {course.subtitle}
//                     </h3>
//                     <p className="text-sm text-gray-600">{course.desc}</p>
//                   </div>

//                   {/* Progress Bar */}
//                   <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
//                     <div
//                       className={`${course.progress} h-2 bg-blue-500 rounded-full`}
//                     ></div>
//                   </div>

//                   {/* Time + Continue Button */}
//                   <div className="flex items-center justify-between mt-3">
//                     <span className="flex items-center text-xs text-gray-500 gap-1">
//                       <Clock className="w-4 h-4" /> {course.time}
//                     </span>
//                     <button className="text-sm text-black bg-white border rounded px-3 py-1">
//                       Continue →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Latest Courses */}
//       {/* Latest Courses */}
//       <div>
//         <h2 className="text-lg font-semibold mb-4 text-[#202020]">
//           Latest Courses
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {coursesLatest.map((course) => (
//             <div
//               key={course.id}
//               className="bg-white rounded-lg shadow overflow-hidden"
//             >
//               <img
//                 src={course.img}
//                 alt={course.title}
//                 className="w-full h-40 object-cover p-[12px] rounded-3xl"
//               />
//               <div className="p-4 pt-0">
//                 <div className="flex justify-between items-center">
//                   <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-3xl">
//                     GRAMMAR
//                   </span>
//                   <span className="flex items-center text-xs text-blue-800 gap-1">
//                     <Play className="w-4 h-4" /> {course.count}
//                   </span>
//                 </div>

//                 <h3 className="text-black font-inter font-medium text-[16px] leading-[100%] tracking-[-0.01em] capitalize mt-4 mb-2">
//                   {course.subtitle}
//                 </h3>
//                 <p className="text-sm text-gray-600">{course.desc}</p>

//                 <div className="flex items-center justify-between mt-3">
//                   <div className="flex -space-x-2">
//                     <img
//                       className="w-6 h-6 rounded-full border"
//                       src="1.jpg"
//                       alt="user"
//                     />
//                     <img
//                       className="w-6 h-6 rounded-full border"
//                       src="3.jpg"
//                       alt="user"
//                     />
//                     <img
//                       className="w-6 h-6 rounded-full border"
//                       src="2.jpg"
//                       alt="user"
//                     />
//                     <img
//                       className="w-6 h-6 rounded-full border"
//                       src="4.jpg"
//                       alt="user"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Clock, Play } from "lucide-react";

const coursesContinue = [
  {
    id: 1,
    title: "Website Dev Zero to Hero",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    time: "1 Hour",
    img: "card1.png",
    progress: "w-1/2",
  },
  {
    id: 2,
    title: "Learn Programming in 30 Days",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    time: "2 Hours",
    img: "card2.png",
    progress: "w-1/3",
  },
  {
    id: 3,
    title: "Learn Programming in 30 Days",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    time: "2 Hours",
    img: "card3.png",
    progress: "w-1/3",
  },
];

const coursesLatest = [
  {
    id: 1,
    title: "IOS 13 Swift 5 iOS Development",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    img: "card4.png",
    count: 90,
  },
  {
    id: 2,
    title: "Stunning CSS Design",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    img: "card5.jpg", // removed space
    count: 50,
  },
  {
    id: 3,
    title: "Learn Programming in 30 Days",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    img: "card6.jpg", // removed space
    count: 30,
  },
  {
    id: 4,
    title: "Modern JavaScript",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    img: "card7.png", // removed space
    count: 10,
  },
  {
    id: 5,
    title: "Work From Home Setup",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    img: "card8.png", // removed space
    count: 10,
  },
  {
    id: 6,
    title: "Creative Writing",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    img: "card9.png", // removed space
    count: 10,
  },
  {
    id: 7,
    title: "Stunning CSS Design",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    img: " card5.jpg",
    count: 50,
  },

  {
    id: 8,
    title: "Learn Programming in 30 Days",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    time: "2 Hours",
    img: "card2.png",
    count: 50,
  },
];

export default function Dashboard() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="px-[32px] space-y-10 bg-gray-50 pb-6">
      {/* Continue Watching */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-[#202020]">
            Continue Watching
          </h2>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hidden"
          >
            {coursesContinue.map((course) => (
              <div
                key={course.id}
                className="flex w-[500px] bg-white shadow rounded-lg overflow-hidden flex-shrink-0"
              >
                {/* Image */}
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-[240px] h-full object-cover p-[12px] rounded-3xl"
                />

                {/* Text Content */}
                <div className="p-4 flex flex-col justify-between w-full">
                  <div>
                    <span className="text-xs rounded-3xl bg-blue-100 text-blue-700 px-2 py-1 ">
                      GRAMMAR
                    </span>
                    <h3 className="text-black font-inter font-medium text-[16px] leading-[100%] tracking-[-0.01em] capitalize mt-4 mb-2">
                      {course.subtitle}
                    </h3>
                    <p className="text-sm text-gray-600">{course.desc}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
                    <div
                      className={`${course.progress} h-2 bg-blue-500 rounded-full`}
                    ></div>
                  </div>

                  {/* Time + Continue Button */}
                  <div className="flex items-center justify-between mt-3">
                    <span className="flex items-center text-xs text-gray-500 gap-1">
                      <Clock className="w-4 h-4" /> {course.time}
                    </span>
                    <button className="text-sm text-black bg-white border rounded px-3 py-1">
                      Continue →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Courses */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-[#202020]">
          Latest Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesLatest.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-40 object-cover p-[12px] rounded-3xl"
              />
              <div className="p-4 pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-3xl">
                    GRAMMAR
                  </span>
                  <span className="flex items-center text-xs text-blue-800 gap-1">
                    <Play className="w-4 h-4" /> {course.count}
                  </span>
                </div>

                <h3 className="text-black font-inter font-medium text-[16px] leading-[100%] tracking-[-0.01em] capitalize mt-4 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600">{course.desc}</p>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex -space-x-2">
                    <img
                      className="w-6 h-6 rounded-full border"
                      src="1.jpg"
                      alt="user"
                    />
                    <img
                      className="w-6 h-6 rounded-full border"
                      src="3.jpg"
                      alt="user"
                    />
                    <img
                      className="w-6 h-6 rounded-full border"
                      src="2.jpg"
                      alt="user"
                    />
                    <img
                      className="w-6 h-6 rounded-full border"
                      src="4.jpg"
                      alt="user"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
