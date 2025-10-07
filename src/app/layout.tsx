import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const defaultKeywords = [
  ...siteConfig.keywords.primary,
  ...siteConfig.keywords.secondary,
  ...siteConfig.keywords.longTail,
];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Imobiliária e Construção em Bezerros | Matzah Empreendimentos & Construções",
    template: "%s | Matzah Empreendimentos & Construções",
  },
  description: siteConfig.description,
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Imobiliária e Construção em Bezerros | Matzah Empreendimentos & Construções",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    countryName: "Brasil",
    images: [
      {
        url: `${siteConfig.url}/images/hero-construcao.jpg`,
        width: 1200,
        height: 630,
        alt: "Equipe Matzah apresentando empreendimento em Bezerros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Imobiliária e Construção em Bezerros | Matzah Empreendimentos & Construções",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/hero-construcao.jpg`,
  sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postalCode,
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${poppins.variable} flex min-h-screen flex-col bg-neutral-50 text-neutral-900 antialiased`}
      >
        <Header />
        <main className="flex-1 pt-24 pb-16">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
