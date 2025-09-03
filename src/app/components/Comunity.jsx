// // components/CommunitySection.jsx
// // Left side fixed per your layout + full section for context
// import { CheckCircle } from "lucide-react";

// export default function CommunitySection() {
//   return (
//     <div className="lg:px-[160px] px-4 md:px-[120px]">
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6 grid md:grid-cols-2 gap-18 items-center">
//           {/* LEFT SIDE */}
//           <div className="relative h-[360px] md:h-[420px]">
//             {/* RIGHT/TOP IMAGE PLACEHOLDER (tall) */}
//             <div className="absolute top-2 right-20 md:right-44 lg:right-10 w-[190px] md:w-[220px] h-[250px] md:h-[290px]">
//               {/* background shape */}
//               <div className="absolute inset-0   rounded-t-[80px] rounded-br-[80px] overflow-hidden " />
//               {/* placeholder for your image */}
//               <div className="absolute inset-2 rounded-[24px]   grid place-items-center text-xs md:text-sm ">
//                 <img src="C1.png" alt="" />
//               </div>
//             </div>

//             {/* LEFT/BOTTOM IMAGE PLACEHOLDER */}
//             <div className="absolute left-22  bottom-0 w-[190px] md:w-[220px] h-[230px] md:h-[270px]">
//               {/* background shape */}
//               <div className="absolute inset-0   rounded-tl-[90px] rounded-b-[90px] overflow-hidden " />
//               {/* placeholder for your image */}
//               <div className="absolute inset-2 rounded-[24px]  grid place-items-center text-xs md:text-sm text-gray-500">
//                 <img src="C2.png" alt="" />
//               </div>
//             </div>

//             {/* EXPERT badge — top of LEFT image, parallel to right pic */}
//             <div className="absolute -left-2 md:-left-6 top-[2px] md:top-[6px] bg-white rounded-full shadow px-4 py-2 flex items-center gap-2">
//               <span className="w-7 h-7 rounded-full bg-blue-100 grid place-items-center text-blue-600 text-sm">
//                 ✦
//               </span>
//               <span className="text-gray-700 text-sm font-medium">
//                 Expert Mentors
//               </span>
//             </div>

//             {/* VIDEO badge — bottom of RIGHT pic */}
//             <div className="absolute right-0 md:-right-4 bottom-0 translate-y-2 bg-white rounded-full shadow px-4 py-2 flex items-center gap-2">
//               <span className="w-7 h-7 rounded-full bg-blue-100 grid place-items-center text-blue-600 text-sm">
//                 ▶
//               </span>
//               <span className="text-gray-700 text-sm font-medium">
//                 VIDEO Lessons
//               </span>
//             </div>
//           </div>

//           {/* RIGHT SIDE (title, bullets, button) */}
//           <div>
//             <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
//               Community
//             </span>
//             <h2 className="text-3xl  text-[#141219] md:text-4xl   mt-4 mb-4 max-w-[400px] font-satoshi font-bold text-[48px] leading-[100%] tracking-[0%]">
//               Join Our Student Community
//             </h2>
//             <p className="text-gray-500 mb-7  mt-2  max-w-[621px]">
//               Find study partners, ask questions, and join weekly live lessons
//               on Discord. Connect, practice, and reach fluency faster!
//             </p>

//             <div className="grid grid-cols-2 gap-6 mb-12">
//               {[
//                 "Ask Questions",
//                 "Access to Global Learners",
//                 "Reach Fluency Faster",
//                 "Competitive Compensation",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-2">
//                   <CheckCircle className="w-5 h-5 text-blue-600" />
//                   <span className="text-gray-700 text-sm">{item}</span>
//                 </div>
//               ))}
//             </div>

//             <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700">
//               Join Discord
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// components/CommunitySection.jsx
import { CheckCircle } from "lucide-react";

export default function CommunitySection() {
  return (
    <div className="lg:px-[160px] px-4 md:px-[120px]">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="relative flex justify-center h-[360px] md:h-[440px]">
            {/* RIGHT/TOP IMAGE */}
            <div className="absolute top-0 right-1/4 md:right-24 w-[170px] md:w-[220px] h-[240px] md:h-[290px]">
              <div className="absolute inset-0 rounded-t-[80px] rounded-br-[80px] overflow-hidden" />
              <div className="absolute inset-2 rounded-[24px]">
                <img
                  src="C1.png"
                  alt="Community 1"
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>
            </div>

            {/* LEFT/BOTTOM IMAGE */}
            <div className="absolute bottom-0 left-1/4 md:left-12 w-[170px] md:w-[220px] h-[220px] md:h-[270px]">
              <div className="absolute inset-0 rounded-tl-[90px] rounded-b-[90px] overflow-hidden" />
              <div className="absolute inset-2 rounded-[24px]">
                <img
                  src="C2.png"
                  alt="Community 2"
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>
            </div>

            {/* EXPERT badge */}
            <div className="absolute -left-4 md:left-8 top-2 md:top-16 lg:top-32 bg-white rounded-full shadow px-4 py-2 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-blue-100 grid place-items-center text-blue-600 text-sm">
                ✦
              </span>
              <span className="text-gray-700 text-sm font-medium">
                Expert Mentors
              </span>
            </div>

            {/* VIDEO badge */}
            <div className="absolute right-24 bottom-2 md:bottom-12 lg:bottom-24 bg-white rounded-full shadow px-4 py-2 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-blue-100 grid place-items-center text-blue-600 text-sm">
                ▶
              </span>
              <span className="text-gray-700 text-sm font-medium">
                VIDEO Lessons
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              Community
            </span>
            <h2 className="text-3xl md:text-4xl mt-4 mb-4 max-w-[400px] font-satoshi font-bold text-[#141219] leading-[100%]">
              Join Our Student Community
            </h2>
            <p className="text-gray-500 mb-7 mt-2 max-w-[621px]">
              Find study partners, ask questions, and join weekly live lessons
              on Discord. Connect, practice, and reach fluency faster!
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              {[
                "Ask Questions",
                "Access to Global Learners",
                "Reach Fluency Faster",
                "Competitive Compensation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700">
              Join Discord
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
