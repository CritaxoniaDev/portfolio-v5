"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, FileText } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about" className="min-h-screen py-16 px-8 bg-white flex items-center">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header with animated underline */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              About Me
            </h2>
            <div className="flex items-center justify-center gap-2 transform rotate-1">
              <span className="text-lg font-medium text-black">Discover</span>
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-lg font-medium text-black">About Me</span>
            </div>
            {/* Animated underline */}
            <div
              className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-black transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'
                }`}
            ></div>
            {/* Visual flair dots */}
            <div className="absolute -top-3 -right-4 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute -bottom-4 -left-3 w-1.5 h-1.5 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Profile Image */}
          <div className="flex flex-col items-center mr-10 order-2 lg:order-1">
            {/* Professional Summary Button */}
            <div className="mb-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 border-2 border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 px-4 py-2 font-semibold text-blue-800 shadow-[4px_4px_0px_0px_#2563eb] hover:shadow-[6px_6px_0px_0px_#2563eb] transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                Professional Summary
              </button>
            </div>

            <div className="relative">
              {/* Floating decorative dots */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-black rounded-full animate-pulse"></div>
              <div className="absolute -top-2 -right-6 w-2 h-2 bg-black rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-3 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-black rounded-full animate-pulse"></div>

              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-3 border-t-3 border-black"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-r-3 border-t-3 border-black"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-3 border-b-3 border-black"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-3 border-b-3 border-black"></div>

              {/* 3D Card Effect */}
              <div className="relative border-3 border-black bg-white p-2 shadow-[12px_12px_0px_0px_#000] hover:shadow-[16px_16px_0px_0px_#000] transition-all duration-300">
                {/* Inner border glow */}
                <div className="border-2 border-black bg-gradient-to-br from-white via-gray-50 to-white p-2">
                  <div className="w-64 h-72 sm:w-72 sm:h-80 bg-gray-200 border border-black relative overflow-hidden">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full flex items-center justify-center text-black font-medium text-base">
                      Profile Image
                    </div>
                    {/* Replace with actual image: */}
                    <Image
                      src="/images/pic.jpg"
                      alt="Gian Raphael Alcantara"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Multiple inner glow layers */}
                <div className="absolute inset-2 border border-black opacity-30 pointer-events-none"></div>
                <div className="absolute inset-3 border border-black opacity-20 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="border-l-3 border-black pl-4">
              <p className="text-base sm:text-lg text-black leading-relaxed mb-4">
                My name is <span className="font-bold">Gian Raphael Alcantara</span>, a dedicated software engineering student at <span className="font-semibold">First City Providential College</span>.
              </p>

              <p className="text-base sm:text-lg text-black leading-relaxed mb-4">
                My mission revolves around mastering programming languages, algorithms, and software development methodologies.
              </p>

              <p className="text-base sm:text-lg text-black leading-relaxed mb-4">
                Fueled by a relentless passion for technology and innovation, I aspire to become a proficient software engineer capable of tackling complex problems and contributing to groundbreaking projects.
              </p>

              <p className="text-base sm:text-lg text-black leading-relaxed">
                My vision extends beyond academic excellence; I aim to leverage my skills to create impactful solutions that address real-world challenges—whether it's enhancing user experiences, optimizing system performance, or revolutionizing industries through cutting-edge software.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Summary Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white border-3 border-black shadow-[8px_8px_0px_0px_#000] max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="border-b-2 border-black p-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-black flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Professional Summary
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="border-2 border-black bg-white p-1 shadow-[2px_2px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] transition-all duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 text-justify">
                <div className="border-l-3 border-black pl-4">
                  <p className="text-base text-black leading-relaxed">
                    Adept in industry-standard programming languages and agile methodologies using modern technologies, highly self-motivated, goal-oriented, and results-driven IT Specialist with 1 year of technical experience, currently finished 1 project and working with a new project, in an international, multicultural and multiple teams, on the development process and creation of large-scale and high-quality software systems, following global standards and trends.
                  </p>
                  <p className="text-base text-black leading-relaxed mt-4">
                    A local government unit scholar, an ambitious working student of Applied Degree in Software Engineering in Singapore and Bachelor of Science in Information Technology (BSIT) with Specialization in Software Engineering in the Philippines, in an international hybrid program (work-study model), with strong academic foundation.
                  </p>
                  <p className="text-base text-black leading-relaxed mt-4">
                    Capable of working both independently and in a team environment. I am a great team player who supports co-workers to achieve the team's goal and value accountability. I am a quick learner with keen interest in self-developing, passionate for technology and innovation, with strong work ethic and committed to delivering high-quality work and exceeding expectations.
                  </p>
                  <p className="text-base text-black leading-relaxed mt-4">
                    Seeking a challenging role in an intermediate-level post in a fast-paced environment, where I can leverage my skills, knowledge and experience to contribute to a dynamic, talented and committed team while building a long-term successful career with your organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
