import Image from "next/image"
import SectionTitle from "@/components/ui/section-title"

interface AboutSectionProps {
  dict: {
    title: string
    innovation: {
      title: string
      description: string
    }
    commitment: {
      title: string
      description: string
    }
    tailored: {
      title: string
      description: string
    }
  }
}

export default function AboutSection({ dict }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative min-h-[90vh]">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <div className="relative">
              {/* Enhanced decorative elements */}
              <div
                className="absolute -top-5 -left-5 bg-purple-500/20 rounded-full w-20 h-20 backdrop-blur-sm animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
              <div
                className="absolute -bottom-5 -right-5 bg-pink-500/20 rounded-full w-20 h-20 backdrop-blur-sm animate-pulse"
                style={{ animationDuration: "5s" }}
              ></div>

              {/* 3D Shadow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>

              <div className="relative flex justify-center items-center z-10 bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-purple-500/10 transform hover:scale-[1.01] transition-all duration-300">
                <Image
                  src="https://img.freepik.com/free-psd/web-design-with-hands-sale-background_23-2151649820.jpg?uid=R34285630&ga=GA1.1.658265905.1744735924&semt=ais_hybrid&w=740"
                  alt="About Us Illustration"
                  width={400}
                  height={400}
                  className="rounded-lg md:block hidden"
                />
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <SectionTitle title={dict.title} />

            <div className="space-y-8">
              <div className="group relative">
                {/* 3D Shadow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-purple-500/20">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
                    {dict.innovation.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{dict.innovation.description}</p>
                </div>
              </div>

              <div className="group relative">
                {/* 3D Shadow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-purple-500/20">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
                    {dict.commitment.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{dict.commitment.description}</p>
                </div>
              </div>

              <div className="group relative">
                {/* 3D Shadow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-purple-500/20">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
                    {dict.tailored.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{dict.tailored.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
