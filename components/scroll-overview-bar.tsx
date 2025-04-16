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
          className="fixed top-0 left-0 right-0 z-50 h-1 w-full max-w-[100vw] overflow-hidden bg-gray-800 dark:bg-gray-800 shadow-md"
        >
          {/* Progress bar */}
          <div
            className="h-1 bg-gradient-to-r from-purple-600 to-pink-600"
            style={{
              width: `${(scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`,
            }}
          />

          {/* Overview bar */}
          <div className="flex items-center justify-between px-2 sm:px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="text-sm font-medium">
              <span className="text-gray-900 dark:text-white">PRO</span>
              <span className="text-purple-500">TECHIEN</span>
            </div>

            <div className="flex overflow-x-auto hide-scrollbar max-w-[70vw] sm:max-w-none">
              <div className="flex space-x-2 sm:space-x-4">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className={`text-xs whitespace-nowrap px-2 py-1 rounded transition-colors ${activeSection === section.id
                        ? "text-white bg-purple-600"
                        : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-600"
                      }`}
                  >
                    {section.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
