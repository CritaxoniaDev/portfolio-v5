"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "DoBu Martial Arts",
    description: "An immersive digital platform for a martial arts gym showcasing various disciplines, personalized training programs, and membership management.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    image: "/projects/project-2.png", // Replace with actual image path
    githubLink: "https://github.com/CritaxoniaDev/Dobu-Martial-Arts",
    liveLink: "#", // Add if available
    objective: "Design and create an engaging website for DoBu Martial Arts, showcasing the gym's offerings and allowing users to manage their membership.",
    highlight: "Responsive Design"
  },
  {
    title: "Enomy Finances",
    description: "A sophisticated financial management system with intuitive dashboards, secure transaction processing, and comprehensive reporting tools.",
    technologies: ["JSP", "CSS", "JavaScript", "Bootstrap", "MySQL", "Java (Spring Framework)"],
    image: "/projects/project-4.png", // Replace with actual image path
    githubLink: "https://github.com/CritaxoniaDev/Enomy-Finances",
    liveLink: "#", // Add if available
    objective: "Design and implement a new computer system for Enomy-Finances, including core system processes and software designs for client presentation.",
    highlight: "Secure Transactions"
  },
  {
    title: "ABC Cars Portal",
    description: "A feature-rich marketplace connecting buyers and sellers of used vehicles with advanced search, bidding system, and administrative controls.",
    technologies: ["JSP", "CSS", "Bootstrap", "JavaScript", "MySQL", "Java (Spring Framework)", "Spring Boot"],
    image: "/projects/project-5.png", // Replace with actual image path
    githubLink: "https://github.com/CritaxoniaDev/ABCCarsPortal",
    liveLink: "#", // Add if available
    objective: "Create a comprehensive online platform facilitating the buying and selling of used cars, with distinct functionalities for users and administrators.",
    highlight: "Advanced Search"
  },
  {
    title: "Meals on Wheels",
    description: "A compassionate solution enabling meal delivery to those in need, featuring volunteer management, meal planning, and real-time delivery tracking.",
    technologies: ["PHP", "Laravel", "Blade", "MySQL", "CSS", "JavaScript", "Tailwind", "Stripe API"],
    image: "/projects/project-6.png", // Replace with actual image path
    githubLink: "https://github.com/CritaxoniaDev/Mealsonwheels",
    liveLink: "#", // Add if available
    objective: "Design and develop a comprehensive software application for MerryMeal to streamline various processes including registration, meal planning, and delivery management.",
    highlight: "Stripe Integration"
  },
  {
    title: "MinstrelMuse",
    description: "A sleek music discovery platform with YouTube API integration, personalized playlists, and an immersive listening experience for music enthusiasts.",
    technologies: ["React", "Youtube API", "Tailwind", "CSS", "JavaScript", "Firebase Authentication", "Firebase Storage", "Firebase Firestore"],
    image: "/projects/minstrel-muse.png", // Replace with actual image path
    githubLink: "https://github.com/CritaxoniaDev/MinstrelMuse",
    liveLink: "https://minstrelmuse.vercel.app/",
    objective: "Create an engaging music discovery platform with seamless YouTube integration and personalized user experiences.",
    highlight: "YouTube API"
  },
  {
    title: "Conversational Marketing AI App",
    description: "An enterprise-grade AI platform revolutionizing customer engagement through natural language processing, automated responses, and intelligent lead generation.",
    technologies: ["Laravel", "TinyMCE API", "PHP", "Blade", "JavaScript", "MySQL", "OpenAI API", "Microsoft Auth API", "CSS"],
    image: "/projects/CMA.png", // Replace with actual image path
    githubLink: "#",
    liveLink: "#", // Add if available
    objective: "Developed an industry-level AI conversation platform that leverages natural language processing to automate customer interactions and improve lead generation.",
    highlight: "OpenAI Integration"
  },
  {
    title: "MarshalMuse",
    description: "A comprehensive suite of software development tools designed to streamline the development workflow, enhance collaboration, and improve code quality for development teams.",
    technologies: ["Svelte", "Tailwind CSS", "JavaScript", "Firebase", "Firebase Authentication", "Firebase Firestore"],
    image: "/projects/marshalmuse.png", // Replace with actual image path
    githubLink: "https://github.com/CritaxoniaDev/MarshalMuse",
    liveLink: "https://marshalmuse.netlify.app/",
    objective: "Developed a comprehensive development tool suite that enhances team collaboration and streamlines the software development workflow.",
    highlight: "Firebase Integration"
  }
]

export function Project() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="projects" className="min-h-screen py-20 px-8 bg-white flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-20">
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
              className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-black transition-all duration-1000 ${
                isVisible ? 'w-full' : 'w-0'
              }`}
            ></div>
            {/* Visual flair dots */}
            <div className="absolute -top-3 -right-4 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute -bottom-4 -left-3 w-1.5 h-1.5 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative border-3 border-black bg-white shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000]"
            >
              {/* Floating corner accents */}
              <div className="absolute -top-1.5 -left-1.5 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-2 h-2 bg-black rounded-full"></div>
              
              {/* Project Image */}
              <div className="relative h-48 border-b-2 border-black overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Project Image</span>
                  {/* Replace with actual image: */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  /> 
                </div>
                
                {/* Highlight Badge */}
                <div className="absolute top-3 right-3 bg-black text-white px-2 py-1 text-xs font-medium">
                  {project.highlight}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-black">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-black leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 border border-black bg-white text-black text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 border border-black bg-gray-100 text-black text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
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
              
              {/* Subtle floating layers */}
              <div className="absolute inset-2 border border-black opacity-20 pointer-events-none"></div>
              <div className="absolute inset-3 border border-black opacity-10 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
