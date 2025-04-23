import type React from "react";
import type { Locale } from "@/i18n/config";
import { ThemeProvider } from "@/components/theme-provider";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  if (!["en", "ar"].includes(locale)) {
    return {
      title: "ProTechies",
      description: "Invalid locale",
    };
  }

  const dict = await getDictionary(locale);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://protechies.com";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "ProTechies - Professional Web Development Company",
      template: "%s | ProTechies",
    },
    description:
      "ProTechies is a leading web and mobile app development company offering custom software solutions, UI/UX design, and DevOps services for businesses of all sizes.",
    keywords: [
      "web development",
      "app development",
      "UI/UX design",
      "DevOps",
      "software development",
      "digital solutions",
      "custom applications",
      "mobile apps",
      "technology company",
    ],
    authors: [{ name: "ProTechies Team" }],
    creator: "ProTechies",
    publisher: "ProTechies",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
    openGraph: {
      title: "ProTechies - Professional Web Development Company",
      description:
        "Custom web and mobile app development services with cutting-edge technology solutions for businesses of all sizes.",
      url: `${baseUrl}/${locale}`,
      siteName: "ProTechies",
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "ProTechies - Web Development Company",
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "ProTechies - Professional Web Development Company",
      description:
        "Custom web and mobile app development services with cutting-edge technology solutions for businesses of all sizes.",
      images: [`${baseUrl}/images/twitter-image.jpg`],
      creator: "@protechies",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "google-site-verification-code",
      yandex: "yandex-verification-code",
      yahoo: "yahoo-verification-code",
      other: {
        me: ["info@protechies.com"],
      },
    },
    category: "Technology",
  };
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await props.params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <title>ProTechies - Web Development Company</title>
        <meta
          name="description"
          content="Professional web development services for businesses of all sizes"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "ProTechies",
                url: process.env.NEXT_PUBLIC_BASE_URL || "https://protechies.com",
                logo: `${process.env.NEXT_PUBLIC_BASE_URL || "https://protechies.com"}/logo.png`,
                description:
                  "Professional web and mobile app development company offering custom software solutions.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Tech City",
                  addressRegion: "TC",
                  postalCode: "12345",
                  addressCountry: "US",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+1-555-123-4567",
                  contactType: "customer service",
                  email: "contact@protechies.com",
                  availableLanguage: ["English", "Arabic"],
                },
                sameAs: [
                  "https://www.facebook.com/protechies",
                  "https://www.twitter.com/protechies",
                  "https://www.linkedin.com/company/protechies",
                  "https://www.github.com/protechies",
                ],
                serviceArea: ["Worldwide"],
                knowsLanguage: ["en", "ar"],
              }),
            }}
          />
          {props.children}
          {/* WhatsApp Floating Chat Icon */}
          <a
            href="https://wa.me/+79174828474" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:bg-green-600"
            aria-label="Chat on WhatsApp"
          >
            <svg
              className="h-8 w-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 2C8.27 2 2 8.28 2 16c0 2.64.69 5.13 2 7.33L2 30l6.84-1.79A13.93 13.93 0 0 0 16 30c7.73 0 14-6.28 14-14S23.73 2 16 2Zm0 25.87c-2.3 0-4.5-.63-6.42-1.82l-.46-.28-4.06 1.06 1.09-3.95-.3-.48A11.8 11.8 0 0 1 4.14 16c0-6.55 5.32-11.87 11.86-11.87 6.54 0 11.86 5.32 11.86 11.87 0 6.54-5.32 11.87-11.86 11.87Zm6.35-8.69c-.35-.18-2.07-1.02-2.39-1.14-.32-.12-.55-.18-.78.18-.23.35-.9 1.14-1.1 1.37-.2.23-.4.25-.74.08-.35-.18-1.48-.55-2.82-1.76-1.04-.93-1.74-2.1-1.95-2.45-.2-.35-.02-.54.16-.72.16-.15.35-.4.52-.6.18-.2.23-.35.35-.58.12-.23.06-.43 0-.61-.08-.18-.74-1.79-1.02-2.46-.27-.64-.55-.55-.74-.56-.2-.01-.42-.01-.64-.01-.23 0-.6.09-.92.43-.32.34-1.22 1.2-1.22 2.93s1.25 3.39 1.43 3.63c.18.23 2.44 3.73 5.91 5.23 3.48 1.5 3.48 1 4.11.93.64-.06 2.07-.84 2.36-1.65.3-.82.3-1.51.2-1.65-.08-.13-.32-.21-.67-.38Z" />
            </svg>
          </a>

        </ThemeProvider>
      </body>
    </html>
  );
}
