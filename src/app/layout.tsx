import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SiteLoader } from "@/components/site/site-loader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mazixstudios.com"),
  title: "Mazix Studios | AI Systems, Spatial Computing, and Cloud",
  description:
    "Mazix Studios designs and operates AI, XR, and cloud systems for organizations that need one company across the full stack.",
  keywords: [
    "Mazix Studios",
    "IT solutions",
    "XR development",
    "AR VR MR",
    "AI computer vision",
    "AWS cloud",
    "Next.js web development",
    "Unity development",
  ],
  openGraph: {
    title: "Mazix Studios | AI Systems, Spatial Computing, and Cloud",
    description:
      "One studio for every layer of your product: XR & spatial, AI & vision, cloud & DevOps, web & mobile.",
    type: "website",
    url: "https://mazixstudios.com",
    siteName: "Mazix Studios",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#121420" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${jetbrains.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-accent-foreground"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <SiteLoader />
          <Header />
          <div id="main" className="flex-1">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
