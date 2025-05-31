"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Heart, ArrowUp, Code, Coffee, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "raphaelalcantara51@gmail.com",
    link: "mailto:raphaelalcantara51@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+63 926 774 3588",
    link: "tel:+639267743588"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Jose del Monte, Bulacan, Philippines",
    link: "#"
  }
]

const socialLinks = [
  {
    icon: Github,
    title: "GitHub",
    link: "https://github.com/CritaxoniaDev",
    color: "text-gray-800"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    link: "https://linkedin.com/in/gianraphael",
    color: "text-blue-600"
  },
  {
    icon: Twitter,
    title: "Twitter",
    link: "https://twitter.com/gianraphael",
    color: "text-blue-400"
  }
]

const quickLinks = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Training", url: "#training" },
  { name: "Education", url: "#education" },
  { name: "Skills", url: "#skills" },
  { name: "Projects", url: "#projects" },
  { name: "Contact", url: "#contact" }
]

const skills = ["React", "TypeScript", "Node.js", "Power Platform", "UI/UX Design"]

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (url: string) => {
    if (url.startsWith("#")) {
      const element = document.querySelector(url)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.open(url, "_blank", "noopener noreferrer")
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="mt-20 relative bg-white overflow-hidden border-dashed border-t-2 border-black">
      {/* Wavy Background SVG */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Multiple wave layers for depth */}
          <path
            d="M0,400 C300,350 600,380 900,320 C1050,280 1150,300 1200,280 L1200,400 Z"
            fill="rgba(0,0,0,0.03)"
          />
          <path
            d="M0,400 C200,360 400,390 600,340 C800,290 1000,320 1200,300 L1200,400 Z"
            fill="rgba(0,0,0,0.05)"
          />
          <path
            d="M0,400 C150,370 350,350 550,360 C750,370 950,340 1200,350 L1200,400 Z"
            fill="rgba(0,0,0,0.02)"
          />

          {/* Decorative dots */}
          <circle cx="100" cy="100" r="2" fill="rgba(0,0,0,0.1)" />
          <circle cx="300" cy="150" r="1.5" fill="rgba(0,0,0,0.08)" />
          <circle cx="500" cy="80" r="2.5" fill="rgba(0,0,0,0.06)" />
          <circle cx="700" cy="120" r="1" fill="rgba(0,0,0,0.1)" />
          <circle cx="900" cy="90" r="2" fill="rgba(0,0,0,0.08)" />
          <circle cx="1100" cy="140" r="1.5" fill="rgba(0,0,0,0.06)" />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Let's Build Something Amazing
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-sm sm:text-base font-medium text-black">Together</span>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="text-sm sm:text-base font-medium text-black">Forward</span>
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

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* About Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative">
              <h3 className="text-2xl font-bold text-black mb-4">Gian Raphael Delos Reyes</h3>
              <div className="absolute -top-2 -left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
            </div>

            <p className="text-black leading-relaxed">
              Passionate developer and designer focused on creating elegant solutions through code.
              I specialize in building user-friendly experiences that solve real-world problems using
              modern technologies and best practices.
            </p>

            {/* Skills Tags */}
            <div>
              <h4 className="text-sm font-bold text-black mb-3">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="border border-black bg-white px-3 py-1 shadow-[2px_2px_0px_0px_#000] text-xs font-medium text-black hover:shadow-[3px_3px_0px_0px_#000] transition-all duration-200">
                      {skill}
                    </div>
                    <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-black rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center border border-black p-3 bg-white shadow-[2px_2px_0px_0px_#000]">
                <Code className="w-5 h-5 mx-auto mb-1 text-black" />
                <div className="text-lg font-bold text-black">50+</div>
                <div className="text-xs text-black">Projects</div>
              </div>
              <div className="text-center border border-black p-3 bg-white shadow-[2px_2px_0px_0px_#000]">
                <Coffee className="w-5 h-5 mx-auto mb-1 text-black" />
                <div className="text-lg font-bold text-black">∞</div>
                <div className="text-xs text-black">Coffee Cups</div>
              </div>
              <div className="text-center border border-black p-3 bg-white shadow-[2px_2px_0px_0px_#000]">
                <Zap className="w-5 h-5 mx-auto mb-1 text-black" />
                <div className="text-lg font-bold text-black">24/7</div>
                <div className="text-xs text-black">Learning</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div className="relative">
              <h3 className="text-xl font-bold text-black mb-4">Quick Links</h3>
              <div className="absolute -top-1 -left-1 w-1 h-1 bg-black rounded-full"></div>
            </div>

            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(link.url)}
                  className="group block w-full text-left text-black hover:text-black transition-all duration-200 py-1"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-black rounded-full group-hover:w-2 transition-all duration-200"></div>
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </div>
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="relative">
              <h3 className="text-xl font-bold text-black mb-4">Get In Touch</h3>
              <div className="absolute -top-1 -left-1 w-1 h-1 bg-black rounded-full"></div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="group">
                  {contact.link !== "#" ? (
                    <a
                      href={contact.link}
                      className="flex items-center gap-3 text-black hover:text-black transition-all duration-200"
                    >
                      <div className="w-8 h-8 border border-black bg-white rounded-full flex items-center justify-center group-hover:shadow-[2px_2px_0px_0px_#000] transition-all duration-200">
                        <contact.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-black/70">{contact.title}</div>
                        <div className="text-sm font-medium text-black group-hover:underline">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 border border-black bg-white rounded-full flex items-center justify-center">
                        <contact.icon className="w-4 h-4 text-black" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-black/70">{contact.title}</div>
                        <div className="text-sm font-medium text-black">{contact.value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-bold text-black mb-3">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] transition-all duration-300 hover:scale-110 flex items-center justify-center"
                  >
                    <social.icon className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform duration-300`} />

                    {/* Corner accents */}
                    <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-black rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-black pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-black">
              <span>© {new Date().getFullYear()} Gian Raphael Delos Reyes. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>and lots of patience.</span>
            </div>

            {/* Back to Top Button */}
            {showScrollTop && (
              <Button
                onClick={scrollToTop}
                className="group relative bg-black text-white hover:bg-white hover:text-black border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-200 font-semibold px-4 py-2"
              >
                <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-200" />
                Back to Top
              </Button>
            )}
          </div>

          {/* Additional decorative elements */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            <div className="w-8 h-0.5 bg-black"></div>
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="w-8 h-0.5 bg-black"></div>
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-black rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-32 left-10 w-2 h-2 bg-black rounded-full opacity-30"></div>
      <div className="absolute top-40 left-20 w-1.5 h-1.5 bg-black rounded-full opacity-25"></div>
      <div className="absolute bottom-20 right-32 w-2.5 h-2.5 bg-black rounded-full opacity-15"></div>

      {/* Corner decorations */}
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-t-2 border-black opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-t-2 border-black opacity-30"></div>
    </footer>
  )
}
