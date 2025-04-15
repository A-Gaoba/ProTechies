"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  dict: {
    title: string
    description: string
    cta: string
  }
}

export default function HeroSection({ dict }: HeroSectionProps) {
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
        ></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/15 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-500 leading-tight">
              {dict.title}
            </h1>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-lg">{dict.description}</p>
            <Button
              onClick={() => {
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
              }}
              className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-8 py-6 text-lg h-auto rounded-xl shadow-lg shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10">{dict.cta}</span>
              <span className="absolute inset-0 bg-white/20 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Enhanced decorative elements */}
              <div
                className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/30 rounded-full backdrop-blur-sm z-0 animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
              <div
                className="absolute -bottom-5 -left-5 w-16 h-16 bg-pink-500/30 rounded-full backdrop-blur-sm z-0 animate-pulse"
                style={{ animationDuration: "5s" }}
              ></div>

              {/* 3D Shadow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

              {/* Main illustration container */}
              <div className="relative z-10 bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-purple-500/20 transform hover:scale-[1.02] transition-all duration-500">
                <Image
                  src="https://img.freepik.com/free-vector/flat-design-ui-ux-background_23-2149093996.jpg?t=st=1744736133~exp=1744739733~hmac=deaf4d0346d2cea116c867e6433d1728a3fe336683b937df7429a80c890edc4b&w=996"
                  alt="Web Development Illustration"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />

                {/* Enhanced floating elements */}
                <div className="absolute -top-5 -right-5 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50 rotate-6 transform hover:rotate-12 transition-transform duration-300">
                  <div className="text-purple-500 font-mono text-sm">{"<html>"}</div>
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50 -rotate-6 transform hover:-rotate-12 transition-transform duration-300">
                  <div className="text-pink-500 font-mono text-sm">{"</code>"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
