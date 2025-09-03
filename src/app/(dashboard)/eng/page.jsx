"use client";
import { useState } from "react";
import {
  Download,
  Lock,
  CheckCircle2,
  FileText,
  PlayCircle,
} from "lucide-react";

export default function CoursePlayer() {
  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);

  // lessonType: "video" | "doc" | "exam"
  const lessons = [
    { title: "Grammar", duration: "3 minutes", type: "video" },
    { title: "Grammar Quiz", duration: "3 minutes", type: "video" },
    { title: "Vocabulary", duration: "30 minutes", type: "doc" },
    { title: "Vocabulary Quiz", duration: "30 minutes", type: "doc" },
    { title: "Listening", duration: "30 minutes", type: "doc" },
    { title: "Reading", duration: "3 minutes", type: "video" },
    { title: "Speaking", duration: "3 minutes", type: "video" },
    { title: "Writing", duration: "30 minutes", type: "doc" },
    { title: "Final Exam", duration: "30 minutes", type: "doc", locked: true },
  ];

  const markAsCompleted = () => {
    if (!completedLessons.includes(activeLesson)) {
      setCompletedLessons([...completedLessons, activeLesson]);
    }
  };

  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col lg:flex-row w-full   px-8  p-4 gap-6">
        {/* Left Section - Video & Info */}
        <div className="flex-1   ">
          {/* Video Placeholder */}
          <div className="flex flex-col p-[20px] gap[30px] bg-white rounded-3xl ">
            <div className="     rounded-xl overflow-hidden relative">
              <iframe
                width="765"
                height="415"
                src="https://www.youtube.com/embed/mpJb9GNxdYI?si=9Fa0fMuGnq9jIvTm"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              {/* Play Button Overlay */}
            </div>

            {/* Lesson Info */}
            <div className="flex justify-between items-center mt-4 bg-[#FAFAFA] rounded-xl p-4 shadow-sm ">
              <div>
                <h2 className="text-lg font-semibold">
                  {lessons[activeLesson].title}
                </h2>
                <p className="text-sm text-gray-500">
                  Introduction • Courses 1
                </p>
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-00 hover:bg-gray-200">
                <Download className="w-6 h-6 text-blue-600" />
              </button>
            </div>
          </div>

          {/* Mark as Completed */}
          <div className="mt-[50px]">
            <button
              onClick={markAsCompleted}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
            >
              Mark As Completed
            </button>
          </div>
        </div>

        {/* Right Section - Course Content */}
        <div className="w-full lg:w-80  bg-white rounded-xl shadow p-4 ">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Course Content</h3>
            <span className="text-sm text-gray-500">
              {completedLessons.length}/{lessons.length}
            </span>
          </div>
          <ul className="space-y-2">
            {lessons.map((lesson, index) => {
              const isActive = activeLesson === index;
              const isCompleted = completedLessons.includes(index);

              // Decide icon
              let icon;
              if (lesson.locked || lesson.type === "exam") {
                icon = (
                  <Lock
                    className={`w-5 h-5 ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  />
                );
              } else if (isCompleted) {
                icon = <CheckCircle2 className="w-5 h-5 text-green-500" />;
              } else if (lesson.type === "video") {
                icon = (
                  <PlayCircle
                    className={`w-5 h-5 ${
                      isActive ? "text-white" : "text-blue-600"
                    }`}
                  />
                );
              } else if (lesson.type === "doc") {
                icon = (
                  <FileText
                    className={`w-5 h-5 ${
                      isActive ? "text-white" : "text-blue-600"
                    }`}
                  />
                );
              }

              return (
                <li key={index}>
                  <button
                    onClick={() => !lesson.locked && setActiveLesson(index)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-blue-100 hover:bg-gray-200 text-gray-800"
                    } ${lesson.locked ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">{icon}</div>

                    {/* Title + Duration */}
                    <div className="flex flex-col items-start ">
                      <p className="font-medium text-sm">{lesson.title}</p>
                      <p
                        className={`text-xs ${
                          isActive ? "text-blue-100" : "text-blue-500"
                        }`}
                      >
                        {lesson.duration}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
