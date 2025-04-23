"use client"

import { useState } from "react"
import SectionTitle from "@/components/ui/section-title"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface FAQSectionProps {
  dict: {
    title: string
    description: string
    faqs: {
      question: string
      answer: string
    }[]
  }
}

export default function FAQSection({ dict }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Return null if dict is undefined or doesn't have the expected structure
  if (!dict || !dict.title) {
    console.warn("FAQSection: Missing required dictionary data")
    return null
  }

  // Make sure we have a valid faqs array, even if empty
  const faqs = Array.isArray(dict.faqs) ? dict.faqs : []

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative min-h-[80vh]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title={dict.title} description={dict.description} center={true} />

        <div className="max-w-3xl mx-auto mt-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative mb-4"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/20">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${openIndex === index ? "transform rotate-180" : ""
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-700 dark:text-gray-300">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
