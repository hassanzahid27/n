"use client";
import { useState } from "react";

const categories = [
  "All courses",
  "Designing",
  "Development",
  "Marketing",
  "Data Science",
];

const courses = [
  {
    id: 1,
    category: "Designing",
    title: "Visual designing : Begin your designing journey now",
    lessons: 10,
    hours: 10,
    rating: 4.5,
    image: "Hc1.png", // <-- your image
  },
  {
    id: 2,
    category: "Development",
    title: "Web Development: Build dynamic and responsive websites",
    lessons: 10,
    hours: 10,
    rating: 4.5,
    image: "Hc2.png",
  },
  {
    id: 3,
    category: "Data Science",
    title:
      "Data Science: Unlock the power of data analysis for smarter decisions",
    lessons: 10,
    hours: 10,
    rating: 4.5,
    image: "Hc3.png",
  },
  {
    id: 4,
    category: "Marketing",
    title:
      "Digital Marketing: Master the art of online growth and brand success",
    lessons: 10,
    hours: 10,
    rating: 4.5,
    image: "Hc4.png",
  },
  {
    id: 5,
    category: "Development",
    title: "Programming: Code your way to success with powerful languages",
    lessons: 10,
    hours: 10,
    rating: 4.5,
    image: "Hc5.png",
  },
  {
    id: 6,
    category: "Data Science",
    title: "Data Science: Unlock the power of data analysis and insights",
    lessons: 10,
    hours: 10,
    rating: 4.5,
    image: "Hc6.png",
  },
];

export default function Section() {
  const [activeCategory, setActiveCategory] = useState("All courses");

  const filteredCourses =
    activeCategory === "All courses"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <div className="lg:px-[160px] px-4 md:px-[120px]">
      <section className="py-16      text-center">
        {/* Badge */}
        <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">
          Highlight
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#141219]">
          Our Popular Courses
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Master in-demand skills with expert-led courses featuring hands-on
          projects and real-world applications
        </p>

        {/* Categories Bar */}
        {/* Categories Bar */}
        <div className="flex justify-center mt-8">
          <div className="bg-gray-100 p-1 rounded-full flex gap-2 overflow-x-auto scrollbar-hide px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-12">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
            >
              {/* Course Image */}
              <img
                src={course.image}
                alt={course.title}
                className="h-[140px] w-full object-cover p-[16px] rounded-4xl"
              />

              {/* Card Content */}
              <div className="p-5 pt-0 text-left">
                <h3 className="font-semibold text-gray-800 text-lg leading-snug">
                  {course.title}
                </h3>

                <div className="flex items-center gap-4 text-gray-500 text-sm mt-4">
                  <span className="flex items-center gap-1">
                    📘 {course.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    ⏱ {course.hours}hrs
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <span className="text-yellow-500 font-medium">
                    ⭐ {course.rating}
                  </span>
                  <button className="px-4 py-2 bg-white border border-gray-300 text-[#141219] rounded-full text-sm font-bold hover:bg-gray-100">
                    Enroll now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore button */}
        <button className="mt-12 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Explore
        </button>
      </section>
    </div>
  );
}
