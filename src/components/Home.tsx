"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AuroraText } from "@/components/magicui/aurora-text"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Terminal } from "@/components/magicui/terminal"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import Star5 from "@/components/stars/s5"
import Star11 from "@/components/stars/s11"
import Star21 from "@/components/stars/s21"
import Star35 from "@/components/stars/s35"

const typewriterTitles = [
    "Front-End Developer",
    "Back-End Developer",
    "UI/UX Enthusiast",
    "Web Developer"
]

export function Home() {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
    const [currentText, setCurrentText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [typeSpeed, setTypeSpeed] = useState(150)

    useEffect(() => {
        const handleType = () => {
            const currentTitle = typewriterTitles[currentTitleIndex]

            if (isDeleting) {
                setCurrentText(currentTitle.substring(0, currentText.length - 1))
                setTypeSpeed(50) // Faster deletion
            } else {
                setCurrentText(currentTitle.substring(0, currentText.length + 1))
                setTypeSpeed(100) // Faster typing
            }

            if (!isDeleting && currentText === currentTitle) {
                setTimeout(() => setIsDeleting(true), 1500) // Shorter pause before deleting
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false)
                setCurrentTitleIndex((prev) => (prev + 1) % typewriterTitles.length)
                setTypeSpeed(200) // Brief pause before starting new word
            }
        }

        const timer = setTimeout(handleType, typeSpeed)
        return () => clearTimeout(timer)
    }, [currentText, isDeleting, currentTitleIndex, typeSpeed])

    const handleNavigation = (url: string) => {
        const element = document.querySelector(url)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="home" className="min-h-screen flex flex-col">
            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

                        {/* Left Content */}
                        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">

                            {/* Name Section */}
                            <div className="relative space-y-4 sm:space-y-6">
                                {/* Grid Background - Responsive */}
                                <div className="absolute inset-0 -m-4 sm:-m-6 lg:-m-8 overflow-hidden pointer-events-none">
                                    {/* Grid Lines */}
                                    <div className="absolute inset-0 opacity-20 sm:opacity-30">
                                        {/* Vertical Lines */}
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 19px, #e5e7eb 19px, #e5e7eb 20px)',
                                        }}></div>
                                        {/* Horizontal Lines */}
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, #e5e7eb 19px, #e5e7eb 20px)',
                                        }}></div>
                                    </div>

                                    {/* Circular Shapes - Responsive positioning */}
                                    <div className="absolute top-4 sm:top-6 lg:top-8 left-6 sm:left-8 lg:left-12 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 border border-gray-300 rounded-full opacity-15 sm:opacity-20"></div>
                                    <div className="absolute top-8 sm:top-12 lg:top-20 right-8 sm:right-12 lg:right-16 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 border border-gray-300 rounded-full opacity-10 sm:opacity-15"></div>

                                    {/* Additional smaller rings - Hidden on mobile */}
                                    <div className="hidden sm:block absolute top-6 lg:top-12 right-16 sm:right-24 lg:right-32 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 border border-gray-400 rounded-full opacity-20 sm:opacity-25"></div>
                                    <div className="hidden sm:block absolute bottom-10 sm:bottom-16 lg:bottom-20 left-12 sm:left-18 lg:left-24 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 border border-gray-400 rounded-full opacity-15 sm:opacity-20"></div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <Badge className="mb-3 sm:mb-4 inline-flex items-center gap-2 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-black border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000]">
                                        <span className="text-sm sm:text-lg">👋</span>
                                        <span>Hello, I'm</span>
                                    </Badge>

                                    {/* Name - Responsive typography */}
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.3rem] font-bold text-black tracking-tight sm:leading-tight lg:leading-[5.3rem]">
                                        <AuroraText className="">
                                            Gian Raphael D.
                                        </AuroraText>
                                        <span className="block mt-1 sm:mt-2"><PointerHighlight>Alcantara</PointerHighlight></span>
                                    </h1>
                                </div>
                            </div>

                            {/* Typewriter Titles - Responsive width */}
                            <div className="w-full max-w-sm sm:max-w-md">
                                <Terminal className="w-full">
                                    <div className="flex items-center text-sm sm:text-base">
                                        <span className="text-green-400">$ </span>
                                        <span className="text-green-400 truncate">
                                            {currentText}
                                        </span>
                                        <span className="animate-pulse text-green-400">|</span>
                                    </div>
                                </Terminal>
                            </div>

                            {/* Description - Responsive text */}
                            <div className="border-l-2 sm:border-l-4 border-black pl-4 sm:pl-6">
                                <p className="text-base sm:text-lg text-black leading-relaxed">
                                    Passionate about creating elegant solutions through code and design.
                                    I focus on building clean, user-friendly experiences that solve real problems.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                                <Button
                                    onClick={() => handleNavigation("#projects")}
                                    variant="noShadow"
                                    size="default"
                                    className="group relative relative inline-flex items-center justify-center gap-2 h-10 px-5 text-sm font-medium rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:transform-none bg-[#FFE4C8] dark:bg-[#2A1810] text-[#2A1810] dark:text-[#FFE4C8] border-4 border-double border-[#2A1810] dark:border-[#FFE4C8] shadow-[4px_4px_0_0_#2A1810] dark:shadow-[4px_4px_0_0_#FFE4C8] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#2A1810] dark:hover:shadow-[6px_6px_0_0_#FFE4C8] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_#2A1810] dark:active:shadow-[2px_2px_0_0_#FFE4C8]"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-white"></span>
                                        View My Work
                                        <span className="w-1 h-1 bg-white"></span>
                                    </span>
                                    <ArrowRight className="h-3 w-3 group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-200 relative z-10" />

                                    {/* Corner cuts */}
                                    <div className="absolute top-0 left-0 w-0 h-0 border-l-[4px] border-l-transparent border-t-[4px] border-t-white"></div>
                                    <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[3px] border-r-transparent border-b-[3px] border-b-white"></div>
                                </Button>

                                <Button
                                    onClick={() => handleNavigation("#contact")}
                                    variant="noShadow"
                                    size="default"
                                    className="group relative relative inline-flex items-center justify-center gap-2 h-10 px-5 text-sm font-medium rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:transform-none bg-[#FFE4C8] dark:bg-[#2A1810] text-[#2A1810] dark:text-[#FFE4C8] border-4 border-double border-[#2A1810] dark:border-[#FFE4C8] shadow-[4px_4px_0_0_#2A1810] dark:shadow-[4px_4px_0_0_#FFE4C8] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#2A1810] dark:hover:shadow-[6px_6px_0_0_#FFE4C8] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_#2A1810] dark:active:shadow-[2px_2px_0_0_#FFE4C8]"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-black"></span>
                                        Contact Me
                                        <span className="w-1 h-1 bg-black"></span>
                                    </span>
                                    <ArrowRight className="h-3 w-3 group-hover:translate-x-2 group-hover:-rotate-12 transition-all duration-200 relative z-10" />
                                </Button>
                            </div>
                        </div>

                        {/* Right Content - Profile Image - Minimalist */}
                        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                            <div className="relative">
                                {/* Border background */}
                                <div className="absolute inset-0 bg-black transform translate-x-2 translate-y-2"></div>
                                
                                {/* Main image container */}
                                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 border-2 border-black bg-white overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Gian Raphael Delos Reyes"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
