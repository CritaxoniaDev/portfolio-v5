"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, Award, ExternalLink, FileCheck } from "lucide-react"
import Image from "next/image"

export function TrainingAttended() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const trainings = [
        {
            id: 1,
            title: "Mastering in Power Apps (v27Nov2024)",
            provider: "Microsoft",
            issueDate: "Feb 17, 2025",
            statusColor: "green",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            certificateLink: "#",
            skills: ["Power Apps", "Canvas Apps", "Model-driven Apps", "Power Platform"],
            description: "Comprehensive instructor-led training focused on mastering Microsoft Power Apps for building business applications."
        },
        {
            id: 2,
            title: "Power BI - Turning Data into Actionable Insights (v1Dec2024)",
            provider: "Microsoft",
            issueDate: "Dec 13, 2024",
            statusColor: "green",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            certificateLink: "#",
            skills: ["Power BI", "Data Visualization", "DAX", "Data Analytics"],
            description: "Instructor-led training on transforming raw data into meaningful insights using Microsoft Power BI."
        },
        {
            id: 3,
            title: "Mastering in Power Automate (v24Nov2024)",
            provider: "Microsoft",
            issueDate: "Nov 26, 2024",
            statusColor: "green",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            certificateLink: "#",
            skills: ["Power Automate", "Workflow Automation", "Business Process", "Integration"],
            description: "Advanced instructor-led training on automating business processes using Microsoft Power Automate."
        },
        {
            id: 4,
            title: "Navigating the AI-Driven Future: Education, Ethics and Innovation",
            provider: "Regional Assembly for Information Technology Education (RAITE)",
            issueDate: "Nov 04, 2024",
            status: "Completed",
            statusColor: "blue",
            logo: "/resources/raite-logo.svg",
            certificateLink: "#",
            skills: ["AI Driven Platforms"],
            description: "Regional assembly focusing on the latest developments in information technology education and digital transformation in academic institutions."
        },
        {
            id: 5,
            title: "GDG Cloud Next Extended Manila 2025",
            provider: "Google Developer Group",
            issueDate: "Jan 20, 2025",
            status: "Valid",
            statusColor: "green",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            certificateLink: "#",
            skills: ["AI Agent SDK", "Unified Cloud Security", "Firebase Studio Prototyping"],
            description: "Extended event covering Google Cloud innovations, AI/ML technologies, and modern web development practices presented at Cloud Next 2025."
        }
    ]

    const getStatusBadgeColor = (color: string) => {
        switch (color) {
            case "green":
                return "bg-green-400 border-green-600 text-green-900"
            case "blue":
                return "bg-blue-400 border-blue-600 text-blue-900"
            case "yellow":
                return "bg-yellow-400 border-yellow-600 text-yellow-900"
            default:
                return "bg-gray-400 border-gray-600 text-gray-900"
        }
    }

    return (
        <section id="training" className="min-h-screen py-16 px-8 bg-white flex items-center">
            <div className="max-w-6xl mx-auto w-full">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block relative">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                            Training & Certifications
                        </h2>
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="text-sm sm:text-base font-medium text-black">Trainings</span>
                            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                            <span className="text-sm sm:text-base font-medium text-black">Attended</span>
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

                {/* Training Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
                    {trainings.map((training, index) => (
                        <div
                            key={training.id}
                            className="group relative border-3 border-black bg-white p-6 shadow-[6px_6px_0px_0px_#000]"
                        >
                            {/* Floating corner accents */}
                            <div className="absolute -top-1.5 -left-1.5 w-2 h-2 bg-black rounded-full"></div>
                            <div className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-black rounded-full"></div>
                            <div className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-black rounded-full"></div>
                            <div className="absolute -bottom-1.5 -right-1.5 w-2 h-2 bg-black rounded-full"></div>

                            {/* Inner border */}
                            <div className="border-2 border-black p-4 bg-gradient-to-br from-white to-gray-50">

                                {/* Header Section */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 border-2 border-black bg-white rounded-full p-2 shadow-[2px_2px_0px_0px_#000] overflow-hidden">
                                            {training.logo ? (
                                                <Image
                                                    src={training.logo}
                                                    alt={`${training.provider} Logo`}
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
                                                {training.title}
                                            </h3>
                                            <p className="text-sm font-semibold text-black">
                                                {training.provider}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-black leading-relaxed mb-4">
                                    {training.description}
                                </p>

                                {/* Training Details */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-black" />
                                        <span className="text-xs text-black font-medium">Issue Date:</span>
                                        <span className="text-xs text-black">{training.issueDate}</span>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-bold text-black mb-2">Skills Acquired</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {training.skills.map((skill, idx) => {
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
                                                <div key={idx} className="relative">
                                                    <div className={`border px-2 py-1 rounded-md text-xs font-medium text-black transition-all duration-150 ${gradientClass}`}>
                                                        {skill}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Certificate Link */}
                                {training.certificateLink !== "#" && (
                                    <div className="flex justify-end">
                                        <a
                                            href={training.certificateLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs font-medium text-black hover:underline"
                                        >
                                            <Award className="w-3 h-3" />
                                            View Certificate
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Multiple inner glow layers */}
                            <div className="absolute inset-2 border border-black opacity-20 pointer-events-none"></div>
                            <div className="absolute inset-3 border border-black opacity-10 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-20 right-10 w-3 h-3 bg-black rounded-full opacity-20"></div>
                <div className="absolute bottom-20 left-10 w-2 h-2 bg-black rounded-full opacity-30"></div>
            </div>
        </section>
    )
}
