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
      isOngoing: true,
      description: "Comprehensive applied degree program focusing on practical software engineering skills and industry-relevant technologies.",
      skills: ["Software Engineering", "Applied Learning", "Industry Projects", "Technical Skills"]
    },
    {
      id: 2,
      institution: "First City Providential College",
      degree: "Bachelor of Science in Information Technology - Software Engineering",
      date: "2023 - Present",
      location: "Philippines",
      status: "In Progress",
      statusColor: "blue",
      logo: "/resources/fcpc.png",
      isOngoing: true,
      description: "Bachelor's degree program specializing in software engineering with focus on modern development practices and methodologies.",
      skills: ["Information Technology", "Software Engineering", "Programming", "System Design"]
    },
    {
      id: 3,
      institution: "Sapang Palay National High School",
      degree: "Senior High School",
      date: "2021 - 2022",
      location: "Philippines",
      status: "With Honors",
      statusColor: "green",
      logo: "/resources/spnhs.png",
      isOngoing: false,
      description: "Completed senior high school education with honors, building foundational knowledge for higher education in technology.",
      skills: ["Academic Excellence", "Leadership", "Critical Thinking", "Foundation Studies"]
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
    <section id="education" className="min-h-screen py-20 mt-20 px-8 bg-white flex items-center">
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

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-black via-purple-500 to-black hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-black via-purple-500 to-black lg:hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>

          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
            <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-full opacity-20 animate-float-delayed"></div>
            <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-20 animate-float"></div>
          </div>

          {/* Education Timeline Items */}
          <div className="space-y-16 lg:space-y-20">
            {educationData.map((edu, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={edu.id} className={`relative flex items-center ${isLeft ? 'lg:justify-start' : 'lg:justify-end'
                  }`}>

                  {/* Timeline Dot (Center) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                    <div className={`relative w-6 h-6 rounded-full border-3 border-black bg-white shadow-[4px_4px_0px_0px_#000] ${edu.isOngoing ? 'animate-pulse' : ''
                      }`}>
                      <div className={`w-full h-full rounded-full ${edu.isOngoing
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow'
                        : 'bg-gradient-to-r from-gray-300 to-gray-400'
                        }`}></div>

                      {/* Ongoing indicator */}
                      {edu.isOngoing && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                      )}
                    </div>

                    {/* Connecting line to card */}
                    <div className={`absolute top-1/2 ${isLeft ? '-right-6 w-6' : '-left-6 w-6'
                      } h-0.5 bg-gradient-to-${isLeft ? 'r' : 'l'} from-black to-transparent`}></div>
                  </div>

                  {/* Mobile Timeline Dot */}
                  <div className="absolute left-6 top-8 z-10 lg:hidden">
                    <div className={`w-4 h-4 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000] ${edu.isOngoing ? 'animate-pulse' : ''
                      }`}>
                      <div className={`w-full h-full rounded-full ${edu.isOngoing ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-300'
                        }`}></div>
                    </div>

                    {/* Mobile connecting line */}
                    <div className="absolute top-1/2 left-4 w-8 h-0.5 bg-gradient-to-r from-black to-transparent"></div>
                  </div>

                  {/* Education Card */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                    } ml-16 lg:ml-0`}>
                    <div className="group relative border-3 border-black bg-white p-6 shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000]">

                      {/* Floating corner accents */}
                      <div className="absolute -top-1.5 -left-1.5 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute -bottom-1.5 -right-1.5 w-2 h-2 bg-black rounded-full"></div>

                      {/* Inner border */}
                      <div className="border-2 border-black p-4 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">

                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-4 right-4 w-16 h-16 border-2 border-black rounded-full"></div>
                          <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-black transform rotate-45"></div>
                        </div>

                        {/* Header Section */}
                        <div className="flex items-start justify-between mb-4 relative z-10">
                          <div className="flex items-center gap-3">
                            <div className="w-14 h-14 border-2 border-black bg-white rounded-full p-2 shadow-[2px_2px_0px_0px_#000] overflow-hidden transform hover:rotate-12 transition-transform duration-300">
                              {edu.logo ? (
                                <Image
                                  src={edu.logo}
                                  alt={`${edu.institution} Logo`}
                                  width={32}
                                  height={32}
                                  className="object-contain w-full h-full rounded-full"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                                  Logo
                                </div>
                              )}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-black leading-tight">
                                {edu.institution}
                              </h3>
                              <p className="text-sm font-semibold text-black opacity-80">
                                {edu.degree}
                              </p>
                            </div>
                          </div>

                          {/* Status Badge */}
                          <div className={`border-2 px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] text-xs font-bold ${getStatusBadgeColor(edu.statusColor)
                            }`}>
                            <div className="flex items-center gap-1">
                              <Award className="w-3 h-3" />
                              {edu.status}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-black leading-relaxed mb-4 relative z-10">
                          {edu.description}
                        </p>

                        {/* Education Details */}
                        <div className="space-y-2 mb-4 relative z-10">
                          <div className="flex items-center gap-2 p-2 bg-gray-50 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                            <Calendar className="w-4 h-4 text-purple-600" />
                            <span className="text-xs text-black font-medium">Duration:</span>
                            <span className="text-xs text-black">{edu.date}</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-gray-50 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                            <MapPin className="w-4 h-4 text-blue-600" />
                            <span className="text-xs text-black font-medium">Location:</span>
                            <span className="text-xs text-black">{edu.location}</span>
                          </div>
                        </div>

                        {/* Skills/Focus Areas */}
                        <div className="mb-4 relative z-10">
                          <h4 className="text-sm font-bold text-black mb-2">Focus Areas</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.skills.map((skill, idx) => (
                              <div key={idx} className="relative">
                                <div className="border border-black bg-white px-2 py-1 shadow-[2px_2px_0px_0px_#000] text-xs font-medium text-black">
                                  {skill}
                                </div>
                                <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-black rounded-full"></div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Ongoing indicator for current studies */}
                        {edu.isOngoing && (
                          <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-yellow-100 to-orange-100 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] relative z-10">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium text-black">Currently Enrolled</span>
                          </div>
                        )}
                      </div>

                      <div className="absolute inset-2 border border-purple-300 opacity-20 pointer-events-none animate-pulse"></div>
                      <div className="absolute inset-3 border border-pink-300 opacity-10 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Timeline End Decoration */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-8 h-8 border-3 border-black bg-white rounded-full shadow-[4px_4px_0px_0px_#000] hidden lg:block">
            <div className="w-full h-full bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Mobile Timeline End */}
          <div className="absolute left-6 bottom-0 w-6 h-6 border-3 border-black bg-white rounded-full shadow-[3px_3px_0px_0px_#000] lg:hidden">
            <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-4 h-4 bg-black rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-3 h-3 bg-black rounded-full opacity-30"></div>
        <div className="absolute top-1/2 right-20 w-2 h-2 bg-black rounded-full opacity-25"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25%); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-bounce-delayed {
          animation: bounce-delayed 2s infinite;
        }
      `}</style>
    </section>
  )
}
