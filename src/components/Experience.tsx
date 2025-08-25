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
            address: "Singapore",
            responsibilities: [
                "Webhosting and web server management.",
                "Hands-on experience in LMS platform technical administration.",
                "Any other tasks related to the business unit."
            ],
            technologies: ["Laravel", "Azure", "PHP", "MySQL", "API Integration", "Microsoft Power Platform", "Postman"]
        }
    ]

    return (
        <section id="experience" className="min-h-screen py-16 px-8 bg-white flex items-center">
            <div className="max-w-6xl mx-auto w-full">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block relative">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                            Work Experience
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
                <div className="relative max-w-6xl mx-auto">
                    {/* Timeline Line - Thicker and more prominent */}
                    <div className="absolute left-1/2 transform -translate-x-1 top-0 bottom-0 w-0.5 bg-black"></div>

                    {/* Experience Entries */}
                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="relative">

                                {/* Timeline Dot - Redesigned */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                    <div className={`w-4 h-4 rounded-full border-2 border-black bg-white ${exp.isCurrent ? 'animate-pulse' : ''}`}>
                                        <div className={`w-full h-full rounded-full ${exp.isCurrent ? 'bg-black' : 'bg-white'}`}></div>
                                    </div>
                                </div>

                                {/* Experience Card - Bigger and Centered */}
                                <div className="flex justify-center px-12 pt-12">
                                    <div className="w-full max-w-4xl">
                                        <div className="relative border border-black bg-white px-6 py-7 rounded-lg hover:border-gray-800 hover:shadow-lg transition-all duration-200">

                                        {/* Header Section */}
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                                            <div className="flex-1">
                                                {/* Period */}
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Calendar className="w-3 h-3 text-gray-500" />
                                                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{exp.period}</span>
                                                </div>

                                                {/* Position & Company */}
                                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                    {exp.position}
                                                </h3>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-sm text-gray-600">@ {exp.company}</span>
                                                    <div className="w-6 h-6 border border-gray-200 bg-gray-50 rounded-full p-0.5 overflow-hidden">
                                                        {exp.logo ? (
                                                            <Image
                                                                src={exp.logo}
                                                                alt={`${exp.company} Logo`}
                                                                width={20}
                                                                height={20}
                                                                className="object-contain w-full h-full rounded-full"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                                                                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <span className="text-sm text-gray-600">{exp.address}</span>
                                            </div>

                                            {/* Status Badge */}
                                            {exp.isCurrent && (
                                                <div className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium border border-green-200">
                                                    {exp.status}
                                                </div>
                                            )}
                                        </div>

                                        {/* Responsibilities */}
                                        <div className="mb-5">
                                            <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">Responsibilities</h4>
                                            <div className="space-y-2">
                                                {exp.responsibilities.map((responsibility, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 group">
                                                        <div className="flex-shrink-0 mt-2">
                                                            <div className="w-1 h-1 bg-gray-400 rounded-full transition-all duration-200 group-hover:bg-gray-600"></div>
                                                        </div>
                                                        <p className="text-sm text-gray-700 leading-relaxed">{responsibility}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">Technologies</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {exp.technologies.map((tech, idx) => {
                                                    const gradients = [
                                                        'bg-gradient-to-r from-blue-50 to-indigo-100 border-blue-200 hover:from-blue-100 hover:to-indigo-200',
                                                        'bg-gradient-to-r from-green-50 to-emerald-100 border-green-200 hover:from-green-100 hover:to-emerald-200',
                                                        'bg-gradient-to-r from-purple-50 to-violet-100 border-purple-200 hover:from-purple-100 hover:to-violet-200',
                                                        'bg-gradient-to-r from-orange-50 to-amber-100 border-orange-200 hover:from-orange-100 hover:to-amber-200',
                                                        'bg-gradient-to-r from-pink-50 to-rose-100 border-pink-200 hover:from-pink-100 hover:to-rose-200',
                                                        'bg-gradient-to-r from-teal-50 to-cyan-100 border-teal-200 hover:from-teal-100 hover:to-cyan-200'
                                                    ];
                                                    const gradientClass = gradients[idx % gradients.length];
                                                    
                                                    return (
                                                        <div 
                                                            key={idx} 
                                                            className={`px-2 py-0.5 border rounded-md transition-all duration-150 ${gradientClass}`}
                                                        >
                                                            <span className="text-xs font-medium text-gray-700">{tech}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Timeline End Decoration */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 border-2 border-black bg-white rounded-full">
                        <div className="w-full h-full bg-white rounded-full"></div>
                    </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-20 right-10 w-4 h-4 bg-black rounded-full opacity-20"></div>
                <div className="absolute bottom-20 left-10 w-3 h-3 bg-black rounded-full opacity-30"></div>
            </div>
        </section>
    )
}
