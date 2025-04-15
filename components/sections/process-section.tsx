import SectionTitle from "@/components/ui/section-title"
import ProcessCard from "@/components/ui/process-card"
import { ClipboardList, Paintbrush, Layers, Terminal, CheckCircle, Upload, Headphones } from "lucide-react"

interface ProcessSectionProps {
  dict: {
    title: string
    requirements: {
      title: string
      description: string
    }
    design: {
      title: string
      description: string
    }
    prototype: {
      title: string
      description: string
    }
    development: {
      title: string
      description: string
    }
    qa: {
      title: string
      description: string
    }
    deployment: {
      title: string
      description: string
    }
    support: {
      title: string
      description: string
    }
  }
}

export default function ProcessSection({ dict }: ProcessSectionProps) {
  return (
    <section className="py-20 relative">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title={dict.title} center={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessCard
            icon={<ClipboardList className="w-8 h-8 text-purple-400" />}
            title={dict.requirements.title}
            description={dict.requirements.description}
            step={1}
          />

          <ProcessCard
            icon={<Paintbrush className="w-8 h-8 text-purple-400" />}
            title={dict.design.title}
            description={dict.design.description}
            step={2}
          />

          <ProcessCard
            icon={<Layers className="w-8 h-8 text-purple-400" />}
            title={dict.prototype.title}
            description={dict.prototype.description}
            step={3}
          />

          <ProcessCard
            icon={<Terminal className="w-8 h-8 text-purple-400" />}
            title={dict.development.title}
            description={dict.development.description}
            step={4}
          />

          <ProcessCard
            icon={<CheckCircle className="w-8 h-8 text-purple-400" />}
            title={dict.qa.title}
            description={dict.qa.description}
            step={5}
          />

          <ProcessCard
            icon={<Upload className="w-8 h-8 text-purple-400" />}
            title={dict.deployment.title}
            description={dict.deployment.description}
            step={6}
          />

          <ProcessCard
            icon={<Headphones className="w-8 h-8 text-purple-400" />}
            title={dict.support.title}
            description={dict.support.description}
            step={7}
          />
        </div>
      </div>
    </section>
  )
}
