import type { ReactNode } from "react"

interface ProcessCardProps {
  icon: ReactNode
  title: string
  description: string
  step: number
}

export default function ProcessCard({ icon, title, description, step }: ProcessCardProps) {
  return (
    <div className="group relative">
      {/* 3D Shadow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

      <div className="relative bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-purple-500/20">
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 -mr-8 -mt-8 w-20 h-20 bg-purple-500/10 rounded-full blur-xl transform rotate-45 group-hover:bg-purple-500/20 transition-all duration-500"></div>
        <div className="absolute left-0 bottom-0 -ml-8 -mb-8 w-20 h-20 bg-pink-500/10 rounded-full blur-xl transform rotate-45 group-hover:bg-pink-500/20 transition-all duration-500"></div>

        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-20">
          {step}
        </div>

        <div className="relative z-10">
          <div className="w-16 h-16 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors transform group-hover:scale-110 duration-300 shadow-md">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}
