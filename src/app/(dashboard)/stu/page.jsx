"use client";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
export default function StudentCommunityCard() {
  return (
    <div className="min-h-screen flex  py-35 bg-gray-50 px-90">
      <div className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white rounded-4xl shadow-lg w-[490px] p-6  ">
        {/* Icon */}
        <div className="flex justify-center ">
          <div className="  p-4 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968898.png"
              alt="community"
              className="w-12 h-12 text-white "
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2 text-center">
          Join The Student Community
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-white/80 mb-12 text-center">
          Watch the video to learn how to join our student community, connect
          with classmates, learn together, and make friends worldwide!
        </p>

        {/* How To Join */}
        <h3 className="text-sm font-semibold mb-3">
          How To Join The Community?
        </h3>
        <ul className="text-sm text-white/90 space-y-2 text-left  mx-auto">
          <li className="flex items-center gap-2">
            <CheckCircle size={16} className="text-white" />
            Copy your student ID by clicking on the button below
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={16} className="text-white" />
            Open the community
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={16} className="text-white" />
            Paste your student ID, and you will enter the community!
          </li>
        </ul>
        <Link href="/find">
          <div className="text-center">
            {/* Button */}
            <button className="mt-14 bg-white  text-indigo-600 font-medium px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
              Get your Student ID →
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
