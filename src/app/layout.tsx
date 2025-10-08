import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const DEFAULT_URL = "https://assessoria-do-bem-design.netlify.app";
const DEFAULT_DESCRIPTION = "";

const fontPoppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

const fontMontserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Assessoria do bem",
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Lei do Bem",
    "Incentivos à Inovação",
    "Figroup",
    "Epsa",
    "Finiciativas",
    "ABGI",
    "GAC",
    "GT",
    "PwC",
    "EY",
    "KPMG",
    "Martinelli",
    "Amack",
    "Galapos",
    "Pier",
    "RVC",
    "BRICS",
    "Alma",
    "Deloitte",
    "Financiamento da Inovação",
    "FINEP",
    "BNDES",
    "MCTI",
    "Imposto de Renda",
    "Contribuição Social",
    "IRPJ",
    "CSLL",
    "Mover",
    "Ex-Tarifário",
    "R&D",
  ],
  robots: "index follow",
  alternates: {
    canonical: DEFAULT_URL,
    languages: {
      "pt-BR": DEFAULT_URL,
    },
  },
  openGraph: {
    title: "Assessoria do bem",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_URL + "/LOGO.png",
        width: 1200,
        height: 630,
        alt: "Assessoria do bem Logo",
      },
    ],
    type: "website",
    siteName: "Assessoria do bem",
    url: DEFAULT_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Assessoria do bem",
    description: "",
    images: [DEFAULT_URL + "/LOGO.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.svg",
      },
    ],
  },
  other: {
    "application-name": "Assessoria do bem",
  },
  authors: [{ name: "Assessoria do bem" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head />
      <body
        className={`${fontPoppins.variable} ${fontMontserrat.variable} antialiased`}
      >
        {/* Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NGSGNFMG');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {children}

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGSGNFMG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
  );
}
