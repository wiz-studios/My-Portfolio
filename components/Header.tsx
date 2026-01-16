"use client"

import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const content = document.getElementById("page-content")
    if (content) {
      if (isOpen) {
        content.classList.add("blur-sm", "transition-all", "duration-300")
        document.body.style.overflow = "hidden"
      } else {
        content.classList.remove("blur-sm", "transition-all", "duration-300")
        document.body.style.overflow = ""
      }
    }
  }, [isOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
  ]

  return (
    <header className="bg-background/70 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-display text-xl tracking-tight text-foreground">
            Emmanuel <span className="text-primary">Ronoh</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ href, label }) => (
              <Button
                key={href}
                variant="ghost"
                className="text-sm text-foreground/70 hover:text-foreground"
                asChild
              >
                <Link href={href}>{label}</Link>
              </Button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
            <ModeToggle />
            <Button asChild className="hidden md:inline-flex glow-button">
              <Link href="/contact" rel="noopener noreferrer">
                Contact
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 left-0 h-full w-4/5 md:w-72 bg-background/95 shadow-xl z-50 p-6 flex flex-col border-r border-border/60"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <button className="self-end mb-6" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6 text-muted-foreground" />
              </button>

              {/* Nav Links */}
              <nav className="flex flex-col space-y-6 text-lg font-medium">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
