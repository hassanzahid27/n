import Image from "next/image";

const Step = () => {
  return (
    <div className="lg:px-[160px] px-4 md:px-[120px]">
      <section className="bg-blue-600 text-white py-12 lg:py-0 px-6 rounded-3xl flex flex-col items-center md:flex-row md:justify-between">
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-[508px]">
            Step by Step Learning 5X Faster
          </h1>
          <p className="text-base md:text-lg">
            Find study partners, ask questions and join weekly live lessons on
            Discord. Connect, practice, and reach fluency faster!
          </p>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0">
          <div className="w-72 h-72  rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src="/S1.png"
              alt="Hero students"
              width={280}
              height={280}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Step;
