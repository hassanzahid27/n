"use client";
import { Lock } from "lucide-react";

export default function LessonsDashboard() {
  const lessons = [
    {
      id: 1,
      title: "Demo Lesson",
      subtitle: "To Be Verbs: Am, Is, Are",
      time: "1 Hour",
      progress: 50,
      locked: false,
      img: "A1.png",
    },
    {
      id: 2,
      title: "Demo Lesson",
      subtitle: "To Be Verbs: Am, Is, Are",
      time: "1 Hour",
      progress: 0,
      locked: true,
      img: "A2.jpg",
    },
    {
      id: 3,
      title: "Demo Lesson",
      subtitle: "To Be Verbs: Am, Is, Are",
      time: "1 Hour",
      progress: 0,
      locked: true,
      img: "A3.png",
    },
    {
      id: 4,
      title: "Demo Lesson",
      subtitle: "To Be Verbs: Am, Is, Are",
      time: "1 Hour",
      progress: 30,
      locked: false,
      img: "A4.png",
    },
    {
      id: 5,
      title: "Demo Lesson",
      subtitle: "To Be Verbs: Am, Is, Are",
      time: "1 Hour",
      progress: 0,
      locked: true,
      img: "A5.png",
    },
    {
      id: 6,
      title: "Demo Lesson",
      subtitle: "To Be Verbs: Am, Is, Are",
      time: "1 Hour",
      progress: 20,
      locked: false,
      img: "A6.png",
    },
    {
      id: 7,
      title: "Demo Lesson",
      subtitle: "To Be Verbs: Am, Is, Are",
      time: "1 Hour",
      progress: 10,
      locked: false,
      img: "A7.jpg",
    },
  ];

  const completedLessons = lessons.filter((l) => l.progress >= 100).length;
  const totalLessons = lessons.length;
  const percentage = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col md:flex-row min-h-screen p-4 md:p-6 pt-0 gap-12">
        {/* Lessons Section - FLEXIBLE WIDTH */}
        <div className="flex-1 rounded-lg p-4 md:p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
            <h2 className="font-inter font-semibold text-2xl leading-none tracking-tight capitalize text-[#202020]">
              Your Lessons
            </h2>
            <select className="bg-white rounded px-3 py-1 text-sm border">
              <option>All</option>
              <option>Completed</option>
              <option>In Progress</option>
            </select>
          </div>

          {/* Lessons List */}
          <div className="flex flex-col gap-4">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg p-4 bg-white shadow-sm"
              >
                {/* Image */}
                <div className="w-16 h-16 rounded overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    src={lesson.img}
                    alt={lesson.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Lesson Info */}
                <div className="flex flex-col sm:flex-row sm:gap-12 flex-1">
                  <div className="flex-col">
                    <p className="text-sm text-gray-500">{lesson.subtitle}</p>
                    <h3 className="font-semibold">{lesson.title}</h3>
                  </div>

                  {/* Completion */}
                  <div className="flex flex-col mt-2 sm:mt-0">
                    <span className="text-xs text-gray-500">Completion</span>
                    <div className="w-[165px] bg-gray-200 h-2 rounded mt-1">
                      <div
                        className="h-2 bg-blue-500 rounded"
                        style={{
                          width:
                            lesson.id === 2 ||
                            lesson.id === 3 ||
                            lesson.id === 5
                              ? "0px"
                              : "80px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Extra Info */}
                <div className="flex items-center justify-between sm:justify-end gap-6 sm:ml-12 mt-2 sm:mt-0">
                  <span className="text-sm text-gray-500">{lesson.time}</span>
                  <Lock
                    className={`w-4 h-4 ${
                      lesson.locked ? "text-gray-500" : "opacity-30"
                    }`}
                  />
                  <button
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      lesson.progress > 0
                        ? "bg-gray-100 text-gray-800"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {lesson.progress > 0 ? "Continue →" : "Start Now →"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overview Section - FIXED WIDTH */}
        <div className="w-full md:w-80 flex flex-col gap-6 pt-5">
          <h1 className="font-inter font-semibold text-2xl leading-none tracking-tight capitalize text-[#202020]">
            Over View
          </h1>
          {/* Progress Card */}
          <div className="bg-white mt-5 rounded-4xl p-6 flex flex-col items-center">
            <div className="relative w-18 h-40 mr-0 md:mr-8">
              {(() => {
                const pct = 25;
                const R = 40;
                const C = 2 * Math.PI * R;

                return (
                  <>
                    <svg className="w-30 h-30 -rotate-90" viewBox="0 0 96 96">
                      <circle
                        cx="48"
                        cy="48"
                        r={R}
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r={R}
                        stroke="#22c55e"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={C}
                        strokeDashoffset={C * (1 - pct / 100)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute inset-0 left-12 bottom-10 flex items-center justify-center text-lg font-bold">
                      {pct}%
                    </span>
                  </>
                );
              })()}
            </div>
            <p className="text-sm font-medium flex flex-col text-center">
              2 / 63
              <span className="text-gray-500">Lessons Completed</span>
            </p>
          </div>

          {/* Goal Card */}
          <div className="bg-white rounded-4xl p-6 text-center w-full md:w-[320px]">
            <div className="mb-2">
              <img
                src="target.png"
                alt=""
                className="max-w-full object-contain"
              />
            </div>
            <p className="text-green-600 text-center mb-2 font-medium">
              Keep Going! .
              <span className="text-black">
                {" "}
                You’ve Completed 2 Out Of 63 Lessons
              </span>
            </p>
            <p className="text-xs text-gray-500 mt-1 mb-3">
              Continue to Reach Your Goal
            </p>
            <button className="mt-4 px-4 py-2 mb-3 rounded bg-blue-500 text-white text-sm font-medium">
              Final Exam →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
