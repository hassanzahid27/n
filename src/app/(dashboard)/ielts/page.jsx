"use client";
import { useState } from "react";
import {
  Download,
  Lock,
  CheckCircle2,
  FileText,
  PlayCircle,
} from "lucide-react";

export default function VocabularyQuiz() {
  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);

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

  const questions = [
    {
      id: 1,
      question:
        "Identify the passive voice structure: 'Books are read by students.'",
      options: [
        "subject + verb + object",
        "object + are/is + past participle",
        "subject + are/is + present participle",
        "object + verb + noun",
      ],
    },
    {
      id: 2,
      question: "Choose the correct passive form: 'She delivers the mail.'",
      options: [
        "The chef are cooked meals.",
        "Meals is cooked by the chef.",
        "Meals are cooked.",
        "Meals are cooking.",
      ],
    },
    {
      id: 3,
      question: "What is the passive form of 'They choose the leader'?",
      options: [
        "The leader is chosen by them.",
        "The leader chooses them.",
        "The leader are chosen by they.",
        "They chooses the leader.",
      ],
    },
    {
      id: 4,
      question:
        "Which is the correct passive: 'The teacher helps the students.'",
      options: [
        "The students are helped by the teacher.",
        "The students helps the teacher.",
        "The teacher are helped by students.",
        "The students is help by teacher.",
      ],
    },
    {
      id: 5,
      question: "Identify the passive: 'The letter was written by John.'",
      options: [
        "John writes the letter.",
        "The letter was written by John.",
        "John is writing the letter.",
        "The letter writes John.",
      ],
    },
    {
      id: 6,
      question: "Choose passive form: 'They will finish the project.'",
      options: [
        "The project will be finished by them.",
        "They are finishing the project.",
        "The project finishes them.",
        "The project will finish by them.",
      ],
    },
  ];

  const [page, setPage] = useState(0);
  const currentQuestions = questions.slice(page * 3, page * 3 + 3);

  const handleNext = () => {
    if ((page + 1) * 3 < questions.length) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col lg:flex-row w-full   px-4 lg:px-8 py-4 gap-4">
        {/* Left: Questions */}
        <div className="flex flex-col">
          <div className="bg-white rounded-3xl">
            <div className="w-full  lg:w-[830px] p-6">
              <h2 className="text-2xl font-bold mb-6">Vocabulary</h2>

              {currentQuestions.map((q) => (
                <div
                  key={q.id}
                  className="mb-6 rounde-3xl bg-[#335EF71A] shadow-sm"
                >
                  {/* Question header */}
                  <div className="bg-blue-100 px-4 py-3 font-medium text-gray-800 flex items-center gap-2">
                    <span className="w-6 h- flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                      {q.id}
                    </span>
                    <span>{q.question}</span>
                  </div>

                  {/* Options */}
                  <div className=" flex flex-col ">
                    {q.options.map((opt, i) => (
                      <label
                        key={i}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 cursor-pointer hover:bg-blue-50"
                      >
                        <input
                          type="radio"
                          name={`q${q.id}`}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Pagination Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handleNext}
              disabled={(page + 1) * 3 >= questions.length}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              Go Next
            </button>
          </div>
        </div>

        {/* Right: Sidebar */}
        <div className="w-full lg:w-[300px] bg-white rounded-xl shadow p-4 ">
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
                    <div className="flex-shrink-0">{icon}</div>
                    <div className="flex flex-col items-start">
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
