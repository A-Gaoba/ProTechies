"use client"

import { Button } from "@/components/ui/button"
import Image from "@/components/ui/image"
import { motion } from "framer-motion"

interface HeroSectionProps {
  dict: {
    title: string
    description: string
    cta: string
  }
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[100vh] flex items-center"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-500/15 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/15 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
          aria-hidden="true"
        ></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500 leading-tight">
              {dict.title}
            </h1>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-lg">{dict.description}</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                onClick={scrollToContact}
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-8 py-6 text-lg h-auto rounded-xl shadow-lg shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                aria-label="Contact us to get a free quote"
              >
                <span className="relative z-10">{dict.cta}</span>
                <span
                  className="absolute inset-0 bg-white/20 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"
                  aria-hidden="true"
                ></span>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-medium text-gray-800 dark:text-gray-200"
                      aria-hidden="true"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">100+</span> satisfied clients
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">4.9/5</span> average rating
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              {/* Enhanced decorative elements */}
              <div
                className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/30 rounded-full backdrop-blur-sm z-0 animate-pulse"
                style={{ animationDuration: "4s" }}
                aria-hidden="true"
              ></div>
              <div
                className="absolute -bottom-5 -left-5 w-16 h-16 bg-pink-500/30 rounded-full backdrop-blur-sm z-0 animate-pulse"
                style={{ animationDuration: "5s" }}
                aria-hidden="true"
              ></div>

              {/* 3D Shadow effect */}
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"
                aria-hidden="true"
              ></div>

              {/* Main illustration container */}
              <div className="relative z-10 bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-purple-500/20 transform hover:scale-[1.02] transition-all duration-500">
                <Image
                  src="https://img.freepik.com/free-vector/flat-design-ui-ux-background_23-2149093996.jpg?t=st=1744736133~exp=1744739733~hmac=deaf4d0346d2cea116c867e6433d1728a3fe336683b937df7429a80c890edc4b&w=996"
                  alt="Web development illustration showing a developer creating a responsive website"
                  width={400}
                  height={400}
                  className="rounded-lg"
                  priority
                />

                {/* Enhanced floating elements */}
                <div
                  className="absolute -top-5 -right-5 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50 rotate-6 transform hover:rotate-12 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <div className="text-purple-500 font-mono text-sm">{"<html>"}</div>
                </div>
                <div
                  className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50 -rotate-6 transform hover:-rotate-12 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <div className="text-pink-500 font-mono text-sm">{"</code>"}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
