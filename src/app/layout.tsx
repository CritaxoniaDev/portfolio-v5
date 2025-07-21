import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spo_ui29h3j3 = localFont({
  src: [
    {
      path: "../fonts/h9k2.woff2",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-custom",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gian Raphael Delos Reyes | Software Engineer Portfolio",
    template: "%s | Gian Raphael Delos Reyes"
  },
  description: "Passionate software engineering student specializing in full-stack development, UI/UX design, and Microsoft Power Platform. Explore my projects and skills in web development, mobile apps, and enterprise solutions.",
  keywords: [
    "Gian Raphael Delos Reyes",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Java Developer",
    "Laravel Developer",
    "UI/UX Designer",
    "Microsoft Power Platform",
    "Web Development",
    "Portfolio",
    "First City Providential College",
    "Philippines Developer"
  ],
  authors: [{ name: "Gian Raphael Delos Reyes" }],
  creator: "Gian Raphael Delos Reyes",
  publisher: "Gian Raphael Delos Reyes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gianraphael.dev"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gianraphael.dev", // Replace with your actual domain
    title: "Gian Raphael Delos Reyes | Software Engineer Portfolio",
    description: "Passionate software engineering student specializing in full-stack development, UI/UX design, and Microsoft Power Platform. Explore my projects and skills.",
    siteName: "Gian Raphael Portfolio",
    images: [
      {
        url: "/images/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Gian Raphael Delos Reyes - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gian Raphael Delos Reyes | Software Engineer Portfolio",
    description: "Passionate software engineering student specializing in full-stack development, UI/UX design, and Microsoft Power Platform.",
    images: ["/images/twitter-image.jpg"], // Add your Twitter card image
    creator: "@gianraphael", // Replace with your actual Twitter handle
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
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Custom SVG Favicon for GA initials */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23000'/><rect x='5' y='5' width='90' height='90' fill='%23fff' stroke='%23000' stroke-width='2'/><rect x='10' y='10' width='80' height='80' fill='%23000'/><text x='50' y='65' font-family='Arial,sans-serif' font-size='36' font-weight='bold' text-anchor='middle' fill='%23fff'>GA</text><circle cx='20' cy='20' r='2' fill='%23fff'/><circle cx='80' cy='20' r='2' fill='%23fff'/><circle cx='20' cy='80' r='2' fill='%23fff'/><circle cx='80' cy='80' r='2' fill='%23fff'/></svg>" sizes="any" />
        
        {/* Alternative PNG favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        
        {/* Apple Touch Icon with GA logo */}
        <link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'><rect width='180' height='180' rx='40' fill='%23000'/><rect x='10' y='10' width='160' height='160' rx='30' fill='%23fff' stroke='%23000' stroke-width='3'/><rect x='20' y='20' width='140' height='140' rx='20' fill='%23000'/><text x='90' y='115' font-family='Arial,sans-serif' font-size='64' font-weight='bold' text-anchor='middle' fill='%23fff'>GA</text><circle cx='40' cy='40' r='3' fill='%23fff'/><circle cx='140' cy='40' r='3' fill='%23fff'/><circle cx='40' cy='140' r='3' fill='%23fff'/><circle cx='140' cy='140' r='3' fill='%23fff'/><rect x='70' y='30' width='40' height='4' fill='%23fff'/><rect x='70' y='146' width='40' height='4' fill='%23fff'/></svg>" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gian Raphael Delos Reyes",
              "jobTitle": "Software Engineering Student",
              "description": "Passionate software engineering student specializing in full-stack development, UI/UX design, and Microsoft Power Platform.",
              "url": "https://gianraphael.dev", // Replace with your actual domain
              "sameAs": [
                "https://github.com/CritaxoniaDev",
                "https://linkedin.com/in/gianraphael", // Replace with actual LinkedIn
                // Add other social media profiles
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "First City Providential College"
              },
              "knowsAbout": [
                "Software Engineering",
                "Full Stack Development",
                "React",
                "Java",
                "Laravel",
                "UI/UX Design",
                "Microsoft Power Platform"
              ]
            })
          }}
        />
      </head>
      <body className={`${spo_ui29h3j3.variable} tracking-tight font-custom antialiased`}>
        {children}
      </body>
    </html>
  );
}
