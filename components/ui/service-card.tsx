import Link from "next/link"
import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  learnMoreText: string
}

export default function ServiceCard({ icon, title, description, learnMoreText }: ServiceCardProps) {
  return (
    <div className="group relative">
      {/* 3D Shadow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>

      <div className="relative bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-purple-500/20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 -mr-16 -mt-16 w-40 h-40 bg-purple-500/10 rounded-full blur-xl transform rotate-45 group-hover:bg-purple-500/20 transition-all duration-500"></div>
        <div className="absolute left-0 bottom-0 -ml-16 -mb-16 w-40 h-40 bg-pink-500/10 rounded-full blur-xl transform rotate-45 group-hover:bg-pink-500/20 transition-all duration-500"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors transform group-hover:scale-110 duration-300 shadow-md">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>
          <div className="relative inline-block overflow-hidden group-hover:translate-x-2 transition-transform duration-300">
            <Link
              href="#"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center font-medium"
            >
              {learnMoreText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
