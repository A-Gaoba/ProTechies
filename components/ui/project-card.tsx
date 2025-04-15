import Image from "next/image"

interface ProjectCardProps {
  imageSrc: string
  title: string
  description: string
  tags: string[]
}

export default function ProjectCard({ imageSrc, title, description, tags }: ProjectCardProps) {
  return (
    <div className="group relative">
      {/* 3D Shadow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

      <div className="relative bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-purple-500/20">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={500}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* Animated overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

          <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white transform group-hover:translate-y-0 transition-transform duration-300">
            {title}
          </h3>
        </div>
        <div className="p-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-purple-500/20 text-purple-700 dark:text-purple-300 text-xs px-3 py-1 rounded-full transform transition-transform duration-300 hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
