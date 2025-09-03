// "use client";
// import React, { useState } from "react";

// const Frequently = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "What is the admission process?",
//       answer: (
//         <>
//           The admission process for Genoa Entrepreneurship School includes
//           completing an online application, and attending interviews.{" "}
//           <a href="#" className="text-[#43AA13] underline">
//             Visit page
//           </a>
//         </>
//       ),
//     },
//     {
//       question: "How can I apply?",
//       answer: "You can apply through our online portal.",
//     },
//     {
//       question: "What is the duration of the program?",
//       answer: "The program typically lasts 6 months.",
//     },
//     {
//       question: "What is the cost of attending?",
//       answer: "The cost varies depending on scholarships and aid.",
//     },
//     {
//       question: "Does Genoa ES offer financial aid or scholarships?",
//       answer: "Yes, Genoa ES offers both need-based and merit scholarships.",
//     },
//     {
//       question: "What sets Genoa ES apart from other programs?",
//       answer: "Our hands-on approach and global network of mentors.",
//     },
//   ];

//   return (
//     <div className="lg:px-[160px] px-4 md:px-[120px]">
//       <div className="  ">
//         <span className="bg-blue-100 text-blue-600 px-4 py-2  rounded-full text-sm font-medium">
//           FAQs
//         </span>
//         <p class="font-satoshi font-bold text-[48px] leading-[100%] mt-8 tracking-[0%] max-w-[502px] text-[#141219]">
//           Frequently asked questions
//         </p>

//         <div className="grid md:grid-cols-2 grid-cols-1 gap-28 border-gray-300 mt-8 ">
//           {/* Left text */}
//           <div className="space-y-4 max-w-[390px] text-[#202020] max-w-[550px] roboto font-normal text-[24px] leading-[32px] tracking-[0]">
//             <p>
//               Find quick solutions to common queries and get the most out of
//               your learning experience
//             </p>
//             <div className="flex  mt-12">
//               <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700">
//                 View more questions
//               </button>
//             </div>
//           </div>

//           {/* FAQ section */}
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div key={index} className="border-t border-gray-200 pt-3">
//                 <div
//                   className="flex justify-between items-center cursor-pointer"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   <h3 className="text-[#000000] roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
//                     {faq.question}
//                   </h3>
//                   <span className="text-xl">
//                     {openIndex === index ? "−" : "+"}
//                   </span>
//                 </div>
//                 {openIndex === index && (
//                   <p className="mt-2 text-[#000000] roboto font-normal text-[18px] leading-[24px] tracking-[0] align-middle">
//                     {faq.answer}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Frequently;

"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // ✅ using lucide-react for chevron icon

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I access the courses anytime, anywhere?",
      answer: (
        <>
          The admission process for Genoa Entrepreneurship School includes
          completing an online application, and attending interviews.{" "}
          <a href="#" className="text-[#43AA13] underline">
            Visit page
          </a>
        </>
      ),
    },
    {
      question: "What courses are available. and who can take them?",
      answer: "You can apply through our online portal.",
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "The program typically lasts 6 months.",
    },
    {
      question: "What kind of support is available during my course?",
      answer: "The cost varies depending on scholarships and aid.",
    },
    {
      question: "How can I become an instructor on your platform?",
      answer: "Yes, Genoa ES offers both need-based and merit scholarships.",
    },
  ];

  return (
    <div className="lg:px-[160px] px-4 md:px-[120px]">
      <div>
        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
          FAQs
        </span>

        {/* ✅ Grid with 2 columns: Left (heading + text), Right (FAQ table) */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-28 border-gray-300 mt-8 items-start">
          {/* Left Side */}
          <div>
            <p className="font-satoshi font-bold text-[48px] leading-[100%] tracking-[0%] max-w-[502px] text-[#141219]">
              Frequently asked questions
            </p>
            <p className="mt-8 text-[#202020] roboto font-normal text-[24px] leading-[32px] tracking-[0] max-w-[550px]">
              Find quick solutions to common queries and get the most out of
              your learning experience
            </p>
            <div className="flex mt-12">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700">
                View more questions
              </button>
            </div>
          </div>

          {/* Right Side (FAQ Section) */}
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-gray-200 pt-8">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-[#141219] roboto   font-satoshi font-bold text-[18px] leading-[100%] tracking-[0%]">
                    {faq.question}
                  </h3>
                  {/* ✅ Chevron Down with rotation */}
                  <ChevronDown
                    className={`w-6 h-6 text-black transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-[#101317] roboto font-normal text-[18px] leading-[24px] tracking-[0]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
