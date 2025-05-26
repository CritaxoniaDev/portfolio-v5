"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

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
          <div className="flex justify-center mr-10 order-2 lg:order-1">
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
      </div>
    </section>
  )
}
