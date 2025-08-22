"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Conversational Marketing AI App",
    description: "An enterprise-grade AI platform revolutionizing customer engagement through natural language processing, automated responses, and intelligent lead generation.",
    technologies: ["Laravel", "TinyMCE API", "PHP", "Blade", "JavaScript", "MySQL", "OpenAI API", "Microsoft Auth API", "CSS"],
    image: "/projects/CMA.png",
    githubLink: "#",
    liveLink: "#",
    objective: "Developed an industry-level AI conversation platform that leverages natural language processing to automate customer interactions and improve lead generation.",
    highlight: "OpenAI Integration"
  },
  {
    title: "MarshalMuse",
    description: "A comprehensive suite of software development tools designed to streamline the development workflow, enhance collaboration, and improve code quality for development teams.",
    technologies: ["Svelte", "Tailwind CSS", "JavaScript", "Firebase", "Firebase Authentication", "Firebase Firestore"],
    image: "/projects/marshalmuse.png",
    githubLink: "https://github.com/CritaxoniaDev/MarshalMuse",
    liveLink: "https://marshalmuse.netlify.app/",
    objective: "Developed a comprehensive development tool suite that enhances team collaboration and streamlines the software development workflow.",
    highlight: "Firebase Integration"
  },
  {
    title: "MinstrelMuse",
    description: "A sleek music discovery platform with YouTube API integration, personalized playlists, and an immersive listening experience for music enthusiasts.",
    technologies: ["React", "Youtube API", "Tailwind", "CSS", "JavaScript", "Firebase Authentication", "Firebase Storage", "Firebase Firestore"],
    image: "/projects/minstrel-muse.png",
    githubLink: "https://github.com/CritaxoniaDev/MinstrelMuse",
    liveLink: "https://minstrelmuse.vercel.app/",
    objective: "Create an engaging music discovery platform with seamless YouTube integration and personalized user experiences.",
    highlight: "YouTube API"
  },
  {
    title: "Meals on Wheels",
    description: "A compassionate solution enabling meal delivery to those in need, featuring volunteer management, meal planning, and real-time delivery tracking.",
    technologies: ["PHP", "Laravel", "Blade", "MySQL", "CSS", "JavaScript", "Tailwind", "Stripe API"],
    image: "/projects/project-6.png",
    githubLink: "https://github.com/CritaxoniaDev/Mealsonwheels",
    liveLink: "#",
    objective: "Design and develop a comprehensive software application for MerryMeal to streamline various processes including registration, meal planning, and delivery management.",
    highlight: "Stripe Integration"
  },
  {
    title: "ABC Cars Portal",
    description: "A feature-rich marketplace connecting buyers and sellers of used vehicles with advanced search, bidding system, and administrative controls.",
    technologies: ["JSP", "CSS", "Bootstrap", "JavaScript", "MySQL", "Java (Spring Framework)", "Spring Boot"],
    image: "/projects/project-5.png",
    githubLink: "https://github.com/CritaxoniaDev/ABCCarsPortal",
    liveLink: "#",
    objective: "Create a comprehensive online platform facilitating the buying and selling of used cars, with distinct functionalities for users and administrators.",
    highlight: "Advanced Search"
  },
  {
    title: "Enomy Finances",
    description: "A sophisticated financial management system with intuitive dashboards, secure transaction processing, and comprehensive reporting tools.",
    technologies: ["JSP", "CSS", "JavaScript", "Bootstrap", "MySQL", "Java (Spring Framework)"],
    image: "/projects/project-4.png",
    githubLink: "https://github.com/CritaxoniaDev/Enomy-Finances",
    liveLink: "#",
    objective: "Design and implement a new computer system for Enomy-Finances, including core system processes and software designs for client presentation.",
    highlight: "Secure Transactions"
  },
  {
    title: "DoBu Martial Arts",
    description: "An immersive digital platform for a martial arts gym showcasing various disciplines, personalized training programs, and membership management.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    image: "/projects/project-2.png",
    githubLink: "https://github.com/CritaxoniaDev/Dobu-Martial-Arts",
    liveLink: "#",
    objective: "Design and create an engaging website for DoBu Martial Arts, showcasing the gym's offerings and allowing users to manage their membership.",
    highlight: "Responsive Design"
  },
]

export function Project() {
  const [isVisible, setIsVisible] = useState(false)
  const [openProject, setOpenProject] = useState<string | null>("item-0") // First project open by default

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleProject = (value: string) => {
    setOpenProject(openProject === value ? null : value)
  }

  return (
    <section id="projects" className="min-h-screen py-20 px-8 bg-white flex items-center">
      <div className="max-w-4xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Featured Projects
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-sm sm:text-base font-medium text-black">My</span>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="text-sm sm:text-base font-medium text-black">Portfolio</span>
            </div>
            {/* Animated underline */}
            <div
              className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-black transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'
                }`}
            ></div>
          </div>
        </div>

        {/* Projects Accordion */}
        <div className="space-y-2">
          {projects.map((project, index) => {
            const itemValue = `item-${index}`
            const isOpen = openProject === itemValue

            return (
              <div
                key={project.title}
                className="border-2 border-black bg-white"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleProject(itemValue)}
                  className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-black">{project.title}</span>
                    <span className="px-2 py-1 bg-black text-white text-xs font-medium">
                      {project.highlight}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-black transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out transform-gpu",
                    isOpen
                      ? "max-h-[1000px] opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2"
                  )}
                >
                  <div className={cn(
                    "border-t-2 border-black p-6 transition-all duration-300 ease-out",
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                      {/* Project Image */}
                      <div className={cn(
                        "relative aspect-video border-2 border-black bg-gray-100 transition-all duration-400 ease-out",
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      )}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Project Details */}
                      <div className={cn(
                        "space-y-6 transition-all duration-500 ease-out",
                        isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      )}>

                        {/* Description */}
                        <div>
                          <h4 className="text-sm font-bold text-black mb-2">DESCRIPTION</h4>
                          <p className="text-sm text-black leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Objective */}
                        <div>
                          <h4 className="text-sm font-bold text-black mb-2">OBJECTIVE</h4>
                          <p className="text-sm text-black leading-relaxed">
                            {project.objective}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-bold text-black mb-2">TECHNOLOGIES</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 border border-black bg-white text-black text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-2">
                          {project.githubLink !== "#" && (
                            <Button
                              asChild
                              size="sm"
                              className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-200"
                            >
                              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          )}

                          {project.liveLink && project.liveLink !== "#" && (
                            <Button
                              asChild
                              size="sm"
                              variant="noShadow"
                              className="bg-white text-black hover:bg-black hover:text-white border-2 border-black transition-all duration-200"
                            >
                              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
