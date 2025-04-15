import SectionTitle from "@/components/ui/section-title"
import ProjectCard from "@/components/ui/project-card"

interface ProjectsSectionProps {
  dict: {
    title: string
    description: string
    project1: {
      title: string
      description: string
    }
    project2: {
      title: string
      description: string
    }
    project3: {
      title: string
      description: string
    }
  }
}

export default function ProjectsSection({ dict }: ProjectsSectionProps) {
  return (
    <section id="portfolio" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative min-h-[90vh]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title={dict.title} description={dict.description} center={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            imageSrc="/placeholder.svg?height=300&width=500"
            title={dict.project1.title}
            description={dict.project1.description}
            tags={["React", "Node.js", "MongoDB"]}
          />

          <ProjectCard
            imageSrc="/placeholder.svg?height=300&width=500"
            title={dict.project2.title}
            description={dict.project2.description}
            tags={["Vue.js", "Python", "TensorFlow"]}
          />

          <ProjectCard
            imageSrc="/placeholder.svg?height=300&width=500"
            title={dict.project3.title}
            description={dict.project3.description}
            tags={["React Native", "Firebase", "GraphQL"]}
          />
        </div>
      </div>
    </section>
  )
}
