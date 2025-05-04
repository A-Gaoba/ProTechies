import SectionTitle from "@/components/ui/section-title"
import ProjectCard from "@/components/ui/project-card"

interface Project {
  title: string
  description: string
  tags: string[]
  imageSrc: string
  link: string
}

interface ProjectsSectionProps {
  dict: {
    title: string
    description: string
    junzi: Project
    attaché: Project
    sharaf: Project
    toru: Project
    alnono: Project
    gaobavid: Project
    crystallpool: Project
    loqmat: Project
    sara: Project
    ghofran: Project
  }
}

export default function ProjectsSection({ dict }: { dict: ProjectsSectionProps["dict"] }) {
  const projects = [
    {
      ...dict.junzi,
      tags: ["React", "Tailwind CSS", "Node.js"],
      imageSrc: "/projectsImages/junzi.png",
      link: "https://www.junzitechsolutions.com/landing",
    },
    {
      ...dict.attaché,
      tags: ["React", "Express", "MongoDB", "Tailwind"],
      imageSrc: "/projectsImages/yemen.png",
      link: "https://yemculru.com/",
    },
    {
      ...dict.sharaf,
      tags: ["HTML", "CSS", "JavaScript"],
      imageSrc: "/projectsImages/sharaf.png",
      link: "https://almahaqeri.vercel.app/",
    },
    {
      ...dict.toru,
      tags: ["React", "Tailwind CSS"],
      imageSrc: "/projectsImages/toru.png",
      link: "https://toru.netlify.app/",
    },
    {
      ...dict.alnono,
      tags: ["React", "Tailwind CSS", "Multimedia"],
      imageSrc: "/projectsImages/alnono.png",
      link: "https://alialnono.vercel.app/",
    },
    {
      ...dict.gaobavid,
      tags: ["React", "Material UI", "YouTube API"],
      imageSrc: "/projectsImages/gaobavide.png",
      link: "https://gaobavid.netlify.app/",
    },
    {
      ...dict.crystallpool,
      tags: ["React", "Tailwind", "TypeScript"],
      imageSrc: "/projectsImages/crystallpool.png",
      link: "https://crystallpool.vercel.app/",
    },
    {
      ...dict.loqmat,
      tags: ["React", "Tailwind", "TypeScript"],
      imageSrc: "/projectsImages/loqmat-hala.png",
      link: "https://loqmat-hala.vercel.app/",
    },
    {
      ...dict.sara,
      tags: ["HTML", "CSS", "JavaScript"],
      imageSrc: "/projectsImages/sara.png",
      link: "https://sara-alhassany.vercel.app/",
    },
    {
      ...dict.ghofran,
      tags: ["HTML", "CSS", "JavaScript"],
      imageSrc: "/projectsImages/ghofran.png",
      link: "https://ghofran-badran.vercel.app/",
    },
  ]

  return (
    <section id="portfolio" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative min-h-[90vh]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title={dict.title} description={dict.description} center={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
