import SectionTitle from "@/components/ui/section-title"
import ServiceCard from "@/components/ui/service-card"
import { Code, Cpu, Globe } from "lucide-react"

interface ServicesSectionProps {
  dict: {
    title: string
    learnMore: string
    app: {
      title: string
      description: string
    }
    web: {
      title: string
      description: string
    }
    devops: {
      title: string
      description: string
    }
  }
}

export default function ServicesSection({ dict }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 relative min-h-[90vh]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title={dict.title} center={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Cpu className="w-8 h-8 text-purple-400" />}
            title={dict.app.title}
            description={dict.app.description}
            learnMoreText={dict.learnMore}
          />

          <ServiceCard
            icon={<Code className="w-8 h-8 text-purple-400" />}
            title={dict.web.title}
            description={dict.web.description}
            learnMoreText={dict.learnMore}
          />

          <ServiceCard
            icon={<Globe className="w-8 h-8 text-purple-400" />}
            title={dict.devops.title}
            description={dict.devops.description}
            learnMoreText={dict.learnMore}
          />
        </div>
      </div>
    </section>
  )
}
