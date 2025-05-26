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
              className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-black transition-all duration-1000 ${
                isVisible ? 'w-full' : 'w-0'
              }`}
            ></div>
            {/* Visual flair dots */}
            <div className="absolute -top-3 -right-4 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute -bottom-4 -left-3 w-1.5 h-1.5 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black via-gray-400 to-black hidden lg:block"></div>
          
          {/* Education Entries */}
          <div className="space-y-12 lg:space-y-16">
            {educationData.map((edu, index) => {
              const isLeft = index % 2 === 0
              
              return (
                <div key={edu.id} className={`relative flex items-center ${
                  isLeft ? 'lg:justify-start' : 'lg:justify-end'
                }`}>
                  
                  {/* Timeline Dot (Center) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
                    <div className={`w-6 h-6 rounded-full border-3 border-black bg-white shadow-[4px_4px_0px_0px_#000] ${
                      edu.isOngoing ? 'animate-pulse' : ''
                    }`}>
                      <div className={`w-full h-full rounded-full ${
                        edu.isOngoing ? 'bg-black' : 'bg-gray-300'
                      }`}></div>
                    </div>
                    
                    {/* Floating decorative elements around dot */}
                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
                  </div>

                  {/* Education Card */}
                  <div className={`w-full lg:w-5/12 ${
                    isLeft ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                  }`}>
                    <div className="relative border-3 border-black bg-white p-6 shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-300">
                      
                      {/* Corner accents */}
                      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black rounded-full"></div>
                      <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black rounded-full"></div>
                      <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black rounded-full"></div>
                      <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black rounded-full"></div>

                      {/* Inner glowing border */}
                      <div className="border-2 border-black p-4 bg-gradient-to-br from-white to-gray-50">
                        
                        {/* Institution Logo */}
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 border-3 border-black bg-white rounded-full p-2 shadow-[4px_4px_0px_0px_#000] overflow-hidden">
                            {edu.logo ? (
                              <Image
                                src={edu.logo}
                                alt={`${edu.institution} Logo`}
                                width={48}
                                height={48}
                                className="object-contain w-full h-full rounded-full"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                                Logo
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Institution Name */}
                        <h3 className="text-xl sm:text-2xl font-bold text-black text-center mb-3">
                          {edu.institution}
                        </h3>

                        {/* Degree */}
                        <div className="border-l-3 border-black pl-3 mb-4">
                          <p className="text-base sm:text-lg font-semibold text-black">
                            {edu.degree}
                          </p>
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 text-black" />
                          <span className="text-sm font-medium text-black">{edu.date}</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="w-4 h-4 text-black" />
                          <span className="text-sm font-medium text-black">{edu.location}</span>
                        </div>

                        {/* Status Badge */}
                        <div className="flex justify-center">
                          <div className={`border-2 px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] text-sm font-bold ${
                            getStatusBadgeColor(edu.statusColor)
                          }`}>
                            <div className="flex items-center gap-1">
                              <Award className="w-3 h-3" />
                              {edu.status}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Multiple inner glow layers */}
                      <div className="absolute inset-2 border border-black opacity-20 pointer-events-none"></div>
                      <div className="absolute inset-3 border border-black opacity-10 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Mobile Timeline Dot (Left side for mobile) */}
                  <div className="absolute left-4 top-8 z-10 lg:hidden">
                    <div className={`w-4 h-4 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000] ${
                      edu.isOngoing ? 'animate-pulse' : ''
                    }`}>
                      <div className={`w-full h-full rounded-full ${
                        edu.isOngoing ? 'bg-black' : 'bg-gray-300'
                      }`}></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black via-gray-400 to-black lg:hidden"></div>

          {/* Timeline End Decoration */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 border-2 border-black bg-white rounded-full shadow-[2px_2px_0px_0px_#000] hidden lg:block">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-white rounded-full"></div>
          </div>

          {/* Mobile Timeline End */}
          <div className="absolute left-4 bottom-0 w-4 h-4 border-2 border-black bg-white rounded-full shadow-[2px_2px_0px_0px_#000] lg:hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-white rounded-full"></div>
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
