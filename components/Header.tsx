"use client"

import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    setIsOpen(true)
    setIsSidebarOpen(true)
    document.body.style.overflow = "hidden"
  }
  const closeSidebar = () => {
    setIsClosing(true)
    setIsSidebarOpen(false)
    document.body.style.overflow = ""
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 300)
  }

  useEffect(() => {
    const content = document.getElementById("page-content")
    if (content) {
      if (isSidebarOpen) {
        content.classList.add("blur-sm", "transition-all", "duration-300")
      } else {
        content.classList.remove("blur-sm", "transition-all", "duration-300")
      }
    }
  }, [isSidebarOpen])

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border/40">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold gradient-text">
            ER
          </Link>
          <div className="hidden md:flex space-x-1">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/experience">Experience</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/projects">Projects</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/skills">Skills</Link>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={openSidebar}>
              <Menu className="h-6 w-6" />
            </Button>
            <ModeToggle />
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact"  rel="noopener noreferrer">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      >
        {/* Add a semi-transparent background */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-4/5 md:w-64 bg-background shadow-lg p-6 flex flex-col transition-transform duration-300 ${
            isOpen && !isClosing ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <button className="self-end mb-4" onClick={closeSidebar}>
            <X className="h-6 w-6 text-gray-600" />
          </button>
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-lg" onClick={closeSidebar}>
              Home
            </Link>
            <Link href="/about" className="text-lg" onClick={closeSidebar}>
              About
            </Link>
            <Link href="/experience" className="text-lg" onClick={closeSidebar}>
              Experience
            </Link>
            <Link href="/projects" className="text-lg" onClick={closeSidebar}>
              Projects
            </Link>
            <Link href="/skills" className="text-lg" onClick={closeSidebar}>
              Skills
            </Link>
            <Link href="/contact" className="text-lg" onClick={closeSidebar}>
              Contact
            </Link>
          </nav>
        </aside>
      </div>
    </header>
  )
}

