"use client"

import { Home, User, Code, Briefcase, Heart, GraduationCap, Settings, GitBranch, Mail, ChevronRight } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useState, useEffect } from "react"

const navigationItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "About Me", url: "#about", icon: User },
  { name: "Work Experience", url: "#experience", icon: Briefcase },
  { name: "Project", url: "#projects", icon: GitBranch },
  { name: "Training", url: "#training", icon: GraduationCap },
  { name: "Skill", url: "#skills", icon: Code },
  { name: "Education", url: "#education", icon: Settings },
  { name: "Contact", url: "#contact", icon: Mail },
]

const getFileExtension = (name: string): string => {
  const extensions: { [key: string]: string } = {
    'Home': 'tsx',
    'About Me': 'md',
    'Work Experience': 'json',
    'Training': 'yml',
    'Education': 'txt',
    'Skills': 'js',
    'Projects': 'git',
    'Contact': 'env'
  }
  return extensions[name] || 'file'
}

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const [activeSection, setActiveSection] = useState("Home")
  const [isScrolled, setIsScrolled] = useState(false)

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navigationItems.filter(item => item.url.startsWith("#"))
      const currentSection = sections.find(section => {
        const element = document.querySelector(section.url)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.name)
      } else if (window.scrollY < 100) {
        setActiveSection("Home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (url: string, name: string) => {
    setActiveSection(name)

    if (url.startsWith("#")) {
      const element = document.querySelector(url)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      window.location.href = url
    }
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-white">
        <Sidebar
          side="left"
          variant="sidebar"
          collapsible="icon"
          className="border-r-2 border-black shadow-[4px_0px_0px_0px_#000] z-50"
        >
          <SidebarContent className="bg-white relative overflow-hidden">

            {/* Professional Header - VS Code Style */}
            <div className={`p-4 border-b-2 border-black transition-all duration-300 font-mono ${isScrolled ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="relative">
                {/* VS Code window controls */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
                  </div>

                  {/* File tab indicator */}
                  <div className="bg-black text-white px-2 py-1 text-[10px] font-bold tracking-wider transform skew-x-[-2deg]">
                    ACTIVE
                  </div>
                </div>

                {/* File path breadcrumb */}
                <div className="text-[10px] text-gray-500 mb-2 font-mono tracking-wide">
                  ~/portfolio/src/developer/
                </div>

                {/* Main name with syntax highlighting style */}
                <div className="relative">
                  <span className="text-xs text-gray-500 font-mono">const </span>
                  <h1 className="inline text-xl font-bold text-black tracking-tight transform hover:skew-x-[-1deg] transition-transform duration-200 font-mono">
                    GianRaphael
                  </h1>
                  <span className="text-xs text-gray-500 font-mono"> = {`{`}</span>
                </div>

                {/* Neobrutalist accents */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-black transform rotate-45"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-black"></div>

                {/* Syntax error indicator (decorative) */}
                <div className="absolute top-12 right-2 w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>

                {/* Git branch indicator */}
                <div className="absolute bottom-0 right-0 flex items-center gap-1 text-[10px] text-gray-500 font-mono">
                  <div className="w-2 h-2 border border-gray-400 rounded-full"></div>
                  <span>main</span>
                </div>

                {/* Code folding indicators */}
                <div className="absolute left-0 top-10 space-y-2">
                  <div className="w-2 h-px bg-gray-300"></div>
                  <div className="w-2 h-px bg-gray-300"></div>
                  <div className="w-2 h-px bg-gray-300"></div>
                </div>

                {/* Hover tooltip */}
                <div className="absolute -bottom-8 left-0 bg-black text-white px-2 py-1 text-[10px] font-mono rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  Developer.tsx - Active since {new Date().getFullYear()}
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <SidebarGroup className="px-4 py-6 flex-1">
              <SidebarGroupLabel className="text-xs font-bold text-black/60 tracking-wider uppercase mb-4 px-3">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1 sideBar">
                  {navigationItems.map((item, index) => {
                    const isActive = activeSection === item.name
                    return (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          onClick={() => handleNavigation(item.url, item.name)}
                          className={`group relative w-full justify-start px-3 py-[20px] text-black transition-all duration-150 rounded-none border-2 transform text-xs ${isActive
                            ? 'bg-black text-white border-black shadow-[4px_4px_0px_0px_#000] translate-x-[-2px] translate-y-[-2px]'
                            : 'border-transparent bg-white hover:bg-gray-100 hover:border-black hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px]'
                            }`}
                        >
                          {/* File tree connector lines */}
                          <div className="absolute left-0 top-0 bottom-0 w-4 flex flex-col items-center justify-center pointer-events-none">
                            {/* Vertical line */}
                            {index !== 0 && (
                              <div className="absolute top-0 w-px h-3 bg-gray-400 opacity-60"></div>
                            )}

                            {/* Horizontal connector */}
                            <div className="w-2 h-px bg-gray-400 opacity-60"></div>

                            {/* Vertical continuation line */}
                            {index !== navigationItems.length - 1 && (
                              <div className="absolute bottom-0 w-px h-3 bg-gray-400 opacity-60"></div>
                            )}
                          </div>

                          {/* Folder/File icon with VS Code styling */}
                          <div className="relative ml-4 mr-2 flex items-center">
                            {/* Folder expand/collapse indicator */}
                            <div className={`mr-1 transition-transform duration-150 ${isActive ? 'rotate-90' : 'rotate-0'
                              }`}>
                              <div className="w-0 h-0 border-l-[4px] border-l-black border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></div>
                            </div>

                            <item.icon className={`h-4 w-4 transition-all duration-200 ${isActive ? 'text-white scale-110' : 'text-gray-700 group-hover:text-black group-hover:scale-105'
                              }`} />
                          </div>

                          {/* File/Folder name with VS Code typography */}
                          <span className={`text-sm font-medium tracking-normal flex-1 relative z-10 ${isActive ? 'text-white font-semibold' : 'text-gray-800 group-hover:text-black'
                            }`}>
                            {item.name}
                          </span>

                          {/* File extension badge (VS Code style) */}
                          <div className={`text-[10px] px-1.5 py-0.5 rounded-sm font-mono transition-all duration-150 ${isActive
                            ? 'bg-white text-black'
                            : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                            }`}>
                            {getFileExtension(item.name)}
                          </div>

                          {/* Active file indicator (VS Code tab style) */}
                          {isActive && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
                          )}

                          {/* Hover state border accent */}
                          <div className={`absolute inset-0 border-l-2 pointer-events-none transition-all duration-150 ${isActive ? 'border-l-white' : 'border-l-transparent group-hover:border-l-gray-400'
                            }`}></div>

                          {/* Neobrutalist corner cuts */}
                          <div className={`absolute top-0 right-0 w-0 h-0 transition-all duration-150 ${isActive
                            ? 'border-r-[4px] border-r-transparent border-t-[4px] border-t-white'
                            : 'border-r-[3px] border-r-transparent border-t-[3px] border-t-black opacity-0 group-hover:opacity-100'
                            }`}></div>

                          {/* Modified indicator (VS Code unsaved file dot) */}
                          {isActive && (
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full border border-black"></div>
                          )}

                          {/* Breadcrumb path on hover */}
                          <div className={`absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 text-xs font-mono rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 ${isActive ? 'hidden' : ''
                            }`}>
                            ~/portfolio/{item.name.toLowerCase().replace(' ', '-')}
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
                {/* Special Resume Button */}
                <button
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-blue-700 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 font-bold rounded shadow-[2px_2px_0px_0px_#2563eb] hover:bg-blue-200 hover:shadow-[4px_4px_0px_0px_#2563eb] transition-all duration-200 text-sm"
                  type="button"
                >
                  
                  View Resume
                </button>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Enhanced Footer Decoration */}
            <div className="p-6 border-t border-black/20">
              <div className="flex items-center justify-center mb-3">
                <div className="w-4 h-0.5 bg-black transform -rotate-12 hover:rotate-12 transition-transform duration-500"></div>
                <div className="mx-2 w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
                <div className="w-4 h-0.5 bg-black transform rotate-12 hover:-rotate-12 transition-transform duration-500"></div>
              </div>

              {/* Status indicator */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-xs text-black/60">
                  <Heart className="w-3 h-3 text-red-500 animate-pulse fill-current" />
                  <span className="font-medium">Made with love</span>
                </div>
              </div>
            </div>

            {/* Floating corner decorations */}
            <div className="absolute top-4 right-4 w-2 h-2 border border-black transform rotate-45 opacity-30"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 border border-black transform rotate-45 opacity-30"></div>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1 bg-white relative">
          {/* Mobile sidebar trigger - Fixed Header */}
          <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
            <div className="flex items-center gap-2 p-4 bg-white border-b-2 border-black">
              <SidebarTrigger className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-200" />
              <h2 className="font-bold text-black">Gian Raphael</h2>
            </div>
          </div>

          {/* Add padding to main content to account for fixed header */}
          <main className="flex-1 overflow-auto pt-20 lg:pt-0">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
