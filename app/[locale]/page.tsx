"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import IndustriesSection from "@/components/sections/industries-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ProcessSection from "@/components/sections/process-section"
import ProjectsSection from "@/components/sections/projects-section"
import TechnologiesSection from "@/components/sections/technologies-section"
import ContactSection from "@/components/sections/contact-section"
import LoadingScreen from "@/components/loading-screen"
import WhyChooseUsSection from "@/components/sections/why-choose-us-setion"
import FAQSection from "@/components/sections/faq-seciton"

import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const { locale } = useParams() as { locale: Locale }

  const [dict, setDict] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDictionary = async () => {
      const dictionary = await getDictionary(locale)
      setDict(dictionary)

      // Delay to make the animation smoother
      setTimeout(() => setLoading(false), 2000)
    }

    fetchDictionary()
  }, [locale])

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual"
      window.scrollTo(0, 0)
      return () => {
        history.scrollRestoration = "auto"
      }
    }
  }, [])

  if (!dict) return <LoadingScreen />

  return (
    <>
      <LoadingScreen />
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`min-h-screen ${locale === "ar" ? "rtl" : "ltr"} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
          >
            <Header locale={locale} dict={dict.nav} />
            <main>
              <HeroSection dict={dict.hero} />
              <AboutSection dict={dict.about} />
              <WhyChooseUsSection dict={dict.whyChooseUs} />
              <ServicesSection dict={dict.services} />
              <IndustriesSection dict={dict.industries} />
              <TestimonialsSection dict={dict.testimonials} />
              <ProcessSection dict={dict.process} />
              <ProjectsSection dict={dict.projects} />
              <TechnologiesSection dict={dict.technologies} />
              <FAQSection dict={dict.faq} />
              <ContactSection dict={dict.contact} />
            </main>
            <Footer dict={dict.footer} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
