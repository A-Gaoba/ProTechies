  "use client"

  import { useState } from "react"
  import SectionTitle from "@/components/ui/section-title"
  import Image from "next/image"

  interface TechnologiesSectionProps {
    dict: {
      title: string
    }
  }

  export default function TechnologiesSection({ dict }: TechnologiesSectionProps) {
    const technologies = [
      { name: "JavaScript", logo: "/placeholder.svg?height=80&width=80&text=JS" },
      { name: "React", logo: "/placeholder.svg?height=80&width=80&text=React" },
      { name: "React", logo: "/placeholder.svg?height=80&width=80&text=React" },
      { name: "React", logo: "/placeholder.svg?height=80&width=80&text=React" },
      { name: "Next.js", logo: "/placeholder.svg?height=80&width=80&text=Next.js" },
      { name: "TypeScript", logo: "/placeholder.svg?height=80&width=80&text=TS" },
      { name: "Node.js", logo: "/placeholder.svg?height=80&width=80&text=Node.js" },
      { name: "TailwindCSS", logo: "/placeholder.svg?height=80&width=80&text=Tailwind" },
      { name: "MongoDB", logo: "/placeholder.svg?height=80&width=80&text=MongoDB" },
      { name: "Docker", logo: "/placeholder.svg?height=80&width=80&text=Docker" },
    ]

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    return (
      <section className="py-20 relative">
        {/* Enhanced Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div
            className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "10s" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "12s" }}
          ></div>

          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle title={dict.title} center={true} />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* 3D Shadow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

                <div className="relative bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-purple-500/20">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    <Image
                      src={tech.logo || "/placeholder.svg"}
                      alt={tech.name}
                      width={80}
                      height={80}
                      className={`max-h-16 w-auto transition-all duration-500 ${hoveredIndex === index ? "filter-none" : "filter grayscale opacity-70"
                        } transform group-hover:scale-110`}
                    />
                  </div>
                  <span
                    className={`text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300 ${hoveredIndex === index ? "text-purple-600 dark:text-purple-400" : ""
                      }`}
                  >
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
