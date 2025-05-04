"use client"

import { useState } from "react"
import SectionTitle from "@/components/ui/section-title"
import Image from "@/components/ui/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface TestimonialsSectionProps {
  dict: {
    title: string
    description: string
    testimonials: {
      content: string
      author: string
      position: string
      company: string
      rating: number
    }[]
  }
}

export default function TestimonialsSection({ dict }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % dict.testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + dict.testimonials.length) % dict.testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative min-h-[80vh]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title={dict.title} description={dict.description} center={true} />

        <div className="max-w-5xl mx-auto mt-12 relative">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

            <div className="relative bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-purple-500/20">
              <div className="absolute top-8 left-8 text-purple-500/20 dark:text-purple-400/20">
                <Quote size={80} />
              </div>

              <div className="relative z-10">
                <div className="min-h-[200px] flex flex-col justify-between">
                  <motion.p
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 relative z-10"
                  >
                    "{dict.testimonials[activeIndex].content}"
                  </motion.p>

                  <div className="flex items-center justify-between">
                    <motion.div
                      key={`author-${activeIndex}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-purple-500">
                        <Image
                          src="https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
                          alt={dict.testimonials[activeIndex].author}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {dict.testimonials[activeIndex].author}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {dict.testimonials[activeIndex].position}, {dict.testimonials[activeIndex].company}
                        </p>
                        <div className="flex mt-1 ">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < dict.testimonials[activeIndex].rating ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    <div className="flex gap-2">
                      <button
                        onClick={prevTestimonial}
                        className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-500 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-500 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute md:bottom-4 mt-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {dict.testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${index === activeIndex
                        ? "bg-purple-600 w-6"
                        : "bg-gray-300 dark:bg-gray-700 hover:bg-purple-400 dark:hover:bg-purple-600"
                        }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                      aria-current={index === activeIndex ? "true" : "false"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
