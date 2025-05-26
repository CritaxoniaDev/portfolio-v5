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
            expiryDate: "—",
            status: "Valid",
            statusColor: "green",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            certificateLink: "#",
            skills: ["Power Apps", "Canvas Apps", "Model-driven Apps", "Power Platform"],
            description: "Comprehensive instructor-led training focused on mastering Microsoft Power Apps for building business applications."
        },
        {
            id: 2,
            title: "Power BI – Turning Data into Actionable Insights (v1Dec2024)",
            provider: "Microsoft",
            issueDate: "Dec 13, 2024",
            expiryDate: "—",
            status: "Valid",
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
            expiryDate: "—",
            status: "Valid",
            statusColor: "green",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            certificateLink: "#",
            skills: ["Power Automate", "Workflow Automation", "Business Process", "Integration"],
            description: "Advanced instructor-led training on automating business processes using Microsoft Power Automate."
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                                    {/* Status Badge */}
                                    <div className={`border-2 px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] text-xs font-bold ${getStatusBadgeColor(training.statusColor)
                                        }`}>
                                        <div className="flex items-center gap-1">
                                            <FileCheck className="w-3 h-3" />
                                            {training.status}
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
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-black" />
                                        <span className="text-xs text-black font-medium">Expiry:</span>
                                        <span className="text-xs text-black">{training.expiryDate}</span>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-bold text-black mb-2">Skills Acquired</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {training.skills.map((skill, idx) => (
                                            <div key={idx} className="relative">
                                                <div className="border border-black bg-white px-2 py-1 shadow-[2px_2px_0px_0px_#000] text-xs font-medium text-black">
                                                    {skill}
                                                </div>
                                                <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-black rounded-full"></div>
                                            </div>
                                        ))}
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
