import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mesum Ali - Full Stack Developer | AI Developer | GIAIC Trainee",
  description:
    "I am a Full Stack Developer & Agentic AI Developer with over 1 year of experience. Passionate about creating dynamic websites & scalable AI-powered applications. GIAIC Trainee (2023–Present).",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "AI Developer",
    "Agentic AI Developer",
    "Python Developer",
    "Artificial Intelligence",
    "Web Development",
    "React Developer",
    "Node.js",
    "JavaScript",
    "UI/UX Design",
    "Machine Learning",
    "Next.js Developer",
    "GIAIC Trainee",
    "Tech Innovation",
  ],
  authors: [{ name: "Mesum Ali", url: "https://www.mesumali.xyz" }],
  creator: "Mesum Ali",
  metadataBase: new URL("https://www.mesumali.xyz"),
  alternates: {
    canonical: "/",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.mesumali.xyz",
    title: "Mesum Ali - Full Stack & AI Agents Developer",
    description:
      "Expert in building autonomous AI agents and scalable full-stack architectures. Architecting the future of intelligent systems.",
    images: [
      {
        url: "/mesum.png",
        width: 1200,
        height: 630,
        alt: "Mesum Ali - Software Engineer & AI Developer",
      },
    ],
    siteName: "Mesum Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mesumali_dev",
    title: "Mesum Ali - Full Stack & AI Agents Developer",
    description:
      "Expert in building autonomous AI agents and scalable full-stack architectures.",
    images: ["/mesum.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syed Mesum Ali Shah",
    "url": "https://www.mesumali.xyz",
    "image": "https://www.mesumali.xyz/mesum.png",
    "sameAs": [
      "https://github.com/mesumali-dev/",
      "https://www.linkedin.com/in/mesumali-dev/",
      "https://x.com/mesumali_dev"
    ],
    "jobTitle": "Full Stack & AI Agents Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Software Engineering Student and AI Developer specializing in autonomous agents and production-ready full-stack applications."
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
