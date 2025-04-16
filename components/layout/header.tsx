"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import LocaleSwitcher from "@/components/locale-switcher"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatePresence, motion } from "framer-motion"

interface HeaderProps {
  locale: string
  dict: {
    home: string
    about: string
    services: string
    portfolio: string
    contact: string
  }
}

export default function Header({ locale, dict }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)

  // Store section refs to avoid recalculating on every scroll
  const sectionRefs = useRef<{ [key: string]: DOMRect | null }>({})
  const ticking = useRef(false)
  const sections = ["home", "about", "services", "portfolio", "contact"]

  // Throttled scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true

      requestAnimationFrame(() => {
        // Update scrolled state
        const isScrolled = window.scrollY > 50
        setScrolled(isScrolled)

        // Calculate scroll progress
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const currentProgress = Math.max(0, Math.min(1, window.scrollY / scrollHeight))
        setScrollProgress(currentProgress * 100)

        // Update section refs if needed (every 500ms)
        const now = Date.now()
        if (!sectionRefs.current.lastUpdate || now - sectionRefs.current.lastUpdate > 500) {
          sections.forEach((id) => {
            const element = document.getElementById(id)
            if (element) {
              sectionRefs.current[id] = element.getBoundingClientRect()
            }
          })
          sectionRefs.current.lastUpdate = now
        }

        // Determine active section
        const scrollPosition = window.scrollY + 150 // Offset for better UX

        // Default to first section if at the top
        if (scrollPosition < 300) {
          setActiveSection("home")
        } else {
          // Find the section that's currently in view
          let currentSection = "home"
          let minDistance = Number.POSITIVE_INFINITY

          sections.forEach((id) => {
            const element = document.getElementById(id)
            if (element) {
              const rect = element.getBoundingClientRect()
              const sectionTop = rect.top + window.scrollY - 150
              const distance = Math.abs(scrollPosition - sectionTop)

              if (distance < minDistance) {
                minDistance = distance
                currentSection = id
              }
            }
          })

          setActiveSection(currentSection)
        }

        ticking.current = false
      })
    }
  }, [sections])

  // Set up scroll listener with cleanup
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  // Handle smooth scrolling for navigation links
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }

      // Calculate offset based on header height
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md py-2 shadow-md" : "bg-gray-900 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className={`font-bold transition-all duration-300 ${scrolled ? "text-xl" : "text-2xl"}`}>
              <span className="text-white">PRO</span>
              <span className="text-purple-500">TECHIES</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {locale === "ar" ? (
              <div className="flex items-center space-x-reverse space-x-6">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("home")
                  }}
                  className={`transition-colors ${
                    activeSection === "home" ? "text-purple-500" : "text-white hover:text-purple-400"
                  }`}
                >
                  {dict.home}
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("about")
                  }}
                  className={`transition-colors ${
                    activeSection === "about" ? "text-purple-500" : "text-white hover:text-purple-400"
                  }`}
                >
                  {dict.about}
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                  className={`transition-colors ${
                    activeSection === "services" ? "text-purple-500" : "text-white hover:text-purple-400"
                  }`}
                >
                  {dict.services}
                </a>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("portfolio")
                  }}
                  className={`transition-colors ${
                    activeSection === "portfolio" ? "text-purple-500" : "text-white hover:text-purple-400"
                  }`}
                >
                  {dict.portfolio}
                </a>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {dict.contact}
                </Button>
              </div>
            ) : (
              <>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("home")
                  }}
                  className={`transition-colors ${
                    activeSection === "home" ? "text-purple-500" : "text-white hover:text-purple-400"
                  }`}
                >
                  {dict.home}
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("about")
                  }}
                  className={`transition-colors ${
                    activeSection === "about" ? "text-purple-500" : "text-white hover:text-purple-400"
                  }`}
                >
                  {dict.about}
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                  className={`transition-colors ${
                    activeSection === "services" ? "text-purple-500" : "text-white hover:text-purple-400"
                  }`}
                >
                  {dict.services}
                </a>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("portfolio")
                  }}
                  className={`transition-colors ${
                    activeSection === "portfolio" ? "text-purple-500" : "text-white hover:text-purple-400"
                  }`}
                >
                  {dict.portfolio}
                </a>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {dict.contact}
                </Button>
              </>
            )}
            <ThemeToggle />
            <LocaleSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <LocaleSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar - always visible but only filled when scrolled */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 overflow-hidden">
        <div
          className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("home")
                }}
                className={`text-left transition-colors ${
                  activeSection === "home" ? "text-purple-500" : "text-white hover:text-purple-400"
                }`}
              >
                {dict.home}
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
                className={`text-left transition-colors ${
                  activeSection === "about" ? "text-purple-500" : "text-white hover:text-purple-400"
                }`}
              >
                {dict.about}
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("services")
                }}
                className={`text-left transition-colors ${
                  activeSection === "services" ? "text-purple-500" : "text-white hover:text-purple-400"
                }`}
              >
                {dict.services}
              </a>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("portfolio")
                }}
                className={`text-left transition-colors ${
                  activeSection === "portfolio" ? "text-purple-500" : "text-white hover:text-purple-400"
                }`}
              >
                {dict.portfolio}
              </a>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-purple-600 hover:bg-purple-700 text-white w-full"
              >
                {dict.contact}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
