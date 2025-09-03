"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Clock, Play } from "lucide-react"; // ✅ added icons

const coursesContinue = [
  {
    id: 1,
    title: "Website Dev Zero to Hero",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    time: "1 Hour",
    img: "https://via.placeholder.com/150x100?text=Course+1",
    progress: "w-1/2", // 50% progress
  },
  {
    id: 2,
    title: "Learn Programming in 30 Days",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    time: "2 Hours",
    img: "https://via.placeholder.com/150x100?text=Course+2",
    progress: "w-1/3", // 33% progress
  },
  {
    id: 3,
    title: "Make Uber Clone App",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    time: "30 Min",
    img: "https://via.placeholder.com/150x100?text=Course+3",
    progress: "w-2/3", // 66% progress
  },
];

const coursesLatest = [
  {
    id: 1,
    title: "IOS 13 Swift 5 iOS Development",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    img: "https://via.placeholder.com/300x200?text=Latest+1",
    count: 90,
  },
  {
    id: 2,
    title: "Stunning CSS Design",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    img: "https://via.placeholder.com/300x200?text=Latest+2",
    count: 50,
  },
  {
    id: 3,
    title: "Learn Programming in 30 Days",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    img: "https://via.placeholder.com/300x200?text=Latest+3",
    count: 30,
  },
  {
    id: 4,
    title: "Modern JavaScript",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    img: "https://via.placeholder.com/300x200?text=Latest+4",
    count: 10,
  },
  {
    id: 5,
    title: "Work From Home Setup",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    img: "https://via.placeholder.com/300x200?text=Latest+5",
    count: 10,
  },
  {
    id: 6,
    title: "Creative Writing",
    subtitle: "General English",
    desc: "Grammar, Vocabulary And Fluency",
    img: "https://via.placeholder.com/300x200?text=Latest+6",
    count: 10,
  },
];

export default function Dashboard() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="p-6 space-y-10 bg-gray-50 min-h-screen">
      {/* Continue Watching */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Continue Watching</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {coursesContinue.map((course) => (
            <div
              key={course.id}
              className="flex min-w-[350px] bg-white shadow rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={course.img}
                alt={course.title}
                className="w-[140px] h-full object-cover"
              />

              {/* Text Content */}
              <div className="p-4 flex flex-col justify-between w-full">
                <div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    GRAMMAR
                  </span>
                  <h3 className="font-semibold mt-2">{course.subtitle}</h3>
                  <p className="text-sm text-gray-600">{course.desc}</p>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
                  <div
                    className={`${course.progress} h-2 bg-blue-500 rounded-full`}
                  ></div>
                </div>

                {/* Time + Continue Button */}
                <div className="flex items-center justify-between mt-3">
                  <span className="flex items-center text-xs text-gray-500 gap-1">
                    <Clock className="w-4 h-4" /> {course.time}
                  </span>
                  <button className="text-sm text-white bg-black rounded px-3 py-1">
                    Continue →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Courses */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Latest Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {coursesLatest.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  GRAMMAR
                </span>
                <h3 className="font-semibold mt-2">{course.subtitle}</h3>
                <p className="text-sm text-gray-600">{course.desc}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex -space-x-2">
                    <img
                      className="w-6 h-6 rounded-full border"
                      src="https://via.placeholder.com/30"
                      alt="user"
                    />
                    <img
                      className="w-6 h-6 rounded-full border"
                      src="https://via.placeholder.com/30"
                      alt="user"
                    />
                    <img
                      className="w-6 h-6 rounded-full border"
                      src="https://via.placeholder.com/30"
                      alt="user"
                    />
                  </div>
                  <span className="flex items-center text-xs text-gray-500 gap-1">
                    <Play className="w-4 h-4" /> {course.count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
