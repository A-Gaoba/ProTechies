import Link from "next/link"

interface FooterProps {
  dict: {
    copyright: string
  }
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white py-12 border-t border-gray-200 dark:border-purple-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-l from-purple-500/10 to-pink-500/10 filter blur-xl"></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold relative inline-block">
              <span className="text-white">PRO</span>
              <span className="text-purple-500">TECHIES</span>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Transforming digital visions into reality with cutting-edge web development solutions.
            </p>
            <p className="text-gray-500 text-sm">
              {dict.copyright} © {new Date().getFullYear()}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400 relative inline-block">
              Quick Links
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 w-2/3"></div>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-purple-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-purple-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-purple-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-purple-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-purple-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400 relative inline-block">
              Services
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 w-2/3"></div>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-purple-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-purple-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-purple-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  DevOps
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-purple-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-purple-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400 relative inline-block">
              Connect
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 w-2/3"></div>
            </h4>
            <div className="flex space-x-4 mb-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm flex items-center group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 group-hover:text-purple-400 transition-colors"
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
                <span className="group-hover:text-purple-400 transition-colors">contact@protechies.com</span>
              </p>
              <p className="text-gray-400 text-sm flex items-center group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 group-hover:text-purple-400 transition-colors"
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
                <span className="group-hover:text-purple-400 transition-colors">+1 (555) 123-4567</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright bar with gradient */}
        <div className="mt-8 pt-8 border-t border-gray-200/10 dark:border-gray-700/10">
          <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg p-4 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ProTechies. Crafted with passion and cutting-edge technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
