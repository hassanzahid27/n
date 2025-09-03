"use client";
import { useState } from "react";
import Link from "next/link";

export default function EditProfile() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  // Placeholder avatars (replace src with your own images later)
  const avatars = ["ro.png", "ro.png", "ro.png", "ro.png", "ro.png"];

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex p-6">
      <div className="w-full">
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-6">Edit Profile</h2>

          {/* Change Avatar */}
          <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:gap-82 gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Change Avatar</h3>
              <p className="text-gray-500 text-sm max-w-[180px]">
                Choose your best picture that represent you
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {avatars.map((avatar, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAvatar(index)}
                  className={`w-16 h-16 rounded-full border-2 overflow-hidden ${
                    selectedAvatar === index
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Change Password */}
          <div className="mb-12 flex flex-col gap-2">
            <h3 className="text-sm font-medium">Change Password</h3>
            <p className="text-gray-500 text-sm max-w-[1200px] lg:mr-50">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>

          {/* Send Email */}
          <div className="mb-4 flex flex-col lg:flex-row lg:items-start lg:gap-56 gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Send Email</h3>
              <p className="text-gray-500 text-sm mb-2">
                This will help us to verified that this is really you
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full max-w-[600px] items-end justify-end">
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Link href="/stu">
                <button className="bg-blue-600 max-w-[250px] h-[40px] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Send Reset Code
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
