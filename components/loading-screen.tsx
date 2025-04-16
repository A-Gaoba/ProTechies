"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  // Prevent theme flash during loading
  const isDark =
    mounted && (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches))

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center ${isDark ? "bg-gray-900" : "bg-white"}`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <div className="relative mb-8">
          {/* Animated circles */}
          <motion.div
            className="absolute -top-8 -left-8 w-16 h-16 bg-purple-500/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-6 -right-6 w-12 h-12 bg-pink-500/20 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />

          {/* Logo */}
          <motion.div
            className={`relative z-10 ${isDark ? "bg-gray-800" : "bg-white"} rounded-xl p-6 border ${
              isDark ? "border-gray-700" : "border-gray-200"
            } shadow-xl`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold">
              <span className={isDark ? "text-white" : "text-gray-900"}>PRO</span>
              <span className="text-purple-600">TECHIES</span>
            </h1>

            {/* Code elements */}
            <motion.div
              className={`absolute -top-3 -right-3 ${
                isDark ? "bg-gray-800" : "bg-white"
              } rounded-lg p-2 shadow-lg border ${isDark ? "border-gray-700" : "border-gray-200"} rotate-6`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-purple-500 font-mono text-sm">{"<html>"}</div>
            </motion.div>
            <motion.div
              className={`absolute -bottom-3 -left-3 ${
                isDark ? "bg-gray-800" : "bg-white"
              } rounded-lg p-2 shadow-lg border ${isDark ? "border-gray-700" : "border-gray-200"} -rotate-6`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-pink-500 font-mono text-sm">{"</code>"}</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Loading text */}
        <motion.div
          className="flex justify-center items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className={isDark ? "text-gray-300" : "text-gray-700"}>Loading</span>
          <motion.div className="flex space-x-1">
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                className="w-2 h-2 rounded-full bg-purple-600"
                animate={{
                  y: ["0%", "-50%", "0%"],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: dot * 0.1,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className={`h-1 ${isDark ? "bg-gray-700" : "bg-gray-200"} rounded-full mt-4 w-48 mx-auto overflow-hidden`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Tech keywords */}
        <motion.div
          className={`mt-6 text-xs ${isDark ? "text-gray-400" : "text-gray-500"} font-mono`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <TypewriterEffect
            words={["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions", "Digital Innovation"]}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

// Typewriter effect component
function TypewriterEffect({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        // If deleting, remove the last character
        if (isDeleting) {
          setCurrentText(word.substring(0, currentText.length - 1))
        } else {
          // If typing, add the next character
          setCurrentText(word.substring(0, currentText.length + 1))
        }

        // If we've completed typing the word
        if (!isDeleting && currentText === word) {
          // Wait a bit before starting to delete
          setTimeout(() => setIsDeleting(true), 700)
        }
        // If we've deleted the word
        else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          // Move to the next word
          setCurrentWordIndex((currentWordIndex + 1) % words.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words])

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
