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
    }
  }
}

export default function ContactSection({ dict }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative min-h-[90vh]">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title={dict.title} center={true} />

        <div className="max-w-5xl mx-auto">
          <div className="group relative">
            {/* 3D Shadow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

            <div className="relative bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-purple-500/20 transform group-hover:scale-[1.01] transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{dict.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-8">{dict.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300 shadow-md shadow-purple-500/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-purple-600 dark:text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        contact@protechies.com
                      </span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-300 shadow-md shadow-purple-500/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-purple-600 dark:text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        +1 (555) 123-4567
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 md:p-12 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 bg-purple-500/10 rounded-full blur-xl transform rotate-45"></div>
                  <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 bg-pink-500/10 rounded-full blur-xl transform rotate-45"></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{dict.formTitle}</h3>
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {dict.form.name}
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 bg-white dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white shadow-sm"
                          placeholder={dict.form.namePlaceholder}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {dict.form.email}
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 bg-white dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white shadow-sm"
                          placeholder={dict.form.emailPlaceholder}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {dict.form.message}
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-4 py-2 bg-white dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white shadow-sm"
                          placeholder={dict.form.messagePlaceholder}
                        ></textarea>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium shadow-lg shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300">
                        {dict.form.submit}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
