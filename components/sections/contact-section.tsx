"use client"
import React, { useState, useEffect } from "react"
import SectionTitle from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  dict: {
    title: string
    description: string
    formTitle: string
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      message: string
      messagePlaceholder: string
      submit: string
      success: string
      error: string
    }
  }
}

export default function ContactSection({ dict }: ContactSectionProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"success" | "error" | null>(null)

  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => setStatus(null), 5000)
      return () => clearTimeout(timeout)
    }
  }, [status])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("https://formspree.io/f/maygedly", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus("success")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative min-h-[90vh]">
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title={dict.title} center />

        <div className="max-w-5xl mx-auto">
          <div className="group relative">
            {/* Shadow Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

            <div className="relative bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-purple-500/20 group-hover:scale-[1.01] transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                {/* Left Section */}
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{dict.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-8">{dict.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center group gap-2">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">abdulrahmangooba@gmail.com</span>
                    </div>
                    <div className="flex items-center group gap-2">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.493a1 1 0 01-.5 1.21L8.47 11.5a11.042 11.042 0 005.52 5.52l1.11-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.69.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">+7 917 482 84 74</span>
                    </div>
                    <div className="flex items-center group gap-2">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300 shadow-md shadow-purple-500/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm7.5 2.25a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm0 1.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm5.25-2.75a.75.75 0 100 1.5.75.75 0 000-1.5z" />
                        </svg>
                      </div>
                      <a
                        href="https://www.instagram.com/protechies.web"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
                      >
                        protechies.web
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Form Section */}
                <div className="md:w-1/2 p-8 md:p-12 relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{dict.formTitle}</h3>
                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {dict.form.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 bg-white dark:bg-gray-800/80 border rounded-lg text-gray-900 dark:text-white"
                        placeholder={dict.form.namePlaceholder}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {dict.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 bg-white dark:bg-gray-800/80 border rounded-lg text-gray-900 dark:text-white"
                        placeholder={dict.form.emailPlaceholder}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {dict.form.message}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2 bg-white dark:bg-gray-800/80 border rounded-lg text-gray-900 dark:text-white"
                        placeholder={dict.form.messagePlaceholder}
                        required
                      />
                    </div>
                    {status === "success" && (
                      <p className="text-green-600 bg-green-100 dark:bg-green-900/10 p-3 rounded-md text-sm">{dict.form.success}</p>
                    )}
                    {status === "error" && (
                      <p className="text-red-600 bg-red-100 dark:bg-red-900/10 p-3 rounded-md text-sm">{dict.form.error}</p>
                    )}
                    <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      {dict.form.submit}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
