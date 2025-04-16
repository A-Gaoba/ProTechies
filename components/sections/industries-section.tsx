import SectionTitle from "@/components/ui/section-title"
import IndustryCard from "@/components/ui/industry-card"
import { ShoppingBag, GraduationCap, Heart, Building, Utensils, Clock } from "lucide-react"

interface IndustriesSectionProps {
  dict: {
    title: string
    description: string
    ecommerce: string
    education: string
    healthcare: string
    realestate: string
    food: string
    ondemand: string
  }
}

export default function IndustriesSection({ dict }: IndustriesSectionProps) {
  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative md:max-h-[90vh]">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title={dict.title} description={dict.description} center={true} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <IndustryCard icon={<ShoppingBag className="w-8 h-8 text-purple-400" />} title={dict.ecommerce} />
          <IndustryCard icon={<GraduationCap className="w-8 h-8 text-purple-400" />} title={dict.education} />
          <IndustryCard icon={<Heart className="w-8 h-8 text-purple-400" />} title={dict.healthcare} />
          <IndustryCard icon={<Building className="w-8 h-8 text-purple-400" />} title={dict.realestate} />
          <IndustryCard icon={<Utensils className="w-8 h-8 text-purple-400" />} title={dict.food} />
          <IndustryCard icon={<Clock className="w-8 h-8 text-purple-400" />} title={dict.ondemand} />
        </div>
      </div>
    </section>
  )
}
