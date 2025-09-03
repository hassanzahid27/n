import Image from "next/image";

export default function Learn() {
  return (
    <div className="lg:px-[160px] px-4 md:px-[120px]">
      <section className="py-16 bg-white">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
            Our Team
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-3">
          Learn from Industry Experts
        </h2>
        <p className="  text-black text-center max-w-2xl mx-auto mb-12">
          Gain insights from industry experts and master real-world skills for
          career growth and professional development
        </p>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8  mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-md p-[16px] flex  space-x-6">
            {/* Image */}
            <div className="w-[180px] h-[208px] relative rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src="/L1.png" // 👉 put image inside public/ folder
                alt="Sophie Johnson"
                fill
                className="object-cover bg-[#E9E9E9]"
              />
            </div>

            {/* Info */}
            <div>
              <h3 className="font-semibold text-lg text-blue-600">
                Sophie Johnson
              </h3>
              <p className="text-gray-500 text-sm mb-3 mt-3">
                Data Analyst Mentor
              </p>

              <div className="flex gap-6 text-sm font-medium mb-3">
                <span className="flex flex-col mt-4  font-satoshi font-bold text-[24px] leading-[100%] tracking-[0] text-black">
                  20M+{" "}
                  <span className="text-gray-400 mt-4 font-satoshi font-normal text-[16px] leading-[100%] tracking-[0]">
                    Watch time
                  </span>
                </span>

                <span className="flex flex-col mt-4 mb-8 text-black font-satoshi font-bold text-[24px] leading-[100%] tracking-[0]">
                  10K+{" "}
                  <span className="text-gray-400 mt-4 font-satoshi font-normal text-[16px] leading-[100%] tracking-[0]">
                    Followers
                  </span>
                </span>
              </div>

              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                View profile →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-md p-[16px] flex  space-x-6">
            {/* Image */}
            <div className="w-[180px] h-[208px] relative rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src="/L2.png" // 👉 put image inside public/ folder
                alt="Colin Munro"
                fill
                className="object-cover bg-[#E9E9E9]"
              />
            </div>

            {/* Info */}
            <div>
              <h3 className="font-semibold text-lg text-blue-600">
                Colin Munro
              </h3>
              <p className="text-gray-500 text-sm mb-3 mt-3">
                AI/ML Expert Mentor
              </p>

              <div className="flex gap-6 text-sm font-medium mb-3">
                <span className="flex flex-col mt-4 mb-8 text-black font-satoshi font-bold text-[24px] leading-[100%] tracking-[0]">
                  35M+{" "}
                  <span className="text-gray-400  mt-4 font-satoshi font-normal text-[16px] leading-[100%] tracking-[0]">
                    Watch time
                  </span>
                </span>
                <span className="flex flex-col mt-4 text-black mb-8 font-satoshi font-bold text-[24px] leading-[100%] tracking-[0]">
                  12K+{" "}
                  <span className="text-gray-400  mt-4 font-satoshi font-normal text-[16px] leading-[100%] tracking-[0]">
                    Followers
                  </span>
                </span>
              </div>

              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline lg_pt-[44px] pt-[8px] "
              >
                View profile →
              </a>
            </div>
          </div>
        </div>

        {/* See all button */}
        <div className="flex justify-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700">
            See all
          </button>
        </div>
      </section>
    </div>
  );
}
