import type React from "react";
import type { Locale } from "@/i18n/config";
import { ThemeProvider } from "@/components/theme-provider";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  // ✅ تأكد أن locale صالح
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
        </ThemeProvider>
      </body>
    </html>
  );
}
