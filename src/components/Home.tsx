"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AuroraText } from "@/components/magicui/aurora-text"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Terminal } from "@/components/magicui/terminal"
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
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.3rem] font-bold text-black leading-tight sm:leading-tight lg:leading-[5.3rem]">
                                        <AuroraText className="inline-block">
                                            Gian Raphael
                                        </AuroraText>
                                        <br />
                                        <span className="block mt-1 sm:mt-2">Delos Reyes</span>
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
                                    className="group relative font-bold text-xs sm:text-sm w-full sm:w-auto bg-black text-white border-3 border-black rounded-none transform transition-all duration-100 hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-[-1px] active:translate-y-[-1px] active:shadow-[1px_1px_0px_0px_#000] uppercase tracking-wide py-3 px-5 skew-x-[-1deg] hover:skew-x-0"
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
                                    className="group relative font-bold text-xs sm:text-sm w-full sm:w-auto bg-white text-black border-black rounded-none transform transition-all duration-100 hover:translate-x-[6px] hover:translate-y-[-6px] hover:shadow-[-6px_6px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[-1px] active:shadow-[-1px_1px_0px_0px_#000] uppercase tracking-wide py-3 px-5 skew-x-[1deg] hover:skew-x-0 overflow-visible"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-black"></span>
                                        Contact Me
                                        <span className="w-1 h-1 bg-black"></span>
                                    </span>
                                    <ArrowRight className="h-3 w-3 group-hover:translate-x-2 group-hover:-rotate-12 transition-all duration-200 relative z-10" />

                                    {/* Outer outline frame */}
                                    <div className="absolute -inset-2 border-2 border-black opacity-60 group-hover:opacity-100 group-hover:-inset-3 transition-all duration-100 pointer-events-none"></div>

                                    {/* Corner cuts */}
                                    <div className="absolute top-0 right-0 w-0 h-0 border-r-[4px] border-r-transparent border-t-[4px] border-t-black"></div>
                                    <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[3px] border-l-transparent border-b-[3px] border-b-black"></div>

                                    {/* Inner outline for extra depth */}
                                    <div className="absolute inset-1 border border-black opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-100"></div>

                                    {/* Noise texture effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-8 transition-opacity duration-200" style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                                    }}></div>
                                </Button>
                            </div>
                        </div>

                        {/* Right Content - Profile Image - Responsive */}
                        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                            <div className="relative">
                                {/* Main image container with 3D effect and floating stars - Responsive sizing */}
                                <div className="relative border-2 sm:border-3 lg:border-4 border-black bg-white p-1 sm:p-1.5 lg:p-2 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] lg:shadow-[12px_12px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] sm:hover:shadow-[12px_12px_0px_0px_#000] lg:hover:shadow-[16px_16px_0px_0px_#000] transition-all duration-300">

                                    {/* Floating Stars - Positioned around the image */}
                                    {/* Top Left Star */}
                                    <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 animate-bounce z-20">
                                        <Star21
                                            size={24}
                                            color="#000000"
                                            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 drop-shadow-md hover:scale-110 transition-transform duration-200"
                                        />
                                    </div>

                                    {/* Top Right Star */}
                                    <div className="absolute -top-3 -right-5 sm:-top-4 sm:-right-7 lg:-top-6 lg:-right-9 animate-pulse z-20">
                                        <Star35
                                            size={20}
                                            color="red"
                                            className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 drop-shadow-md hover:scale-110 transition-transform duration-200"
                                        />
                                    </div>

                                    {/* Bottom Left Star */}
                                    <div className="absolute -bottom-5 -left-3 sm:-bottom-7 sm:-left-4 lg:-bottom-8 lg:-left-6 animate-bounce z-20" style={{ animationDelay: '0.5s' }}>
                                        <Star11
                                            size={22}
                                            color="#000000"
                                            className="w-5.5 h-5.5 sm:w-7 sm:h-7 lg:w-9 lg:h-9 drop-shadow-md hover:scale-110 transition-transform duration-200"
                                        />
                                    </div>

                                    {/* Bottom Right Star */}
                                    <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-7 lg:-right-7 animate-pulse z-20" style={{ animationDelay: '1s' }}>
                                        <Star5
                                            size={26}
                                            color="red"
                                            className="w-6.5 h-6.5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 drop-shadow-md hover:scale-110 transition-transform duration-200"
                                        />
                                    </div>

                                    {/* Additional floating stars - Hidden on mobile for cleaner look */}
                                    <div className="hidden sm:block absolute -top-10 left-1/4 lg:-top-12 lg:left-1/3 animate-bounce z-20" style={{ animationDelay: '1.5s' }}>
                                        <Star21
                                            size={16}
                                            color="red"
                                            className="w-4 h-4 lg:w-6 lg:h-6 opacity-70 hover:opacity-100 hover:scale-125 transition-all duration-200"
                                        />
                                    </div>

                                    <div className="hidden sm:block absolute -right-10 top-1/3 lg:-right-12 lg:top-1/4 animate-pulse z-20" style={{ animationDelay: '2s' }}>
                                        <Star35
                                            size={14}
                                            color="#000000"
                                            className="w-3.5 h-3.5 lg:w-5 lg:h-5 opacity-60 hover:opacity-100 hover:scale-125 transition-all duration-200"
                                        />
                                    </div>

                                    <div className="hidden sm:block absolute -bottom-8 left-1/3 lg:-bottom-10 lg:left-1/4 animate-bounce z-20" style={{ animationDelay: '0.8s' }}>
                                        <Star11
                                            size={15}
                                            color="#000000"
                                            className="w-4 h-4 lg:w-5 lg:h-5 opacity-50 hover:opacity-100 hover:scale-125 transition-all duration-200"
                                        />
                                    </div>

                                    <div className="hidden lg:block absolute -left-14 top-1/2 animate-pulse z-20" style={{ animationDelay: '2.5s' }}>
                                        <Star5
                                            size={18}
                                            color="#000000"
                                            className="w-4.5 h-4.5 opacity-40 hover:opacity-100 hover:scale-150 transition-all duration-200"
                                        />
                                    </div>

                                    {/* Extra large accent stars for desktop */}
                                    <div className="hidden lg:block absolute -top-16 right-1/4 animate-bounce z-20" style={{ animationDelay: '3s' }}>
                                        <Star21
                                            size={28}
                                            color="#000000"
                                            className="w-7 h-7 opacity-30 hover:opacity-80 hover:scale-125 transition-all duration-200"
                                        />
                                    </div>

                                    <div className="hidden lg:block absolute -bottom-12 -right-10 animate-pulse z-20" style={{ animationDelay: '2.8s' }}>
                                        <Star35
                                            size={24}
                                            color="#000000"
                                            className="w-6 h-6 opacity-35 hover:opacity-80 hover:scale-125 transition-all duration-200"
                                        />
                                    </div>

                                    {/* Inner border glow effect */}
                                    <div className="border border-black sm:border-2 bg-gradient-to-br from-white to-gray-50 p-0.5 sm:p-1">
                                        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gray-200 border border-black relative overflow-hidden">
                                            {/* Placeholder for profile image */}
                                            <div className="w-full h-full flex items-center justify-center text-black font-bold text-sm sm:text-base lg:text-lg">
                                                Profile Image
                                            </div>
                                            {/* You can replace this with your actual image: */}
                                            <Image
                                                src="/images/profile.jpg"
                                                alt="Gian Raphael Delos Reyes"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                                            />
                                        </div>
                                    </div>

                                    {/* Inner glow accent */}
                                    <div className="absolute inset-1 sm:inset-2 border border-black opacity-20 pointer-events-none"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
