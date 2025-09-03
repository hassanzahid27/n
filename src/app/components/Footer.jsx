import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="lg:px-[160px] px-4 md:px-[120px] pt-[136px]">
      <footer className="bg-white text-gray-700 mt-[136px]  ">
        <div className="grid grid-cols  lg:grid-cols-6 gap-8 lg:gap-[72px] ">
          {/* Left Section */}
          <div className="col-span-3">
            <h2 className="text-[#141219]  mb-4 lg:mb-[24px] font-satoshi font-bold text-[28.42px] leading-[100%] tracking-[0]">
              POC English
            </h2>
            <p className="text-[#141219] mb-4 lg:max-w-[402px]   font-satoshi font-normal text-[18px] leading-[100%] tracking-[0]">
              POC is your gateway to expert-led, accessible learning. Empowering
              you with skills to succeed in a fast-changing world, we offer
              courses designed to help you grow and achieve your goals at your
              own pace
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#141219]  mb-3 md:mb-[32px] font-satoshi font-bold text-[24px] leading-[100%] tracking-[0]">
              Company
            </h3>
            <ul className="space-y-[24px] text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mentors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[#141219] mb-3 md:mb-[32px] font-satoshi font-bold text-[24px] leading-[100%] tracking-[0]">
              Support
            </h3>
            <ul className="space-y-[24px] text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-[#141219] mb-3 font-satoshi font-bold text-[24px] leading-[100%] tracking-[0] md:mb-[32px]">
              Courses
            </h3>
            <ul className="space-y-[24px] text-sm">
              <li>
                <a href="#" className="hover:underline">
                  UI/UX Designing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Visualization
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  AI/ML
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t pt-6">
          <p className=" text-[#141219]   font-satoshi font-normal text-[18px] leading-[100%] tracking-[0]">
            © POC Inc. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="p-2 border rounded-full hover:bg-gray-100">
              <FaXTwitter className="text-gray-700" />
            </a>
            <a href="#" className="p-2 border rounded-full hover:bg-gray-100">
              <FaFacebookF className="text-gray-700" />
            </a>
            <a href="#" className="p-2 border rounded-full hover:bg-gray-100">
              <FaInstagram className="text-gray-700" />
            </a>
            <a href="#" className="p-2 border rounded-full hover:bg-gray-100">
              <FaLinkedinIn className="text-gray-700" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
