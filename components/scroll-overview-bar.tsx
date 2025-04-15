"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useTheme } from "next-themes"

interface ScrollOverviewBarProps {
  sections: {
    id: string
    name: string
  }[]
}

export default function ScrollOverviewBar({ sections }: ScrollOverviewBarProps) {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("")
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const sectionElements = sections
        .map((section) => ({
          id: section.id,
          element: document.getElementById(section.id),
        }))
        .filter((section) => section.element !== null)

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i]
        if (element && element.offsetTop - 100 <= scrollY) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollY, sections])

  return (
    <AnimatePresence>
      {scrollY > 100 && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed top-0 left-0 right-0 z-50 h-1 ${isDark ? "bg-gray-800" : "bg-white"} shadow-md`}
        >
          {/* Progress bar */}
          <div
            className="h-1 bg-gradient-to-r from-purple-600 to-pink-600"
            style={{
              width: `${(scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`,
            }}
          />

          {/* Overview bar */}
          <div
            className={`flex items-center justify-between px-4 py-2 ${
              isDark ? "bg-gray-900/90" : "bg-white/90"
            } backdrop-blur-md border-b ${isDark ? "border-gray-800" : "border-gray-200"}`}
          >
            <div className="text-sm font-medium">
              <span className={isDark ? "text-white" : "text-gray-900"}>PRO</span>
              <span className="text-purple-500">TECHIEN</span>
            </div>

            <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className={`text-xs whitespace-nowrap px-2 py-1 rounded transition-colors ${
                    activeSection === section.id
                      ? "text-white bg-purple-600"
                      : `${isDark ? "text-gray-300" : "text-gray-700"} hover:text-purple-600`
                  }`}
                >
                  {section.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
