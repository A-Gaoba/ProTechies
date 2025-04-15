import type { Locale } from "../config"

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  ar: () => import("./ar.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  try {
    return await dictionaries[locale]()
  } catch (error) {
    console.error(`Error loading dictionary for locale: ${locale}`, error)
    // Fallback to English if there's an error
    return await dictionaries.en()
  }
}
