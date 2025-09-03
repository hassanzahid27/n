import React from "react";
import { FaHeadphones, FaGamepad } from "react-icons/fa";
import Image from "next/image";

function Navbar() {
  return (
    <div className="   bg-[#FAFAFA] shadow">
      <div className="px-4 md:px-[30px] py-3 md:py-[17px]    ml-10 md:ml-0">
        <div className="flex items-center bg-white max-w-[1160px] rounded-3xl justify-between px-4 md:px-6 py-3 md:py-4">
          {/* Left side */}
          <div className="text-base md:text-lg font-semibold text-black">
            All Courses
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Headphone Icon */}
            <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200">
              <FaHeadphones className="text-gray-600 text-base md:text-lg" />
            </div>

            {/* Gamepad Icon */}
            <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200">
              <FaGamepad className="text-blue-600 text-base md:text-lg" />
            </div>

            {/* Avatar */}
            <Image
              src="/r.png"
              alt="User"
              width={32}
              height={32}
              className="rounded-full cursor-pointer md:w-9 md:h-9"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
