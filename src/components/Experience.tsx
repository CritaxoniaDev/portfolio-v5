"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Experience() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const experiences = [
        {
            id: 1,
            period: "Nov 2024 - Present",
            position: "Technology Associate",
            company: "Lithan EduClaaS",
            logo: "/resources/educlaas-logo.png", // Add your logo to public/images/
            status: "Current Position",
            isCurrent: true,
            responsibilities: [
                "Webhosting and web server management",
                "Hands-on experience in LMS platform technical administration",
                "Any other tasks related to the business unit"
            ],
            technologies: ["Laravel", "PHP", "MySQL", "OpenAI API"]
        }
    ]

    return (
        <section id="experience" className="min-h-screen py-16 px-8 bg-white flex items-center">
            <div className="max-w-6xl mx-auto w-full">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block relative">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                            Experience
                        </h2>
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="text-sm sm:text-base font-medium text-black">Professional</span>
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
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black via-gray-400 to-black"></div>

                    {/* Experience Entries */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="relative flex items-start gap-8">

                                {/* Timeline Dot */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className={`w-6 h-6 rounded-full border-3 border-black bg-white shadow-[4px_4px_0px_0px_#000] ${exp.isCurrent ? 'animate-pulse' : ''
                                        }`}>
                                        <div className={`w-full h-full rounded-full ${exp.isCurrent ? 'bg-black' : 'bg-gray-300'
                                            }`}></div>
                                    </div>

                                    {/* Floating decorative elements around dot */}
                                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-black rounded-full"></div>
                                    <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
                                </div>

                                {/* Experience Card */}
                                <div className="flex-1">
                                    <div className="relative border-3 border-black bg-white p-6 shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-300">

                                        {/* Corner accents */}
                                        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black rounded-full"></div>
                                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black rounded-full"></div>
                                        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black rounded-full"></div>
                                        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black rounded-full"></div>

                                        {/* Inner glowing border */}
                                        <div className="border-2 border-black p-4 bg-gradient-to-br from-white to-gray-50">

                                            {/* Header Section */}
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                                                <div className="flex-1">
                                                    {/* Period */}
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Calendar className="w-4 h-4 text-black" />
                                                        <span className="text-sm font-medium text-black">{exp.period}</span>
                                                    </div>

                                                    {/* Position & Company */}
                                                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                                                        {exp.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-lg font-semibold text-black">@ {exp.company}</span>
                                                        <div className="w-10 h-10 border-2 border-black bg-white rounded-full p-1 shadow-[2px_2px_0px_0px_#000] overflow-hidden">
                                                            {exp.logo ? (
                                                                <Image
                                                                    src={exp.logo}
                                                                    alt={`${exp.company} Logo`}
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
                                                    </div>
                                                </div>

                                                {/* Status Badge */}
                                                {exp.isCurrent && (
                                                    <div className="border-2 border-black bg-black text-white px-3 py-1 shadow-[3px_3px_0px_0px_#666] text-sm font-bold">
                                                        {exp.status}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Responsibilities */}
                                            <div className="mb-6">
                                                <h4 className="text-lg font-bold text-black mb-4">Responsibilities</h4>
                                                <div className="space-y-3">
                                                    {exp.responsibilities.map((responsibility, idx) => (
                                                        <div key={idx} className="flex items-start gap-3">
                                                            {/* Glowing bullet */}
                                                            <div className="flex-shrink-0 mt-2">
                                                                <div className="w-2 h-2 bg-black rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]"></div>
                                                            </div>
                                                            <p className="text-base text-black leading-relaxed">{responsibility}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Technologies */}
                                            <div>
                                                <h4 className="text-lg font-bold text-black mb-4">Technologies Used</h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {exp.technologies.map((tech, idx) => (
                                                        <div key={idx} className="relative">
                                                            {/* 3D Tag */}
                                                            <div className="border-2 border-black bg-white px-3 py-1 shadow-[3px_3px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-200">
                                                                <span className="text-sm font-semibold text-black">{tech}</span>
                                                            </div>

                                                            {/* Floating accent dots */}
                                                            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-black rounded-full"></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Multiple inner glow layers */}
                                        <div className="absolute inset-2 border border-black opacity-20 pointer-events-none"></div>
                                        <div className="absolute inset-3 border border-black opacity-10 pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Timeline End Decoration */}
                    <div className="absolute left-6 bottom-0 w-6 h-6 border-2 border-black bg-white rounded-full shadow-[2px_2px_0px_0px_#000]">
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-white rounded-full"></div>
                    </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-20 right-10 w-4 h-4 bg-black rounded-full opacity-20"></div>
                <div className="absolute bottom-20 left-10 w-3 h-3 bg-black rounded-full opacity-30"></div>
            </div>
        </section>
    )
}
