interface SectionTitleProps {
  title: string
  description?: string
  center?: boolean
  light?: boolean
}

export default function SectionTitle({ title, description, center = false, light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 inline-block relative ${light ? "text-gray-900 dark:text-white" : "text-purple-600 dark:text-purple-500"}`}
      >
        {title}
        <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full transform transition-all duration-300 group-hover:scale-x-110"></div>

        {/* Decorative element */}
        <div className="absolute -z-10 -bottom-2 left-0 right-0 h-[0.5px] bg-purple-400/20 dark:bg-purple-400/10 blur-sm"></div>
      </h2>
      {description && (
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mt-4 text-lg relative">
          {description}
          {/* Subtle underline effect */}
          <span className="absolute -bottom-1 left-0 right-0 h-[0.5px] bg-gradient-to-r from-purple-500/20 to-transparent"></span>
        </p>
      )}
    </div>
  )
}
