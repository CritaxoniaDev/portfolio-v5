"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, Award } from "lucide-react"
import Image from "next/image"

export function Education() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const educationData = [
    {
      id: 1,
      institution: "Lithan EduClaaS",
      degree: "Applied Degree in Software Engineering",
      date: "2023 - Present",
      location: "Singapore",
      status: "In Progress",
      statusColor: "yellow",
      logo: "/resources/educlaas-logo.png",
      isOngoing: true
    },
    {
      id: 2,
      institution: "First City Providential College",
      degree: "Bachelor of Science in Information Technology - Software Engineering",
      date: "2023 - Present",
      location: "San Jose del Monte, Bulacan",
      status: "In Progress",
      statusColor: "blue",
      logo: "/resources/fcpc.png",
      isOngoing: true
    },
    {
      id: 3,
      institution: "Sapang Palay National High School",
      degree: "Senior High School",
      date: "2021 - 2022",
      location: "San Jose del Monte, Bulacan",
      status: "With Honors",
      statusColor: "green",
      logo: "/resources/spnhs.png",
      isOngoing: false
    }
  ]

  const getStatusBadgeColor = (color: string) => {
    switch (color) {
      case "yellow":
        return "bg-yellow-400 border-yellow-600 text-yellow-900"
      case "blue":
        return "bg-blue-400 border-blue-600 text-blue-900"
      case "green":
        return "bg-green-400 border-green-600 text-green-900"
      default:
        return "bg-gray-400 border-gray-600 text-gray-900"
    }
  }

  return (
    <section id="education" className="min-h-screen py-16 px-8 bg-white flex items-center">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Education
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-sm sm:text-base font-medium text-black">Academic</span>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="text-sm sm:text-base font-medium text-black">Journey</span>
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

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line with Gradient Animation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-black via-purple-500 to-black hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>

          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
            <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-full opacity-20 animate-float-delayed"></div>
            <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-20 animate-float"></div>
          </div>

          {/* Education Entries */}
          <div className="space-y-16 lg:space-y-20">
            {educationData.map((edu, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={edu.id} className={`relative flex items-center ${isLeft ? 'lg:justify-start' : 'lg:justify-end'
                  }`}>

                  {/* Enhanced Timeline Dot (Center) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                    <div className={`relative w-8 h-8 rounded-full border-4 border-black bg-white shadow-[6px_6px_0px_0px_#000] ${edu.isOngoing ? 'animate-pulse' : ''
                      }`}>
                      {/* Inner animated ring */}
                      <div className={`absolute inset-1 rounded-full ${edu.isOngoing
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow'
                          : 'bg-gradient-to-r from-gray-300 to-gray-400'
                        }`}></div>

                      {/* Center dot */}
                      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                        <div className={`w-2 h-2 rounded-full ${edu.isOngoing ? 'bg-black animate-ping' : 'bg-gray-500'
                          }`}></div>
                      </div>
                    </div>

                    {/* Enhanced floating decorative elements */}
                    <div className="absolute -top-3 -right-3 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-3 -left-3 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-bounce-delayed"></div>

                    {/* Connecting lines to card */}
                    <div className={`absolute top-1/2 ${isLeft ? '-right-8 w-8' : '-left-8 w-8'
                      } h-0.5 bg-gradient-to-${isLeft ? 'r' : 'l'} from-black to-transparent`}></div>
                  </div>

                  {/* Enhanced Education Card */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'
                    }`}>
                    <div className={`relative border-4 border-black bg-white p-8 shadow-[12px_12px_0px_0px_#000] hover:shadow-[16px_16px_0px_0px_#000] transition-all duration-500 transform hover:scale-105 ${isLeft ? 'hover:-rotate-1' : 'hover:rotate-1'
                      }`}>

                      {/* Enhanced corner accents with gradients */}
                      <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full shadow-lg"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-lg"></div>
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full shadow-lg"></div>

                      {/* Animated border glow */}
                      <div className="absolute inset-0 border-2 border-purple-300 opacity-0 hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

                      {/* Inner content with enhanced styling */}
                      <div className="border-3 border-black p-6 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">

                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-4 right-4 w-16 h-16 border-2 border-black rounded-full"></div>
                          <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-black transform rotate-45"></div>
                        </div>

                        {/* Enhanced Institution Logo */}
                        <div className="flex justify-center mb-6 relative">
                          <div className="w-20 h-20 border-4 border-black bg-white rounded-full p-3 shadow-[6px_6px_0px_0px_#000] overflow-hidden transform hover:rotate-12 transition-transform duration-300">
                            {edu.logo ? (
                              <Image
                                src={edu.logo}
                                alt={`${edu.institution} Logo`}
                                width={64}
                                height={64}
                                className="object-contain w-full h-full rounded-full"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-xs font-bold">
                                Logo
                              </div>
                            )}
                          </div>

                          {/* Logo decoration */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                        </div>

                        {/* Enhanced Institution Name */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-black text-center mb-4 relative">
                          <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text">
                            {edu.institution}
                          </span>
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        </h3>

                        {/* Enhanced Degree */}
                        <div className="border-l-4 border-gradient-to-b from-purple-500 to-pink-500 pl-4 mb-6 relative">
                          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
                          <p className="text-lg sm:text-xl font-semibold text-black leading-relaxed">
                            {edu.degree}
                          </p>
                        </div>

                        {/* Enhanced Date with icon animation */}
                        <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                          <Calendar className="w-5 h-5 text-purple-600 animate-bounce" />
                          <span className="text-base font-bold text-black">{edu.date}</span>
                        </div>

                        {/* Enhanced Location */}
                        <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                          <MapPin className="w-5 h-5 text-blue-600 animate-pulse" />
                          <span className="text-base font-bold text-black">{edu.location}</span>
                        </div>

                        {/* Enhanced Status Badge */}
                        <div className="flex justify-center">
                          <div className={`relative border-3 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] text-base font-bold transform hover:scale-110 transition-transform duration-300 ${getStatusBadgeColor(edu.statusColor)
                            }`}>
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 animate-spin-slow" />
                              {edu.status}
                            </div>

                            {/* Badge decoration */}
                            {edu.isOngoing && (
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Enhanced multiple inner glow layers */}
                      <div className="absolute inset-3 border border-purple-300 opacity-30 pointer-events-none animate-pulse"></div>
                      <div className="absolute inset-4 border border-pink-300 opacity-20 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Enhanced Mobile Timeline Dot */}
                  <div className="absolute left-6 top-12 z-10 lg:hidden">
                    <div className={`w-6 h-6 rounded-full border-3 border-black bg-white shadow-[3px_3px_0px_0px_#000] ${edu.isOngoing ? 'animate-pulse' : ''
                      }`}>
                      <div className={`w-full h-full rounded-full ${edu.isOngoing ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-300'
                        }`}></div>
                    </div>

                    {/* Mobile decorations */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Enhanced Mobile Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-black via-purple-500 to-black lg:hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>

          {/* Enhanced Timeline End Decoration */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-10 h-10 border-3 border-black bg-white rounded-full shadow-[4px_4px_0px_0px_#000] hidden lg:block">
            <div className="w-full h-full bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Enhanced Mobile Timeline End */}
          <div className="absolute left-6 bottom-0 w-6 h-6 border-3 border-black bg-white rounded-full shadow-[3px_3px_0px_0px_#000] lg:hidden">
            <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-full animate-pulse"></div>
          </div>
        </div>


        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-4 h-4 bg-black rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-3 h-3 bg-black rounded-full opacity-30"></div>
        <div className="absolute top-1/2 right-20 w-2 h-2 bg-black rounded-full opacity-25"></div>
      </div>
    </section>
  )
}
