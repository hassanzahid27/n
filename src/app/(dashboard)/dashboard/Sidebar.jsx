"use client";
import { useState } from "react";
import { FaBook, FaCog, FaSignOutAlt } from "react-icons/fa";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(true); // dropdown toggle
  const [sidebarOpen, setSidebarOpen] = useState(false); // sidebar toggle

  // ✅ Toggle functions
  const toggleDropdown = () => setOpen((prev) => !prev);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      {/* ✅ Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-2 z-50 bg-blue-600 text-white p-2 rounded-md"
      >
        {sidebarOpen ? <HiX size={20} /> : <HiMenu size={20} />}
      </button>

      {/* Sidebar (floats over content) */}
      <aside
        className={`fixed md:static top-0 left-0  h-screen max-h-screen  w-74 bg-white border-r flex flex-col items-center justify-between p-4 transform transition-transform duration-300 z-40
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="py-6">
          {/* Logo */}
          <h1 className="text-blue-600 ml-2 flex gap-2 text-center text-lg mb-6 font-inter font-extrabold text-[16px] leading-[100%] tracking-[0] align-middle uppercase">
            <FaBook /> COURSUЕ
          </h1>

          {/* Courses Section */}
          <p className="text-gray-500  mt-16 mb-4 font-inter font-semibold text-[16px] leading-[100%] tracking-[0] uppercase">
            COURSES
          </p>
          <ul className="space-y-2">
            {/* Dropdown Parent */}
            <li
              onClick={toggleDropdown}
              className="flex items-center justify-between cursor-pointer px-2 py-2 rounded-md hover:bg-gray-100"
            >
              <span className="flex items-center gap-2 text-blue-600 font-medium">
                <FaBook /> All Courses
              </span>
              {open ? (
                <IoChevronDown className="text-gray-500" />
              ) : (
                <IoChevronForward className="text-gray-500" />
              )}
            </li>

            {/* Dropdown Children */}
            {open && (
              <ul className="ml-6 mt-6 space-y-6 text-gray-700">
                <Link href="/gen">
                  <li className="cursor-pointer hover:text-blue-600 font-inter font-medium text-[16px] leading-[100%] tracking-[0]">
                    General English
                  </li>
                </Link>
                <Link href="/ielts">
                  <li className=" pt-6  cursor-pointer hover:text-blue-600 font-inter font-medium text-[16px] leading-[100%] tracking-[0]">
                    IELTS
                  </li>
                </Link>
                <Link href="/pro">
                  <li className=" pt-6 cursor-pointer hover:text-blue-600 font-inter font-medium text-[16px] leading-[100%] tracking-[0]">
                    Pronunciation
                  </li>
                </Link>

                <Link href="/eng">
                  <li className="pt-6 cursor-pointer hover:text-blue-600 font-inter font-medium text-[16px] leading-[100%] tracking-[0]">
                    English for Leisure
                  </li>{" "}
                </Link>
              </ul>
            )}
          </ul>
        </div>

        {/* Settings Section */}
        <div className="lg:mr-8 mt-12   mb-14 ">
          <p className="text-black font-inter font-semibold text-[16px] leading-[100%] tracking-[0] uppercase">
            SETTINGS
          </p>

          <ul className="space-y-4 mt-5">
            <Link href="/bil">
              <li className="flex items-center gap-3 font-inter font-medium text-[16px] leading-[100%] tracking-[0] text-black cursor-pointer hover:text-blue-600">
                <FaCog /> Settings
              </li>
            </Link>
            <li className="flex  mt-6 items-center gap-2 text-red-500 cursor-pointer hover:text-red-700">
              <FaSignOutAlt /> Logout
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
