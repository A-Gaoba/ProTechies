import type React from "react";
import type { Locale } from "@/i18n/config";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>; // 👈 Notice the Promise here
}) {
  const { locale } = await props.params; // 👈 Await here

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
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}
