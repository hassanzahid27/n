// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Eye, EyeOff } from "lucide-react";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
// import { MdEmail, MdLock } from "react-icons/md";
// import Link from "next/link";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="bg-white">
//       <div className="flex flex-col md:flex-row min-h-screen bg-white">
//         {/* LEFT SIDE - LOGIN FORM */}
//         <div className="flex items-center justify-center bg-white w-full md:w-1/2 px-4 sm:px-6 py-8 sm:py-10">
//           <div className="w-full max-w-sm">
//             {/* Logo */}
//             <h1 className="text-xl text-black sm:text-2xl font-bold mb-2 flex justify-center items-center gap-2">
//               <span className="text-blue-600 text-2xl sm:text-3xl">📘</span>{" "}
//               Courses.
//             </h1>

//             <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
//               Let's sign in to your account
//             </p>

//             {/* Google Button */}
//             <button className="w-full   rounded-lg py-2 flex items-center justify-center gap-2 mb-3 bg-gray-50 text-sm font-medium text-gray-700 sm:text-base">
//               <FcGoogle size={20} />
//               Google
//             </button>

//             {/* Facebook Button */}
//             <button className="w-full   rounded-lg py-2 flex items-center justify-center gap-2 mb-6 bg-gray-50 font-medium text-gray-700 text-sm sm:text-base">
//               <FaFacebook size={20} className="text-blue-600 " />
//               Facebook
//             </button>

//             <div className="text-center text-gray-400 mb-4  text-xs sm:text-sm">
//               or sign in with email
//             </div>

//             {/* Email */}
//             <div className="relative mb-4">
//               <input
//                 type="email"
//                 placeholder="peterparker@dopp.site"
//                 className="w-full border rounded-lg pl-10 pr-3 py-2 text-sm sm:text-base"
//               />
//               <MdEmail
//                 className="absolute left-3 top-2.5 text-gray-500"
//                 size={18}
//               />
//             </div>

//             {/* Password */}
//             <div className="relative mb-2">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="w-full border rounded-lg pl-10 pr-10 py-2 text-sm sm:text-base"
//               />
//               <MdLock
//                 className="absolute left-3 top-2.5 text-gray-500"
//                 size={18}
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-2.5 text-gray-500"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//               </button>
//             </div>

//             <div className="text-right mb-6">
//               <a
//                 href="#"
//                 className="text-blue-600 text-xs sm:text-sm hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </div>

//             {/* Sign In Button */}

//             <Link href="/login2">
//               <button className="w-full bg-blue-600 text-white rounded-lg py-2 text-sm sm:text-base hover:bg-blue-700">
//                 Sign In
//               </button>
//             </Link>

//             {/* Sign Up */}
//             <p className="mt-6 text-center text-gray-600 text-xs sm:text-sm">
//               Doesn’t have an account?{" "}
//               <a
//                 href="#"
//                 className="text-blue-600 font-semibold hover:underline"
//               >
//                 Sign Up
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* RIGHT SIDE - IMAGE + FLOATING BOXES */}
//         <div className="flex flex-col justify-center  md:m-[24px]   rounded-3xl bg-blue-500 w-full md:w-1/2 px-4 sm:px-6 md:px-10 py-8 sm:py-10 relative">
//           {/* Heading */}
//           <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-center xl:ml-36 lg:ml-12 text-white  mb-3 sm:mb-4 max-w-full md:max-w-[400px]">
//             Explore a Universe of Knowledge with Us!
//           </h2>
//           <p className="  text-xs sm:text-sm md:text-base text-white mb-6 xl:ml-20 lg:ml-8 sm:mb-8 md:mb-12 text-center  max-w-full md:max-w-[540px]">
//             The Courses Dashboard is your compass to a world of knowledge. Find,
//             enroll, and dive into transformative courses. Let the exploration
//             begin!
//           </p>

//           {/* Main Image with floating cards */}
//           <div className="relative w-full max-w-full sm:max-w-[420px] md:max-w-[460px] mx-auto mt-6">
//             <div className="relative w-full">
//               {/* Laptop Image */}
//               <Image
//                 src="/B1.png"
//                 alt="Laptop"
//                 width={460}
//                 height={320}
//                 className="rounded-lg   w-full h-auto"
//               />

//               {/* Overlay Image */}
//               <div className="absolute top-[5%] left-[15%] sm:left-[20%] md:left-[25%] w-[70%] sm:w-[72%] h-[55%] sm:h-[60%] overflow-hidden rounded">
//                 <Image
//                   src="/B2.png"
//                   alt="Screen Content"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>

//             {/* Floating Top Left */}
//             <div className="absolute -top-5 sm:-top-6 lg:-top-8 -left-2 sm:-left-4 lg:-left-10 bg-white shadow-lg rounded-lg p-2 sm:p-3 md:p-4 w-28 sm:w-40 md:w-56">
//               <p className="text-yellow-600 text-[10px] sm:text-xs md:text-sm font-semibold">
//                 Live Class
//               </p>
//               <p className="text-gray-800 font-medium text-[10px] sm:text-xs md:text-sm">
//                 How to Make Money From
//               </p>
//               <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs">
//                 04:00 PM – 06:00 PM
//               </p>
//             </div>

//             {/* Floating Bottom Right */}
//             <div className="absolute -bottom-5 sm:-bottom-6 md:-bottom-8 lg:bottom-3  -right-2 sm:-right-4 lg:-right-15 bg-white shadow-lg rounded-lg p-2 sm:p-2 md:p-3 w-28 sm:w-40 md:w-56">
//               <p className="  text-[10px] sm:text-xs md:text-sm font-semibold">
//                 Module
//               </p>
//               <p className="  font-medium text-[10px] sm:text-xs md:text-sm">
//                 01 Hands-On Project
//               </p>
//               <p className="font-medium text-[10px] sm:text-xs md:text-sm">
//                 02 Introduction to React JS
//               </p>
//               <p className="font-medium text-[10px] sm:text-xs md:text-sm">
//                 03 Introduction to Tailwind CSS
//               </p>
//               <p className="font-medium text-[12px] sm:text-xs  ">
//                 04 Code Snippets and Templates
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ADDED

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  // ADDED: states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // ADDED
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!username.trim()) newErrors.username = "Please enter your username";
    if (!email.trim()) newErrors.email = "Please enter your email";
    if (!password.trim()) newErrors.password = "Please enter your password";
    if (!confirmPassword.trim())
      newErrors.confirmPassword = "Please confirm your password";
    if (password && confirmPassword && password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row min-h-screen bg-white">
        {/* LEFT SIDE - LOGIN FORM */}
        <div className="flex items-center justify-center bg-white w-full md:w-1/2 px-4 sm:px-6 py-8 sm:py-10">
          <div className="w-full max-w-sm">
            {/* Logo */}
            <h1 className="text-xl text-black sm:text-2xl font-bold mb-2 flex justify-center items-center gap-2">
              <span className="text-blue-600 text-2xl sm:text-3xl">📘</span>{" "}
              Courses.
            </h1>

            <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
              Let's sign in to your account
            </p>

            {/* Google Button */}
            <button className="w-full rounded-lg py-2 flex items-center justify-center gap-2 mb-3 bg-gray-50 text-sm font-medium text-gray-700 sm:text-base">
              <FcGoogle size={20} />
              Google
            </button>

            {/* Facebook Button */}
            <button className="w-full rounded-lg py-2 flex items-center justify-center gap-2 mb-6 bg-gray-50 font-medium text-gray-700 text-sm sm:text-base">
              <FaFacebook size={20} className="text-blue-600 " />
              Facebook
            </button>

            <div className="text-center text-gray-400 mb-4 text-xs sm:text-sm">
              or sign in with email
            </div>

            {/* Username */}

            {/* Email */}
            <div className="relative mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="peterparker@dopp.site"
                className="w-full border rounded-lg pl-10 pr-3 py-2 text-sm sm:text-base"
              />
              <MdEmail
                className="absolute left-3 top-2.5 text-gray-500"
                size={18}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mb-2">{errors.email}</p>
            )}

            {/* Password */}
            <div className="relative mb-3">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border rounded-lg pl-10 pr-10 py-2 text-sm sm:text-base"
              />
              <MdLock
                className="absolute left-3 top-2.5 text-gray-500"
                size={18}
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mb-2">{errors.password}</p>
            )}

            {/* Confirm Password */}
            <div className="relative mb-3">
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full border rounded-lg pl-10 pr-10 py-2 text-sm sm:text-base"
              />
              <MdLock
                className="absolute left-3 top-2.5 text-gray-500"
                size={18}
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mb-2">
                {errors.confirmPassword}
              </p>
            )}

            {/* Sign In Button */}
            <Link href="/login2">
              <button
                onClick={handleSubmit}
                className="w-full mt-6 bg-blue-600 text-white rounded-lg py-2 text-sm sm:text-base hover:bg-blue-700"
              >
                Sign In
              </button>
            </Link>

            {/* Sign Up */}
            <p className="mt-6 text-center text-gray-600 text-xs sm:text-sm">
              Already have an account?{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center  md:m-[24px]   rounded-3xl bg-blue-500 w-full md:w-1/2 px-4 sm:px-6 md:px-10 py-8 sm:py-10 relative">
          {/* Heading */}
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-center xl:ml-36 lg:ml-12 text-white  mb-3 sm:mb-4 max-w-full md:max-w-[400px]">
            Explore a Universe of Knowledge with Us!
          </h2>
          <p className="  text-xs sm:text-sm md:text-base text-white mb-6 xl:ml-20 lg:ml-8 sm:mb-8 md:mb-12 text-center  max-w-full md:max-w-[540px]">
            The Courses Dashboard is your compass to a world of knowledge. Find,
            enroll, and dive into transformative courses. Let the exploration
            begin!
          </p>

          {/* Main Image with floating cards */}
          <div className="relative w-full max-w-full sm:max-w-[420px] md:max-w-[460px] mx-auto mt-6">
            <div className="relative w-full">
              {/* Laptop Image */}
              <Image
                src="/B1.png"
                alt="Laptop"
                width={460}
                height={320}
                className="rounded-lg   w-full h-auto"
              />

              {/* Overlay Image */}
              <div className="absolute top-[5%] left-[15%] sm:left-[20%] md:left-[25%] w-[70%] sm:w-[72%] h-[55%] sm:h-[60%] overflow-hidden rounded">
                <Image
                  src="/B2.png"
                  alt="Screen Content"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Top Left */}
            <div className="absolute -top-5 sm:-top-6 lg:-top-8 -left-2 sm:-left-4 lg:-left-10 bg-white shadow-lg rounded-lg p-2 sm:p-3 md:p-4 w-28 sm:w-40 md:w-56">
              <p className="text-yellow-600 text-[10px] sm:text-xs md:text-sm font-semibold">
                Live Class
              </p>
              <p className="text-gray-800 font-medium text-[10px] sm:text-xs md:text-sm">
                How to Make Money From
              </p>
              <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs">
                04:00 PM – 06:00 PM
              </p>
            </div>

            {/* Floating Bottom Right */}
            <div className="absolute -bottom-5 sm:-bottom-6 md:-bottom-8 lg:bottom-3  -right-2 sm:-right-4 lg:-right-15 bg-white shadow-lg rounded-lg p-2 sm:p-2 md:p-3 w-28 sm:w-40 md:w-56">
              <p className="  text-[10px] sm:text-xs md:text-sm font-semibold">
                Module
              </p>
              <p className="  font-medium text-[10px] sm:text-xs md:text-sm">
                01 Hands-On Project
              </p>
              <p className="font-medium text-[10px] sm:text-xs md:text-sm">
                02 Introduction to React JS
              </p>
              <p className="font-medium text-[10px] sm:text-xs md:text-sm">
                03 Introduction to Tailwind CSS
              </p>
              <p className="font-medium text-[12px] sm:text-xs  ">
                04 Code Snippets and Templates
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE - IMAGE + FLOATING BOXES */}
      {/* unchanged */}
    </div>
  );
}
