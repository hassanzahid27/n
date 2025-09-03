"use client";
import { Headphones } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="min-h-screen flex items-center justify-center px-108 bg-gray-50">
      <div className="bg-white rounded-4xl shadow-md w-[350px] p-6 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4 pt-6">
          <div className="bg-gray-100 p-4 rounded-full">
            <Headphones className="w-8 h-8 text-gray-700" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Can’t Find Answer?
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-12">
          For any questions or concerns, feel free to contact us!
        </p>

        {/* Email */}
        <a
          href="mailto:help@pocenglish.com"
          className="inline-block bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-medium text-sm hover:bg-indigo-100 transition"
        >
          help@pocenglish.com
        </a>
      </div>
    </div>
  );
}
