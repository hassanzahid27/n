"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FAFAFA] py-[32px] border-b">
      <div className="flex items-center justify-between max-w-[1180px] mx-auto px-4">
        {/* Logo */}
        <h1 className="font-satoshi font-bold text-[28.42px] leading-[100%] text-[#141219]">
          POC English
        </h1>

        {/* Menu Links - Desktop */}
        <div className="hidden lg:flex   gap-[40px] font-satoshi font-medium text-[18px] leading-[100%] text-[#141219]">
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <button onClick={() => setActivePage("courses")}>Courses</button>
          <button onClick={() => setActivePage("learn")}>Mentors</button>
          <Link href="/blogs">Blogs</Link>
          <button onClick={() => setActivePage("footer")}>Contact Us</button>
        </div>

        {/* Signup button - Desktop */}
        <div className="hidden lg:block font-satoshi rounded-4xl font-semibold text-[18px] leading-[100%] text-white bg-[#335EF7] max-w-[182px] h-[56px] px-[32px] py-[20px]">
          <Link href="/login">Sign Up</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#141219] text-3xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-6 mt-6 font-satoshi font-medium text-[18px] text-[#141219]">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About us
          </Link>
          <Link href="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </Link>
          <Link href="/mentors" onClick={() => setMenuOpen(false)}>
            Mentors
          </Link>
          <Link href="/blogs" onClick={() => setMenuOpen(false)}>
            Blogs
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact us
          </Link>
          <div className="font-satoshi rounded-4xl font-semibold text-[18px] text-white bg-[#335EF7] w-[182px] h-[56px] flex items-center justify-center">
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
