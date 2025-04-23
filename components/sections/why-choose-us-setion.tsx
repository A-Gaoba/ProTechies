"use client"

import { CheckCircle } from "lucide-react"
import SectionTitle from "@/components/ui/section-title"
import Image from "@/components/ui/image"
import { motion } from "framer-motion"

interface WhyChooseUsSectionProps {
  dict: {
    title: string
    description: string
    reasons: {
      title: string
      description: string
    }[]
  }
}

export default function WhyChooseUsSection({ dict }: WhyChooseUsSectionProps) {
  // Return null if dict is undefined or doesn't have the expected structure
  if (!dict || !dict.title || !dict.reasons) {
    console.warn("WhyChooseUsSection: Missing required dictionary data")
    return null
  }

  return (
    <section id="why-choose-us" className="py-24 relative min-h-[80vh]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title={dict.title} description={dict.description} center={true} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

            <div className="relative flex justify-center items-center bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-purple-500/10">
              <Image
                src="https://img.freepik.com/free-photo/business-man-holding-clipboard-with-why-choose-us-question_23-2148932313.jpg?uid=R34285630&ga=GA1.1.658265905.1744735924&semt=ais_hybrid&w=740"
                alt="Why choose ProTechien"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-6">
            {dict.reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-purple-500/20">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                        <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
                        {reason.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">{reason.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
