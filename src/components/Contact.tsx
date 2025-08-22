"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
    value: "032 Blk 87 Lot 10, Brgy San Pedro, City of San Jose del Monte, Bulacan, Philippines",
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

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    })
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-8 bg-white flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Get In Touch
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-sm sm:text-base font-medium text-black">Let's</span>
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="text-sm sm:text-base font-medium text-black">Connect</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
              <p className="text-lg text-black leading-relaxed mb-8">
                I'm always open to discuss new opportunities, collaborations, or just having a chat about technology and development.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={contact.title}
                  className="group relative border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-300 hover:scale-105"
                >
                  {/* Floating corner accents */}
                  <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-black rounded-full"></div>
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-black rounded-full"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-black rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-black rounded-full"></div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border-2 border-black bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black">{contact.title}</h4>
                      {contact.link !== "#" ? (
                        <a 
                          href={contact.link}
                          className="text-black hover:underline transition-all duration-200"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-black">{contact.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-black mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.title}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 border-2 border-black bg-white shadow-[3px_3px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-300 hover:scale-110 flex items-center justify-center"
                  >
                    <social.icon className={`w-6 h-6 ${social.color} group-hover:scale-110 transition-transform duration-300`} />
                    
                    {/* Corner accents */}
                    <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-black rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <Card className="border-2 border-black shadow-[6px_6px_0px_0px_#000] bg-white">
              {/* Floating corner accents */}
              <div className="absolute -top-1.5 -left-1.5 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-2 h-2 bg-black rounded-full"></div>
              
              <CardHeader className="border-b-2 border-black">
                <CardTitle className="text-2xl font-bold text-black">Send Message</CardTitle>
                <CardDescription className="text-black">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-black font-medium">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="border-2 border-black focus:ring-0 focus:border-black bg-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-black font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="border-2 border-black focus:ring-0 focus:border-black bg-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-black font-medium">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="border-2 border-black focus:ring-0 focus:border-black bg-white"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-black font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      className="border-2 border-black focus:ring-0 focus:border-black bg-white resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-200 font-semibold py-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
              
              {/* Subtle floating layers */}
              <div className="absolute inset-2 border border-black opacity-20 pointer-events-none"></div>
              <div className="absolute inset-3 border border-black opacity-10 pointer-events-none"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
