"use client"

import { Home, User, Briefcase, Heart, GraduationCap, Settings, GitBranch, Mail, ChevronRight } from "lucide-react"
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
  { name: "Experience", url: "#experience", icon: Briefcase },
  { name: "Training", url: "#training", icon: GraduationCap },
  { name: "Education", url: "#education", icon: Settings },
  { name: "Skills", url: "#skills", icon: GitBranch },
  { name: "Projects", url: "#projects", icon: GitBranch },
  { name: "Contact", url: "#contact", icon: Mail },
]

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
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-4 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute top-32 right-6 w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="absolute top-64 left-8 w-1 h-1 bg-black rounded-full"></div>
              <div className="absolute bottom-32 right-4 w-2 h-2 bg-black rounded-full"></div>
            </div>

            {/* Professional Header */}
            <div className={`p-6 border-b-2 border-black transition-all duration-300 ${isScrolled ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="relative">
                <h1 className="text-2xl font-bold text-black tracking-tight transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  Gian Raphael
                </h1>
                <p className="text-xs text-black/70 mt-1 font-medium tracking-wide">
                  Web Developer
                </p>
                <div className="mt-2 w-8 h-0.5 bg-black transform rotate-2 hover:rotate-6 transition-transform duration-300"></div>

                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-3 h-3 border-2 border-black bg-white transform rotate-45"></div>
              </div>
            </div>

            {/* Navigation Menu */}
            <SidebarGroup className="px-4 py-6 flex-1">
              <SidebarGroupLabel className="text-xs font-bold text-black/60 tracking-wider uppercase mb-4 px-3">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {navigationItems.map((item) => {
                    const isActive = activeSection === item.name
                    return (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          onClick={() => handleNavigation(item.url, item.name)}
                          className={`group relative w-full justify-start px-3 py-3 text-black transition-all duration-300 rounded-none border-2 transform hover:scale-105 ${isActive
                              ? 'bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] -rotate-1'
                              : 'border-transparent hover:bg-black hover:text-white hover:border-black hover:shadow-[3px_3px_0px_0px_#000] hover:-rotate-0.5'
                            }`}
                        >
                          <item.icon className={`mr-3 h-4 w-4 transition-all duration-300 ${isActive ? 'rotate-12' : 'group-hover:rotate-6'
                            }`} />
                          <span className="text-sm font-medium tracking-wide flex-1">
                            {item.name}
                          </span>

                          {/* Active indicator */}
                          {isActive && (
                            <ChevronRight className="w-3 h-3 animate-pulse" />
                          )}

                          {/* Hover accent */}
                          <div className={`absolute -right-1 top-1/2 w-1 h-1 bg-current rounded-full transition-all duration-200 transform -translate-y-1/2 ${isActive ? 'opacity-100 scale-150' : 'opacity-0 group-hover:opacity-100'
                            }`}></div>

                          {/* Active corner decoration */}
                          {isActive && (
                            <>
                              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                              <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                            </>
                          )}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
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
          {/* Mobile sidebar trigger */}
          <div className="sticky top-0 z-40 lg:hidden">
            <div className="flex items-center gap-2 p-4 bg-white border-b-2 border-black">
              <SidebarTrigger className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-200" />
              <h2 className="font-bold text-black">Gian Raphael</h2>
            </div>
          </div>

          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
